import { parseUrl } from "@aws-sdk/url-parser";
import { createSign } from "crypto";

/** Input type to getSignedUrl and getSignedCookies. */
export type CloudfrontSignInput = CloudfrontSignInputWithParameters | CloudfrontSignInputWithPolicy;

export interface CloudfrontSignInputBase {
  /** The URL string to sign. */
  url: string;
  /** The ID of the Cloudfront key pair. */
  keyPairId: string;
  /** The content of the Cloudfront private key. */
  privateKey: string | Buffer;
  /** The date string for when the signed URL or cookie can no longer be accessed. */
  dateLessThan?: string;
  /** The IP address string to restrict signed URL access to. */
  ipAddress?: string;
  /** The date string for when the signed URL or cookie can start to be accessed. */
  dateGreaterThan?: string;
}

export type CloudfrontSignInputWithParameters = CloudfrontSignInputBase & {
  /** The date string for when the signed URL or cookie can no longer be accessed */
  dateLessThan: string;
  /** For this type policy should not be provided. */
  policy?: never;
};

export type CloudfrontSignInputWithPolicy = CloudfrontSignInputBase & {
  /** The JSON-encoded policy string */
  policy: string;
  /**
   * For this type dateLessThan should not be provided.
   */
  dateLessThan?: never;
  /**
   * For this type ipAddress should not be provided.
   */
  ipAddress?: string;
  /**
   * For this type dateGreaterThan should not be provided.
   */
  dateGreaterThan?: never;
};

export interface CloudfrontSignedCookiesOutput {
  /** ID of the Cloudfront key pair. */
  "CloudFront-Key-Pair-Id": string;
  /** Hashed, signed, and base64-encoded version of the JSON policy. */
  "CloudFront-Signature": string;
  /** The unix date time for when the signed URL or cookie can no longer be accessed. */
  "CloudFront-Expires"?: number;
  /** Base64-encoded version of the JSON policy. */
  "CloudFront-Policy"?: string;
}

/**
 * Creates a signed URL string using a canned or custom policy.
 * @returns the input URL with signature attached as query parameters.
 */
export function getSignedUrl({
  dateLessThan,
  dateGreaterThan,
  url,
  keyPairId,
  privateKey,
  ipAddress,
  policy,
}: CloudfrontSignInput): string {
  const parsedUrl = parseUrl(url);
  const queryParams: string[] = [];
  for (const key in parsedUrl.query) {
    queryParams.push(`${key}=${parsedUrl.query[key]}`);
  }
  const cloudfrontSignBuilder = new CloudfrontSignBuilder({
    keyPairId,
    privateKey,
  });
  if (policy) {
    cloudfrontSignBuilder.setCustomPolicy(policy);
  } else {
    cloudfrontSignBuilder.setPolicyParameters({
      url,
      dateLessThan,
      dateGreaterThan,
      ipAddress,
    });
  }
  const cloudfrontQueryParams = cloudfrontSignBuilder.createCloudfrontAttribute();
  if (cloudfrontQueryParams["Expires"]) {
    queryParams.push(`Expires=${cloudfrontQueryParams["Expires"]}`);
  }
  if (cloudfrontQueryParams["Policy"]) {
    queryParams.push(`Policy=${cloudfrontQueryParams["Policy"]}`);
  }
  queryParams.push(`Key-Pair-Id=${keyPairId}`);
  queryParams.push(`Signature=${cloudfrontQueryParams["Signature"]}`);
  const urlWithNewQueryParams = `${url.split("?")[0]}?${queryParams.join("&")}`;
  const urlParser = new CloudfrontURLParser();
  if (urlParser.determineScheme(url) === "rtmp") {
    return urlParser.getRtmpUrl(urlWithNewQueryParams);
  }
  return urlWithNewQueryParams;
}

/**
 * Creates signed cookies using a canned or custom policy.
 * @returns an object with keys/values that can be added to cookies.
 */
