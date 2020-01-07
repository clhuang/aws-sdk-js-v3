import {
  KinesisAnalyticsV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../KinesisAnalyticsV2Client";
import {
  DeleteApplicationSnapshotRequest,
  DeleteApplicationSnapshotResponse
} from "../models/index";
import {
  deserializeAws_json1_1DeleteApplicationSnapshotCommand,
  serializeAws_json1_1DeleteApplicationSnapshotCommand
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

export type DeleteApplicationSnapshotCommandInput = DeleteApplicationSnapshotRequest;
export type DeleteApplicationSnapshotCommandOutput = DeleteApplicationSnapshotResponse;

export class DeleteApplicationSnapshotCommand extends $Command<
  DeleteApplicationSnapshotCommandInput,
  DeleteApplicationSnapshotCommandOutput,
  KinesisAnalyticsV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApplicationSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: KinesisAnalyticsV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    DeleteApplicationSnapshotCommandInput,
    DeleteApplicationSnapshotCommandOutput
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
    input: DeleteApplicationSnapshotCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteApplicationSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<DeleteApplicationSnapshotCommandOutput> {
    return deserializeAws_json1_1DeleteApplicationSnapshotCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}