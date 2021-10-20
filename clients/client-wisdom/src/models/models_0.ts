import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
 */
export interface AppIntegrationsConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the AppIntegrations DataIntegration to use for ingesting content.</p>
   */
  appIntegrationArn: string | undefined;

  /**
   * <p>The fields from the source that are made available to your agents in Wisdom. </p>
   *          <ul>
   *             <li>
   *                <p> For <a href="https://developer.salesforce.com/docs/atlas.en-us.knowledge_dev.meta/knowledge_dev/sforce_api_objects_knowledge__kav.htm"> Salesforce</a>, you must include at least <code>Id</code>,
   *             <code>ArticleNumber</code>, <code>VersionNumber</code>, <code>Title</code>,
   *             <code>PublishStatus</code>, and <code>IsDeleted</code>. </p>
   *             </li>
   *             <li>
   *                <p>For <a href="https://developer.servicenow.com/dev.do#!/reference/api/rome/rest/knowledge-management-api"> ServiceNow</a>, you must include at least <code>number</code>,
   *             <code>short_description</code>, <code>sys_mod_count</code>, <code>workflow_state</code>,
   *           and <code>active</code>. </p>
   *             </li>
   *          </ul>
   *          <p>Make sure to include additional field(s); these are indexed and used to source
   *       recommendations. </p>
   */
  objectFields: string[] | undefined;
}

export namespace AppIntegrationsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AppIntegrationsConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>The data that is input into Wisdom as a result of the assistant association.</p>
 */
export type AssistantAssociationInputData =
  | AssistantAssociationInputData.KnowledgeBaseIdMember
  | AssistantAssociationInputData.$UnknownMember;

export namespace AssistantAssociationInputData {
  /**
   * <p>The the identifier of the knowledge base.</p>
   */
  export interface KnowledgeBaseIdMember {
    knowledgeBaseId: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    knowledgeBaseId?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    knowledgeBaseId: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AssistantAssociationInputData, visitor: Visitor<T>): T => {
    if (value.knowledgeBaseId !== undefined) return visitor.knowledgeBaseId(value.knowledgeBaseId);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssistantAssociationInputData): any => {
    if (obj.knowledgeBaseId !== undefined) return { knowledgeBaseId: obj.knowledgeBaseId };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export enum AssociationType {
  KNOWLEDGE_BASE = "KNOWLEDGE_BASE",
}

export interface CreateAssistantAssociationRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The type of association.</p>
   */
  associationType: AssociationType | string | undefined;

  /**
   * <p>The identifier of the associated resource.</p>
   */
  association: AssistantAssociationInputData | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateAssistantAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssistantAssociationRequest): any => ({
    ...obj,
    ...(obj.association && { association: AssistantAssociationInputData.filterSensitiveLog(obj.association) }),
  });
}

/**
 * <p>Association information about the knowledge base.</p>
 */
export interface KnowledgeBaseAssociationData {
  /**
   * <p>The the identifier of the knowledge base.</p>
   */
  knowledgeBaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn?: string;
}

export namespace KnowledgeBaseAssociationData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KnowledgeBaseAssociationData): any => ({
    ...obj,
  });
}

/**
 * <p>The data that is output as a result of the assistant association.</p>
 */
export type AssistantAssociationOutputData =
  | AssistantAssociationOutputData.KnowledgeBaseAssociationMember
  | AssistantAssociationOutputData.$UnknownMember;

export namespace AssistantAssociationOutputData {
  /**
   * <p>The knowledge base where output data is sent.</p>
   */
  export interface KnowledgeBaseAssociationMember {
    knowledgeBaseAssociation: KnowledgeBaseAssociationData;
    $unknown?: never;
  }