export function getSignedCookies({
  ipAddress,
  url,
  privateKey,
  keyPairId,
  dateLessThan,
  dateGreaterThan,
  policy,
}: CloudfrontSignInput): CloudfrontSignedCookiesOutput {
  const cloudfrontSignBuilder = new CloudfrontSignBuilder({
    keyPairId,
    privateKey,
  });
  if (policy) {
    cloudfrontSignBuilder.setCustomPolicy(policy);
  } else {
    cloudfrontSignBuilder.setPolicyParameters({
      url,
      dateLessThan,
      dateGreaterThan,
      ipAddress,
    });
  }
  const cloudfrontCookieAttributes = cloudfrontSignBuilder.createCloudfrontAttribute();
  const cookies: CloudfrontSignedCookiesOutput = {
    "CloudFront-Key-Pair-Id": cloudfrontCookieAttributes["Key-Pair-Id"],
    "CloudFront-Signature": cloudfrontCookieAttributes["Signature"],
  };
  if (cloudfrontCookieAttributes["Expires"]) {
    cookies["CloudFront-Expires"] = cloudfrontCookieAttributes["Expires"];
  }
  if (cloudfrontCookieAttributes["Policy"]) {
    cookies["CloudFront-Policy"] = cloudfrontCookieAttributes["Policy"];
  }
  return cookies;
}

interface Policy {
  Statement: Array<{
    Resource: string;
    Condition: {
      DateLessThan: {
        "AWS:EpochTime": number;
      };
      IpAddress?: {
        "AWS:SourceIp": string;
      };
      DateGreaterThan?: {
        "AWS:EpochTime": number;
      };
    };
  }>;
}

interface PolicyDates {
  dateLessThan: number;
  dateGreaterThan?: number;
}

interface BuildPolicyInput extends PolicyDates, Pick<CloudfrontSignInput, "ipAddress"> {
  resource: string;
}

interface CloudfrontAttributes {
  Expires?: number;
  Policy?: string;
  "Key-Pair-Id": string;
  Signature: string;
}

class CloudfrontURLParser {
  public determineScheme(url: string) {
    const parts = url.split("://");
    if (parts.length < 2) {
      throw new Error("Invalid URL.");
    }
    return parts[0].replace("*", "");
  }

  public getRtmpUrl(rtmpUrl: string) {
    const parsed = new URL(rtmpUrl);
    return parsed.pathname.replace(/^\//, "") + parsed.search + parsed.hash;
  }

  public getResource(url: string): string {
    switch (this.determineScheme(url)) {
      case "http":
      case "https":
        return url;
      case "rtmp":
        return this.getRtmpUrl(url);
      default:
        throw new Error("Invalid URI scheme. Scheme must be one of http, https, or rtmp");
    }
  }
}

class CloudfrontSignBuilder {
  private keyPairId: string;
  private privateKey: string | Buffer;
  private policy: string;
  private customPolicy = false;
  private dateLessThan?: number | undefined;
  private urlParser = new CloudfrontURLParser();
  constructor({ privateKey, keyPairId }: { keyPairId: string; privateKey: string | Buffer }) {
    this.keyPairId = keyPairId;
    this.privateKey = privateKey;
    this.policy = "";
  }

  private buildPolicy(args: BuildPolicyInput): Policy {
    const policy: Policy = {
      Statement: [
        {
          Resource: args.resource,
          Condition: {
            DateLessThan: {
              "AWS:EpochTime": args.dateLessThan,
            },
          },
        },
      ],
    };
    if (args.dateGreaterThan) {
      policy.Statement[0].Condition["DateGreaterThan"] = {
        "AWS:EpochTime": args.dateGreaterThan,
      };
    }
    if (args.ipAddress) {
      const cidr = this.parseCIDR(args.ipAddress);
      policy.Statement[0].Condition["IpAddress"] = {
        "AWS:SourceIp": cidr,
      };
    }
    return policy;
  }

  private normalizeBase64(str: string): string {
    const replacements = {
      "+": "-",
      "=": "_",
      "/": "~",
    } as Record<string, string>;
    return str.replace(/[+=/]/g, function (match) {
      return replacements[match];
    });
  }

