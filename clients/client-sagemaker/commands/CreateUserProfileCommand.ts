import {
  SageMakerClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SageMakerClient";
import {
  CreateUserProfileRequest,
  CreateUserProfileResponse
} from "../models/index";
import {
  deserializeAws_json1_1CreateUserProfileCommand,
  serializeAws_json1_1CreateUserProfileCommand
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

export type CreateUserProfileCommandInput = CreateUserProfileRequest;
export type CreateUserProfileCommandOutput = CreateUserProfileResponse;

export class CreateUserProfileCommand extends $Command<
  CreateUserProfileCommandInput,
  CreateUserProfileCommandOutput,
  SageMakerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateUserProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateUserProfileCommandInput, CreateUserProfileCommandOutput> {
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
    input: CreateUserProfileCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateUserProfileCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<CreateUserProfileCommandOutput> {
    return deserializeAws_json1_1CreateUserProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}