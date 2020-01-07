import {
  DirectConnectClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../DirectConnectClient";
import {
  DescribeDirectConnectGatewayAssociationProposalsRequest,
  DescribeDirectConnectGatewayAssociationProposalsResult
} from "../models/index";
import {
  deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand,
  serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type DescribeDirectConnectGatewayAssociationProposalsCommandInput = DescribeDirectConnectGatewayAssociationProposalsRequest;
export type DescribeDirectConnectGatewayAssociationProposalsCommandOutput = DescribeDirectConnectGatewayAssociationProposalsResult;

export class DescribeDirectConnectGatewayAssociationProposalsCommand extends $Command<
  DescribeDirectConnectGatewayAssociationProposalsCommandInput,
  DescribeDirectConnectGatewayAssociationProposalsCommandOutput,
  DirectConnectClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(
    readonly input: DescribeDirectConnectGatewayAssociationProposalsCommandInput
  ) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectConnectClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    DescribeDirectConnectGatewayAssociationProposalsCommandOutput
  > {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDirectConnectGatewayAssociationProposalsCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DescribeDirectConnectGatewayAssociationProposalsCommandOutput> {
    return deserializeAws_json1_1DescribeDirectConnectGatewayAssociationProposalsCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}