  export interface $UnknownMember {
    knowledgeBaseAssociation?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    knowledgeBaseAssociation: (value: KnowledgeBaseAssociationData) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AssistantAssociationOutputData, visitor: Visitor<T>): T => {
    if (value.knowledgeBaseAssociation !== undefined)
      return visitor.knowledgeBaseAssociation(value.knowledgeBaseAssociation);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssistantAssociationOutputData): any => {
    if (obj.knowledgeBaseAssociation !== undefined)
      return {
        knowledgeBaseAssociation: KnowledgeBaseAssociationData.filterSensitiveLog(obj.knowledgeBaseAssociation),
      };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p>Information about the assistant association.</p>
 */
export interface AssistantAssociationData {
  /**
   * <p>The identifier of the assistant association.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   */
  assistantAssociationArn: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant</p>
   */
  assistantArn: string | undefined;

  /**
   * <p>The type of association.</p>
   */
  associationType: AssociationType | string | undefined;

  /**
   * <p>A union type that currently has a single argument, the knowledge base ID.</p>
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace AssistantAssociationData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssistantAssociationData): any => ({
    ...obj,
    ...(obj.associationData && {
      associationData: AssistantAssociationOutputData.filterSensitiveLog(obj.associationData),
    }),
  });
}

export interface CreateAssistantAssociationResponse {
  /**
   * <p>The assistant association.</p>
   */
  assistantAssociation?: AssistantAssociationData;
}

export namespace CreateAssistantAssociationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssistantAssociationResponse): any => ({
    ...obj,
    ...(obj.assistantAssociation && {
      assistantAssociation: AssistantAssociationData.filterSensitiveLog(obj.assistantAssociation),
    }),
  });
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
  /**
   * <p>The specified resource name.</p>
   */
  resourceName?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export interface DeleteAssistantAssociationRequest {
  /**
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

export namespace DeleteAssistantAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssistantAssociationRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssistantAssociationResponse {}

export namespace DeleteAssistantAssociationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssistantAssociationResponse): any => ({
    ...obj,
  });
}

export interface GetAssistantAssociationRequest {
  /**
   * <p>The identifier of the assistant association. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

export namespace GetAssistantAssociationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssistantAssociationRequest): any => ({
    ...obj,
  });
}

export interface GetAssistantAssociationResponse {
  /**
   * <p>The assistant association.</p>
   */
  assistantAssociation?: AssistantAssociationData;
}

export namespace GetAssistantAssociationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssistantAssociationResponse): any => ({
    ...obj,
    ...(obj.assistantAssociation && {
      assistantAssociation: AssistantAssociationData.filterSensitiveLog(obj.assistantAssociation),
    }),
  });
}

export interface ListAssistantAssociationsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

export namespace ListAssistantAssociationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssistantAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about the assistant association.</p>
 */
export interface AssistantAssociationSummary {
  /**
   * <p>The identifier of the assistant association.</p>
   */
  assistantAssociationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the assistant association.</p>
   */
  assistantAssociationArn: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant</p>
   */
  assistantArn: string | undefined;

  /**
   * <p>The type of association.</p>
   */
  associationType: AssociationType | string | undefined;

  /**
   * <p>The association data.</p>
   */
  associationData: AssistantAssociationOutputData | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace AssistantAssociationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssistantAssociationSummary): any => ({
    ...obj,
    ...(obj.associationData && {
      associationData: AssistantAssociationOutputData.filterSensitiveLog(obj.associationData),
    }),
  });
}

export interface ListAssistantAssociationsResponse {
  /**
   * <p>Summary information about assistant associations.</p>
   */
  assistantAssociationSummaries: AssistantAssociationSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListAssistantAssociationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssistantAssociationsResponse): any => ({
    ...obj,
    ...(obj.assistantAssociationSummaries && {
      assistantAssociationSummaries: obj.assistantAssociationSummaries.map((item) =>
        AssistantAssociationSummary.filterSensitiveLog(item)
      ),
    }),
  });
}

/**
 * <p>The KMS key used for encryption.</p>
 */
export interface ServerSideEncryptionConfiguration {
  /**
   * <p>The KMS key. For information about valid ID values, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id">Key identifiers (KeyId)</a> in the
   *         <i>AWS Key Management Service Developer Guide</i>. </p>
   */
  kmsKeyId?: string;
}

export namespace ServerSideEncryptionConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServerSideEncryptionConfiguration): any => ({
    ...obj,
  });
}

export enum AssistantType {
  AGENT = "AGENT",
}

export interface CreateAssistantRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the assistant.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of assistant.</p>
   */
  type: AssistantType | string | undefined;

  /**
   * <p>The description of the assistant.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

export namespace CreateAssistantRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssistantRequest): any => ({
    ...obj,
  });
}

export enum AssistantStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
}

/**
 * <p>The assistant data.</p>
 */
export interface AssistantData {
  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant</p>
   */
  assistantArn: string | undefined;

  /**
   * <p>The name.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of assistant.</p>
   */
  type: AssistantType | string | undefined;

  /**
   * <p>The status of the assistant.</p>
   */
  status: AssistantStatus | string | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

export namespace AssistantData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssistantData): any => ({
    ...obj,
  });
}