  private encodeToBase64(str: string): string {
    return this.normalizeBase64(Buffer.from(str).toString("base64"));
  }

  private validateIP(ipStr: string): void {
    const octets = ipStr.split(".");
    if (octets.length !== 4) {
      throw new Error(`IP does not contain four octets.`);
    }
    const isValid = octets.every((octet: string) => {
      const num = Number(octet);
      return Number.isInteger(num) && num >= 0 && num <= 255;
    });
    if (!isValid) {
      throw new Error("invalid IP octets");
    }
  }

  private validateMask(maskStr: string): void {
    const mask = Number(maskStr);
    const isValid = Number.isInteger(mask) && mask >= 0 && mask <= 32;
    if (!isValid) {
      throw new Error("invalid mask");
    }
  }

  private parseCIDR(cidrStr: string): string {
    try {
      const cidrParts = cidrStr.split("/");
      if (cidrParts.some((part: string) => part.length === 0)) {
        throw new Error("missing ip or mask part of CIDR");
      }
      this.validateIP(cidrParts[0]);
      let mask = "32";
      if (cidrParts.length === 2) {
        this.validateMask(cidrParts[1]);
        mask = cidrParts[1];
      }
      return `${cidrParts[0]}/${mask}`;
    } catch (error) {
      const errMessage = `IP address "${cidrStr}" is invalid`;
      if (error instanceof Error) {
        throw new Error(`${errMessage} due to ${error.message}.`);
      } else {
        throw new Error(`${errMessage}.`);
      }
    }
  }

  private epochTime(date: Date): number {
    return Math.round(date.getTime() / 1000);
  }

  private parseDate(date?: string): number | undefined {
    if (!date) {
      return undefined;
    }
    const parsedDate = Date.parse(date);
    return isNaN(parsedDate) ? undefined : this.epochTime(new Date(parsedDate));
  }

  private parseDateWindow(expiration: string, start?: string): PolicyDates {
    const dateLessThan = this.parseDate(expiration);
    if (!dateLessThan) {
      throw new Error("dateLessThan is invalid. Ensure the date string is compatible with the Date constructor.");
    }
    return {
      dateLessThan,
      dateGreaterThan: this.parseDate(start),
    };
  }

  private signData(data: string, privateKey: string | Buffer): string {
    const sign = createSign("RSA-SHA1");
    sign.update(data);
    return sign.sign(privateKey, "base64");
  }

  private signPolicy(policy: string, privateKey: string | Buffer): string {
    return this.normalizeBase64(this.signData(policy, privateKey));
  }

  setCustomPolicy(policy: string) {
    this.customPolicy = true;
    this.policy = policy;
  }

  setPolicyParameters({
    url,
    dateLessThan,
    dateGreaterThan,
    ipAddress,
  }: {
    url?: string;
    dateLessThan?: string;
    dateGreaterThan?: string;
    ipAddress?: string;
  }) {
    if (!url || !dateLessThan) {
      return false;
    }
    const resource = this.urlParser.getResource(url);
    const parsedDates = this.parseDateWindow(dateLessThan, dateGreaterThan);
    this.dateLessThan = parsedDates.dateLessThan;
    this.customPolicy = Boolean(parsedDates.dateGreaterThan) || Boolean(ipAddress);
    this.policy = JSON.stringify(
      this.buildPolicy({
        resource,
        ipAddress,
        dateLessThan: parsedDates.dateLessThan,
        dateGreaterThan: parsedDates.dateGreaterThan,
      })
    );
  }

  createCloudfrontAttribute(): CloudfrontAttributes {
    if (!Boolean(this.policy)) {
      throw new Error("Invalid policy");
    }
    const signature = this.signPolicy(this.policy, this.privateKey);
    return {
      Expires: this.customPolicy ? undefined : this.dateLessThan,
      Policy: this.customPolicy ? this.encodeToBase64(this.policy) : undefined,
      "Key-Pair-Id": this.keyPairId,
      Signature: signature,
    };
  }
}
