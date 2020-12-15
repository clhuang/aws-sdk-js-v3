import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { StopModelRequest, StopModelResponse } from "../models/models_0";
import {
  deserializeAws_restJson1StopModelCommand,
  serializeAws_restJson1StopModelCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type StopModelCommandInput = StopModelRequest;
export type StopModelCommandOutput = StopModelResponse & __MetadataBearer;

/**
 * <p>Stops a running model. The operation might take a while to complete. To
 *          check the current status, call <a>DescribeModel</a>. </p>
 */
export class StopModelCommand extends $Command<
  StopModelCommandInput,
  StopModelCommandOutput,
  LookoutVisionClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopModelCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutVisionClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopModelCommandInput, StopModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutVisionClient";
    const commandName = "StopModelCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopModelRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopModelResponse.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StopModelCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopModelCommandOutput> {
    return deserializeAws_restJson1StopModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}