export interface CreateAssistantResponse {
  /**
   * <p>Information about the assistant.</p>
   */
  assistant?: AssistantData;
}

export namespace CreateAssistantResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateAssistantResponse): any => ({
    ...obj,
  });
}

export interface DeleteAssistantRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

export namespace DeleteAssistantRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssistantRequest): any => ({
    ...obj,
  });
}

export interface DeleteAssistantResponse {}

export namespace DeleteAssistantResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteAssistantResponse): any => ({
    ...obj,
  });
}

export interface GetAssistantRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;
}

export namespace GetAssistantRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssistantRequest): any => ({
    ...obj,
  });
}

export interface GetAssistantResponse {
  /**
   * <p>Information about the assistant.</p>
   */
  assistant?: AssistantData;
}

export namespace GetAssistantResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetAssistantResponse): any => ({
    ...obj,
  });
}

export interface GetRecommendationsRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The duration (in seconds) for which the call waits for a recommendation to be made
   *       available before returning. If a recommendation is available, the call returns sooner than
   *         <code>WaitTimeSeconds</code>. If no messages are available and the wait time expires, the
   *       call returns successfully with an empty list.</p>
   */
  waitTimeSeconds?: number;
}

export namespace GetRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecommendationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Reference information about the content.</p>
 */
export interface ContentReference {
  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn?: string;

  /**
   * <p>The the identifier of the knowledge base.</p>
   */
  knowledgeBaseId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   */
  contentArn?: string;

  /**
   * <p>The identifier of the content.</p>
   */
  contentId?: string;
}

export namespace ContentReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContentReference): any => ({
    ...obj,
  });
}

/**
 * <p>Offset specification to describe highlighting of document excerpts for rendering search
 *       results and recommendations.</p>
 */
export interface Highlight {
  /**
   * <p>The offset for the start of the highlight.</p>
   */
  beginOffsetInclusive?: number;

  /**
   * <p>The offset for the end of the highlight.</p>
   */
  endOffsetExclusive?: number;
}

export namespace Highlight {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Highlight): any => ({
    ...obj,
  });
}

/**
 * <p>The text of the document.</p>
 */
export interface DocumentText {
  /**
   * <p>Text in the document.</p>
   */
  text?: string;

  /**
   * <p>Highlights in the document text.</p>
   */
  highlights?: Highlight[];
}

export namespace DocumentText {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DocumentText): any => ({
    ...obj,
    ...(obj.text && { text: SENSITIVE_STRING }),
  });
}

/**
 * <p>The document.</p>
 */
export interface Document {
  /**
   * <p>A reference to the content resource.</p>
   */
  contentReference: ContentReference | undefined;

  /**
   * <p>The title of the document.</p>
   */
  title?: DocumentText;

  /**
   * <p>The excerpt from the document.</p>
   */
  excerpt?: DocumentText;
}

export namespace Document {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Document): any => ({
    ...obj,
    ...(obj.title && { title: DocumentText.filterSensitiveLog(obj.title) }),
    ...(obj.excerpt && { excerpt: DocumentText.filterSensitiveLog(obj.excerpt) }),
  });
}

export enum RelevanceLevel {
  HIGH = "HIGH",
  LOW = "LOW",
  MEDIUM = "MEDIUM",
}

/**
 * <p>Information about the recommendation.</p>
 */
export interface RecommendationData {
  /**
   * <p>The identifier of the recommendation.</p>
   */
  recommendationId: string | undefined;

  /**
   * <p>The recommended document.</p>
   */
  document: Document | undefined;

  /**
   * <p>The relevance score of the recommendation.</p>
   */
  relevanceScore?: number;

  /**
   * <p>The relevance level of the recommendation.</p>
   */
  relevanceLevel?: RelevanceLevel | string;
}

export namespace RecommendationData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendationData): any => ({
    ...obj,
    ...(obj.document && { document: Document.filterSensitiveLog(obj.document) }),
  });
}

export interface GetRecommendationsResponse {
  /**
   * <p>The recommendations.</p>
   */
  recommendations: RecommendationData[] | undefined;
}

export namespace GetRecommendationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRecommendationsResponse): any => ({
    ...obj,
    ...(obj.recommendations && {
      recommendations: obj.recommendations.map((item) => RecommendationData.filterSensitiveLog(item)),
    }),
  });
}

export interface ListAssistantsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;
}

export namespace ListAssistantsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssistantsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about the assistant.</p>
 */
export interface AssistantSummary {
  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant</p>
   */
  assistantArn: string | undefined;

