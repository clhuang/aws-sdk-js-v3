import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeCertificatesCommand,
  DescribeCertificatesCommandInput,
  DescribeCertificatesCommandOutput,
} from "../commands/DescribeCertificatesCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeCertificatesCommandInput,
  ...args: any
): Promise<DescribeCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeCertificatesCommand(input, ...args));
};
const makePagedRequest = async (
  client: RDS,
  input: DescribeCertificatesCommandInput,
  ...args: any
): Promise<DescribeCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.describeCertificates(input, ...args);
};
export async function* describeCertificatesPaginate(
  config: RDSPaginationConfiguration,
  input: DescribeCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeCertificatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeCertificatesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}