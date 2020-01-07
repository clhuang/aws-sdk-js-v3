import {
  SMSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SMSClient";
import {
  PutAppReplicationConfigurationRequest,
  PutAppReplicationConfigurationResponse
} from "../models/index";
import {
  deserializeAws_json1_1PutAppReplicationConfigurationCommand,
  serializeAws_json1_1PutAppReplicationConfigurationCommand
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

export type PutAppReplicationConfigurationCommandInput = PutAppReplicationConfigurationRequest;
export type PutAppReplicationConfigurationCommandOutput = PutAppReplicationConfigurationResponse;

export class PutAppReplicationConfigurationCommand extends $Command<
  PutAppReplicationConfigurationCommandInput,
  PutAppReplicationConfigurationCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutAppReplicationConfigurationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    PutAppReplicationConfigurationCommandInput,
    PutAppReplicationConfigurationCommandOutput
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
    input: PutAppReplicationConfigurationCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1PutAppReplicationConfigurationCommand(
      input,
      context
    );
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<PutAppReplicationConfigurationCommandOutput> {
    return deserializeAws_json1_1PutAppReplicationConfigurationCommand(
      output,
      context
    );
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}