  /**
   * <p>The name of the assistant.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of the assistant.</p>
   */
  type: AssistantType | string | undefined;

  /**
   * <p>The status of the assistant.</p>
   */
  status: AssistantStatus | string | undefined;

  /**
   * <p>The description of the assistant.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
}

export namespace AssistantSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssistantSummary): any => ({
    ...obj,
  });
}

export interface ListAssistantsResponse {
  /**
   * <p>Information about the assistants.</p>
   */
  assistantSummaries: AssistantSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListAssistantsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAssistantsResponse): any => ({
    ...obj,
  });
}

export interface NotifyRecommendationsReceivedRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The identifiers of the recommendations.</p>
   */
  recommendationIds: string[] | undefined;
}

export namespace NotifyRecommendationsReceivedRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotifyRecommendationsReceivedRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An error occurred when creating a recommendation.</p>
 */
export interface NotifyRecommendationsReceivedError {
  /**
   * <p>The identifier of the recommendation that is in error.</p>
   */
  recommendationId?: string;

  /**
   * <p>A recommendation is causing an error.</p>
   */
  message?: string;
}

export namespace NotifyRecommendationsReceivedError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotifyRecommendationsReceivedError): any => ({
    ...obj,
  });
}

export interface NotifyRecommendationsReceivedResponse {
  /**
   * <p>The identifiers of the recommendations.</p>
   */
  recommendationIds?: string[];

  /**
   * <p>The identifiers of recommendations that are causing errors.</p>
   */
  errors?: NotifyRecommendationsReceivedError[];
}

export namespace NotifyRecommendationsReceivedResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: NotifyRecommendationsReceivedResponse): any => ({
    ...obj,
  });
}

export interface QueryAssistantRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The text to search for.</p>
   */
  queryText: string | undefined;

  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;
}

export namespace QueryAssistantRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryAssistantRequest): any => ({
    ...obj,
    ...(obj.queryText && { queryText: SENSITIVE_STRING }),
  });
}

/**
 * <p>Information about the result.</p>
 */
export interface ResultData {
  /**
   * <p>The identifier of the result data.</p>
   */
  resultId: string | undefined;

  /**
   * <p>The document.</p>
   */
  document: Document | undefined;

  /**
   * <p>The relevance score of the results.</p>
   */
  relevanceScore?: number;
}

export namespace ResultData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResultData): any => ({
    ...obj,
    ...(obj.document && { document: Document.filterSensitiveLog(obj.document) }),
  });
}

export interface QueryAssistantResponse {
  /**
   * <p>The results of the query.</p>
   */
  results: ResultData[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace QueryAssistantResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryAssistantResponse): any => ({
    ...obj,
    ...(obj.results && { results: obj.results.map((item) => ResultData.filterSensitiveLog(item)) }),
  });
}

export enum FilterField {
  NAME = "NAME",
}

export enum FilterOperator {
  EQUALS = "EQUALS",
}

/**
 * <p>A search filter.</p>
 */
export interface Filter {
  /**
   * <p>The field on which to filter.</p>
   */
  field: FilterField | string | undefined;

  /**
   * <p>The operator to use for comparing the field’s value with the provided value.</p>
   */
  operator: FilterOperator | string | undefined;

  /**
   * <p>The desired field value on which to filter.</p>
   */
  value: string | undefined;
}

export namespace Filter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj,
  });
}

/**
 * <p>The search expression.</p>
 */
export interface SearchExpression {
  /**
   * <p>The search expression filters.</p>
   */
  filters: Filter[] | undefined;
}

export namespace SearchExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchExpression): any => ({
    ...obj,
  });
}

export interface SearchSessionsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The search expression to filter results.</p>
   */
  searchExpression: SearchExpression | undefined;
}

export namespace SearchSessionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchSessionsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about the session.</p>
 */
export interface SessionSummary {
  /**
   * <p>The identifier of the session.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   */
  sessionArn: string | undefined;

  /**
   * <p>The identifier of the Wisdom assistant.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Wisdom assistant</p>
   */
  assistantArn: string | undefined;
}

export namespace SessionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionSummary): any => ({
    ...obj,
  });
}

export interface SearchSessionsResponse {
  /**
   * <p>Summary information about the sessions.</p>
   */
  sessionSummaries: SessionSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace SearchSessionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchSessionsResponse): any => ({
    ...obj,
  });
}

export interface CreateSessionRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The name of the session.</p>
   */
  name: string | undefined;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the session.</p>
 */
