import { ServiceInputTypes, ServiceOutputTypes, ShieldClientResolvedConfig } from "../ShieldClient";
import {
  AssociateProactiveEngagementDetailsRequest,
  AssociateProactiveEngagementDetailsResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand,
  serializeAws_json1_1AssociateProactiveEngagementDetailsCommand,
} from "../protocols/Aws_json1_1";
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

export type AssociateProactiveEngagementDetailsCommandInput = AssociateProactiveEngagementDetailsRequest;
export type AssociateProactiveEngagementDetailsCommandOutput = AssociateProactiveEngagementDetailsResponse &
  __MetadataBearer;

export class AssociateProactiveEngagementDetailsCommand extends $Command<
  AssociateProactiveEngagementDetailsCommandInput,
  AssociateProactiveEngagementDetailsCommandOutput,
  ShieldClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateProactiveEngagementDetailsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ShieldClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AssociateProactiveEngagementDetailsCommandInput, AssociateProactiveEngagementDetailsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      inputFilterSensitiveLog: AssociateProactiveEngagementDetailsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateProactiveEngagementDetailsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateProactiveEngagementDetailsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateProactiveEngagementDetailsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateProactiveEngagementDetailsCommandOutput> {
    return deserializeAws_json1_1AssociateProactiveEngagementDetailsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}