export interface SessionData {
  /**
   * <p>The Amazon Resource Name (ARN) of the session.</p>
   */
  sessionArn: string | undefined;

  /**
   * <p>The identifier of the session.</p>
   */
  sessionId: string | undefined;

  /**
   * <p>The name of the session.</p>
   */
  name: string | undefined;

  /**
   * <p>The description of the session.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace SessionData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SessionData): any => ({
    ...obj,
  });
}

export interface CreateSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: SessionData;
}

export namespace CreateSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSessionResponse): any => ({
    ...obj,
  });
}

export interface GetSessionRequest {
  /**
   * <p>The identifier of the Wisdom assistant. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  assistantId: string | undefined;

  /**
   * <p>The identifier of the session. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  sessionId: string | undefined;
}

export namespace GetSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSessionRequest): any => ({
    ...obj,
  });
}

export interface GetSessionResponse {
  /**
   * <p>The session.</p>
   */
  session?: SessionData;
}

export namespace GetSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSessionResponse): any => ({
    ...obj,
  });
}

export interface CreateContentRequest {
  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content. Each piece of content in a knowledge base must have a unique
   *       name. You can retrieve a piece of content using only its knowledge base and its name with the
   *         <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_SearchContent.html">SearchContent</a> API.</p>
   */
  name: string | undefined;

  /**
   * <p>The title of the content. If not set, the title is equal to the name.</p>
   */
  title?: string;

  /**
   * <p>The URI you want to use for the article. If the knowledge base has a templateUri, setting
   *       this argument overrides it for this piece of content.</p>
   */
  overrideLinkOutUri?: string;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata?: { [key: string]: string };

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContentRequest): any => ({
    ...obj,
  });
}

export enum ContentStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
  UPDATE_FAILED = "UPDATE_FAILED",
}

/**
 * <p>Information about the content.</p>
 */
export interface ContentData {
  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The the identifier of the knowledge base.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content.</p>
   */
  name: string | undefined;

  /**
   * <p>The identifier of the content revision.</p>
   */
  revisionId: string | undefined;

  /**
   * <p>The title of the content.</p>
   */
  title: string | undefined;

  /**
   * <p>The media type of the content.</p>
   */
  contentType: string | undefined;

  /**
   * <p>The status of the content.</p>
   */
  status: ContentStatus | string | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata: { [key: string]: string } | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The URI of the content.</p>
   */
  linkOutUri?: string;

  /**
   * <p>The URL of the content.</p>
   */
  url: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   */
  urlExpiry: Date | undefined;
}

export namespace ContentData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContentData): any => ({
    ...obj,
    ...(obj.url && { url: SENSITIVE_STRING }),
  });
}

export interface CreateContentResponse {
  /**
   * <p>The content.</p>
   */
  content?: ContentData;
}

export namespace CreateContentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateContentResponse): any => ({
    ...obj,
    ...(obj.content && { content: ContentData.filterSensitiveLog(obj.content) }),
  });
}

export interface DeleteContentRequest {
  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;
}

export namespace DeleteContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContentRequest): any => ({
    ...obj,
  });
}

export interface DeleteContentResponse {}

export namespace DeleteContentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteContentResponse): any => ({
    ...obj,
  });
}

export interface GetContentRequest {
  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export namespace GetContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContentRequest): any => ({
    ...obj,
  });
}

export interface GetContentResponse {
  /**
   * <p>The content.</p>
   */
  content?: ContentData;
}

export namespace GetContentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContentResponse): any => ({
    ...obj,
    ...(obj.content && { content: ContentData.filterSensitiveLog(obj.content) }),
  });
}

export interface GetContentSummaryRequest {
  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export namespace GetContentSummaryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContentSummaryRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about the content.</p>
 */
export interface ContentSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the content.</p>
   */
  contentArn: string | undefined;

  /**
   * <p>The identifier of the content.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The the identifier of the knowledge base.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The name of the content.</p>
   */
  name: string | undefined;

  /**
   * <p>The identifier of the revision of the content.</p>
   */
  revisionId: string | undefined;

  /**
   * <p>The title of the content.</p>
   */
  title: string | undefined;

  /**
   * <p>The media type of the content.</p>
   */
  contentType: string | undefined;

  /**
   * <p>The status of the content.</p>
   */
  status: ContentStatus | string | undefined;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations.
   * For example, when synchronizing data between an external system and Wisdom, you can store an external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata: { [key: string]: string } | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ContentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ContentSummary): any => ({
    ...obj,
  });
}

export interface GetContentSummaryResponse {
  /**
   * <p>The content summary.</p>
   */
  contentSummary?: ContentSummary;
}

export namespace GetContentSummaryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetContentSummaryResponse): any => ({
    ...obj,
  });
}

export interface ListContentsRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export namespace ListContentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContentsRequest): any => ({
    ...obj,
  });
}

export interface ListContentsResponse {
  /**
   * <p>Information about the content.</p>
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListContentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListContentsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The provided <code>revisionId</code> does not match, indicating the content has been
 *       modified since it was last read.</p>
 */
export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
  name: "PreconditionFailedException";
  $fault: "client";
  message?: string;
}

export namespace PreconditionFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PreconditionFailedException): any => ({
    ...obj,
  });
}

export interface UpdateContentRequest {
  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The identifier of the content. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  contentId: string | undefined;

  /**
   * <p>The <code>revisionId</code> of the content resource to update, taken from an earlier call
   *       to <code>GetContent</code>, <code>GetContentSummary</code>, <code>SearchContent</code>, or
   *         <code>ListContents</code>. If included, this argument acts as an optimistic lock to ensure
   *       content was not modified since it was last read. If it has been modified, this API throws a
   *         <code>PreconditionFailedException</code>.</p>
   */
  revisionId?: string;

  /**
   * <p>The title of the content.</p>
   */
  title?: string;

  /**
   * <p>The URI for the article. If the knowledge base has a templateUri, setting this argument
   *       overrides it for this piece of content. To remove an existing <code>overrideLinkOurUri</code>,
   *       exclude this argument and set <code>removeOverrideLinkOutUri</code> to true.</p>
   */
  overrideLinkOutUri?: string;

  /**
   * <p>Unset the existing <code>overrideLinkOutUri</code> if it exists.</p>
   */
  removeOverrideLinkOutUri?: boolean;

  /**
   * <p>A key/value map to store attributes without affecting tagging or recommendations. For
   *       example, when synchronizing data between an external system and Wisdom, you can store an
   *       external version identifier as metadata to utilize for determining drift.</p>
   */
  metadata?: { [key: string]: string };

  /**
   * <p>A pointer to the uploaded asset. This value is returned by <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_StartContentUpload.html">StartContentUpload</a>.
   *     </p>
   */
  uploadId?: string;
}

export namespace UpdateContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContentRequest): any => ({
    ...obj,
  });
}

export interface UpdateContentResponse {
  /**
   * <p>The content.</p>
   */
  content?: ContentData;
}

export namespace UpdateContentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateContentResponse): any => ({
    ...obj,
    ...(obj.content && { content: ContentData.filterSensitiveLog(obj.content) }),
  });
}

export enum KnowledgeBaseType {
  CUSTOM = "CUSTOM",
  EXTERNAL = "EXTERNAL",
}

/**
 * <p>Information about how to render the content.</p>
 */
export interface RenderingConfiguration {
  /**
   * <p>A URI template containing exactly one variable in <code>${variableName} </code>format.
   *       This can only be set for <code>EXTERNAL</code> knowledge bases. For Salesforce and ServiceNow,
   *       the variable must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Salesforce: <code>Id</code>, <code>ArticleNumber</code>, <code>VersionNumber</code>,
   *             <code>Title</code>, <code>PublishStatus</code>, or <code>IsDeleted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>ServiceNow: <code>number</code>, <code>short_description</code>,
   *             <code>sys_mod_count</code>, <code>workflow_state</code>, or <code>active</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>The variable is replaced with the actual value for a piece of content when calling <a href="https://docs.aws.amazon.com/wisdom/latest/APIReference/API_GetContent.html">GetContent</a>. </p>
   */
  templateUri?: string;
}

export namespace RenderingConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RenderingConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration information about the external data source.</p>
 */
export type SourceConfiguration = SourceConfiguration.AppIntegrationsMember | SourceConfiguration.$UnknownMember;

export namespace SourceConfiguration {
  /**
   * <p>Configuration information for Amazon AppIntegrations to automatically ingest content.</p>
   */
  export interface AppIntegrationsMember {
    appIntegrations: AppIntegrationsConfiguration;
    $unknown?: never;
  }

  export interface $UnknownMember {
    appIntegrations?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    appIntegrations: (value: AppIntegrationsConfiguration) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: SourceConfiguration, visitor: Visitor<T>): T => {
    if (value.appIntegrations !== undefined) return visitor.appIntegrations(value.appIntegrations);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SourceConfiguration): any => {
    if (obj.appIntegrations !== undefined)
      return { appIntegrations: AppIntegrationsConfiguration.filterSensitiveLog(obj.appIntegrations) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

export interface CreateKnowledgeBaseRequest {
  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *    request.</p>
   */
  clientToken?: string;

  /**
   * <p>The name of the knowledge base.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base. Only CUSTOM knowledge bases allow you to upload your own content.
   *       EXTERNAL knowledge bases support integrations with third-party systems whose content is
   *       synchronized automatically. </p>
   */
  knowledgeBaseType: KnowledgeBaseType | string | undefined;

  /**
   * <p>The source of the knowledge base content. Only set this argument for EXTERNAL knowledge
   *       bases.</p>
   */
  sourceConfiguration?: SourceConfiguration;

  /**
   * <p>Information about how to render the content.</p>
   */
  renderingConfiguration?: RenderingConfiguration;

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateKnowledgeBaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKnowledgeBaseRequest): any => ({
    ...obj,
    ...(obj.sourceConfiguration && {
      sourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.sourceConfiguration),
    }),
  });
}

export enum KnowledgeBaseStatus {
  ACTIVE = "ACTIVE",
  CREATE_FAILED = "CREATE_FAILED",
  CREATE_IN_PROGRESS = "CREATE_IN_PROGRESS",
  DELETED = "DELETED",
  DELETE_FAILED = "DELETE_FAILED",
  DELETE_IN_PROGRESS = "DELETE_IN_PROGRESS",
}

/**
 * <p>Information about the knowledge base.</p>
 */
export interface KnowledgeBaseData {
  /**
   * <p>The the identifier of the knowledge base.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base.</p>
   */
  knowledgeBaseType: KnowledgeBaseType | string | undefined;

  /**
   * <p>The status of the knowledge base.</p>
   */
  status: KnowledgeBaseStatus | string | undefined;

  /**
   * <p>An epoch timestamp indicating the most recent content modification inside the knowledge
   *       base. If no content exists in a knowledge base, this value is unset.</p>
   */
  lastContentModificationTime?: Date;

  /**
   * <p>Source configuration information about the knowledge base.</p>
   */
  sourceConfiguration?: SourceConfiguration;

  /**
   * <p>Information about how to render the content.</p>
   */
  renderingConfiguration?: RenderingConfiguration;

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The description.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace KnowledgeBaseData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KnowledgeBaseData): any => ({
    ...obj,
    ...(obj.sourceConfiguration && {
      sourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.sourceConfiguration),
    }),
  });
}

export interface CreateKnowledgeBaseResponse {
  /**
   * <p>The knowledge base.</p>
   */
  knowledgeBase?: KnowledgeBaseData;
}

export namespace CreateKnowledgeBaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateKnowledgeBaseResponse): any => ({
    ...obj,
    ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseData.filterSensitiveLog(obj.knowledgeBase) }),
  });
}

export interface DeleteKnowledgeBaseRequest {
  /**
   * <p>The knowledge base to delete content from. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export namespace DeleteKnowledgeBaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKnowledgeBaseRequest): any => ({
    ...obj,
  });
}

export interface DeleteKnowledgeBaseResponse {}

export namespace DeleteKnowledgeBaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteKnowledgeBaseResponse): any => ({
    ...obj,
  });
}

export interface GetKnowledgeBaseRequest {
  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export namespace GetKnowledgeBaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKnowledgeBaseRequest): any => ({
    ...obj,
  });
}

export interface GetKnowledgeBaseResponse {
  /**
   * <p>The knowledge base.</p>
   */
  knowledgeBase?: KnowledgeBaseData;
}

export namespace GetKnowledgeBaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetKnowledgeBaseResponse): any => ({
    ...obj,
    ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseData.filterSensitiveLog(obj.knowledgeBase) }),
  });
}

export interface ListKnowledgeBasesRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;
}

export namespace ListKnowledgeBasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKnowledgeBasesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about the knowledge base.</p>
 */
export interface KnowledgeBaseSummary {
  /**
   * <p>The the identifier of the knowledge base.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the knowledge base.</p>
   */
  knowledgeBaseArn: string | undefined;

  /**
   * <p>The name of the knowledge base.</p>
   */
  name: string | undefined;

  /**
   * <p>The type of knowledge base.</p>
   */
  knowledgeBaseType: KnowledgeBaseType | string | undefined;

  /**
   * <p>The status of the knowledge base summary.</p>
   */
  status: KnowledgeBaseStatus | string | undefined;

  /**
   * <p>[KEVIN]</p>
   */
  sourceConfiguration?: SourceConfiguration;

  /**
   * <p>Information about how to render the content.</p>
   */
  renderingConfiguration?: RenderingConfiguration;

  /**
   * <p>The KMS key used for encryption.</p>
   */
  serverSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;

  /**
   * <p>The description of the knowledge base.</p>
   */
  description?: string;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace KnowledgeBaseSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KnowledgeBaseSummary): any => ({
    ...obj,
    ...(obj.sourceConfiguration && {
      sourceConfiguration: SourceConfiguration.filterSensitiveLog(obj.sourceConfiguration),
    }),
  });
}

export interface ListKnowledgeBasesResponse {
  /**
   * <p>Information about the knowledge bases.</p>
   */
  knowledgeBaseSummaries: KnowledgeBaseSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace ListKnowledgeBasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListKnowledgeBasesResponse): any => ({
    ...obj,
    ...(obj.knowledgeBaseSummaries && {
      knowledgeBaseSummaries: obj.knowledgeBaseSummaries.map((item) => KnowledgeBaseSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface RemoveKnowledgeBaseTemplateUriRequest {
  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;
}

export namespace RemoveKnowledgeBaseTemplateUriRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveKnowledgeBaseTemplateUriRequest): any => ({
    ...obj,
  });
}

export interface RemoveKnowledgeBaseTemplateUriResponse {}

export namespace RemoveKnowledgeBaseTemplateUriResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RemoveKnowledgeBaseTemplateUriResponse): any => ({
    ...obj,
  });
}

export interface SearchContentRequest {
  /**
   * <p>The token for the next set of results. Use the value returned in the previous
   * response in the next request to retrieve the next set of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of results to return per page.</p>
   */
  maxResults?: number;

  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The search expression to filter results.</p>
   */
  searchExpression: SearchExpression | undefined;
}

export namespace SearchContentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchContentRequest): any => ({
    ...obj,
  });
}

export interface SearchContentResponse {
  /**
   * <p>Summary information about the content.</p>
   */
  contentSummaries: ContentSummary[] | undefined;

  /**
   * <p>If there are additional results, this is the token for the next set of results.</p>
   */
  nextToken?: string;
}

export namespace SearchContentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchContentResponse): any => ({
    ...obj,
  });
}

export interface StartContentUploadRequest {
  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The type of content to upload.</p>
   */
  contentType: string | undefined;
}

export namespace StartContentUploadRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartContentUploadRequest): any => ({
    ...obj,
  });
}

export interface StartContentUploadResponse {
  /**
   * <p>The identifier of the upload.</p>
   */
  uploadId: string | undefined;

  /**
   * <p>The URL of the upload.</p>
   */
  url: string | undefined;

  /**
   * <p>The expiration time of the URL as an epoch timestamp.</p>
   */
  urlExpiry: Date | undefined;

  /**
   * <p>The headers to include in the upload.</p>
   */
  headersToInclude: { [key: string]: string } | undefined;
}

export namespace StartContentUploadResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartContentUploadResponse): any => ({
    ...obj,
    ...(obj.url && { url: SENSITIVE_STRING }),
  });
}

export interface UpdateKnowledgeBaseTemplateUriRequest {
  /**
   * <p>The the identifier of the knowledge base. Can be either the ID or the ARN. URLs cannot contain the ARN.</p>
   */
  knowledgeBaseId: string | undefined;

  /**
   * <p>The template URI to update.</p>
   */
  templateUri: string | undefined;
}

export namespace UpdateKnowledgeBaseTemplateUriRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateKnowledgeBaseTemplateUriRequest): any => ({
    ...obj,
  });
}

export interface UpdateKnowledgeBaseTemplateUriResponse {
  /**
   * <p>The knowledge base to update.</p>
   */
  knowledgeBase?: KnowledgeBaseData;
}

export namespace UpdateKnowledgeBaseTemplateUriResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateKnowledgeBaseTemplateUriResponse): any => ({
    ...obj,
    ...(obj.knowledgeBase && { knowledgeBase: KnowledgeBaseData.filterSensitiveLog(obj.knowledgeBase) }),
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tags used to organize, track, or control access for this resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Amazon Connect Wisdom throws this exception if you have too many tags in your tag set.</p>
 */
export interface TooManyTagsException extends __SmithyException, $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  message?: string;
  /**
   * <p>The specified resource name.</p>
   */
  resourceName?: string;
}

export namespace TooManyTagsException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The tag keys.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}