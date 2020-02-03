import * as _smithy from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>A complex type that lists the AWS accounts, if any, that you included in the
 * 				<code>TrustedSigners</code> complex type for this distribution. These are the accounts that
 * 			you want to allow to create signed URLs for private content.</p>
 * 		       <p>The <code>Signer</code> complex type lists the AWS account number of the trusted
 * 			signer or <code>self</code> if the signer is the AWS account that created the distribution.
 * 			The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are
 * 			associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element
 * 			appears for a <code>Signer</code>, that signer can't create signed URLs. </p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
 * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface ActiveTrustedSigners {
  __type?: "ActiveTrustedSigners";
  /**
   * <p>Enabled is <code>true</code> if any of the AWS accounts listed in the
   * 			<code>TrustedSigners</code> complex type for this distribution have active CloudFront key
   * 			pairs. If not, <code>Enabled</code> is <code>false</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>A complex type that contains one <code>Signer</code> complex type for each trusted
   * 			signer that is specified in the <code>TrustedSigners</code> complex type.</p>
   */
  Items?: Array<Signer>;

  /**
   * <p>The number of trusted signers specified in the <code>TrustedSigners</code> complex type.</p>
   */
  Quantity: number | undefined;
}

export namespace ActiveTrustedSigners {
  export function isa(o: any): o is ActiveTrustedSigners {
    return _smithy.isa(o, "ActiveTrustedSigners");
  }
}

/**
 * <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content
 * 			publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP
 * 			recordal status for CNAMEs associated with distributions. The status is returned in the CloudFront response; you can't configure
 * 			it yourself.</p>
 * 		       <p>For more information about ICP recordals, see  <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html">
 * 			Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
 */
export interface AliasICPRecordal {
  __type?: "AliasICPRecordal";
  /**
   * <p>A domain name associated with a distribution. </p>
   */
  CNAME?: string;

  /**
   * <p>The Internet Content Provider (ICP) recordal status for a CNAME. The ICPRecordalStatus is set to
   * 			APPROVED for all CNAMEs (aliases) in regions outside of China. </p>
   * 		       <p>The status values returned are the following:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <b>APPROVED</b> indicates that the associated CNAME has a valid ICP recordal number.
   * 			Multiple CNAMEs can be associated with a distribution, and CNAMEs can correspond to different ICP recordals. To be marked as
   * 			APPROVED, that is, valid to use with China region, a CNAME must have one ICP recordal number associated with it.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>SUSPENDED</b> indicates that the associated CNAME does not have a valid ICP recordal
   * 				number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>PENDING</b> indicates that CloudFront can't determine the ICP recordal status of the
   * 				CNAME associated with the distribution because there was an error in trying to determine the status. You can try again
   * 				to see if the error is resolved in which case CloudFront returns an APPROVED or SUSPENDED status.</p>
   *             </li>
   *          </ul>
   */
  ICPRecordalStatus?: ICPRecordalStatus | string;
}

export namespace AliasICPRecordal {
  export function isa(o: any): o is AliasICPRecordal {
    return _smithy.isa(o, "AliasICPRecordal");
  }
}

/**
 * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
 * 			for this distribution. </p>
 */
export interface Aliases {
  __type?: "Aliases";
  /**
   * <p>A complex type that contains the CNAME aliases, if any, that you want to associate with
   * 			this distribution.</p>
   */
  Items?: Array<string>;

  /**
   * <p>The number of CNAME aliases, if any, that you want to associate with this
   * 			distribution.</p>
   */
  Quantity: number | undefined;
}

export namespace Aliases {
  export function isa(o: any): o is Aliases {
    return _smithy.isa(o, "Aliases");
  }
}

/**
 * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your
 * 			Amazon S3 bucket or your custom origin. There are three choices:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code>
 * 					requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and
 * 						<code>DELETE</code> requests.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or
 * 			to your custom origin so users can't perform operations that you don't want them to. For
 * 			example, you might not want users to have permissions to delete objects from your
 * 			origin.</p>
 */
export interface AllowedMethods {
  __type?: "AllowedMethods";
  /**
   * <p>A complex type that controls whether CloudFront caches the response to requests using the
   * 			specified HTTP methods. There are two choices:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and
   * 						<code>OPTIONS</code> requests.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward
   * 			Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the
   * 			responses to be cached correctly. </p>
   */
  CachedMethods?: CachedMethods;

  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to process and forward
   * 			to your origin.</p>
   */
  Items: Array<Method | string> | undefined;

  /**
   * <p>The number of HTTP methods that you want CloudFront to forward to your origin. Valid values
   * 			are 2 (for <code>GET</code> and <code>HEAD</code> requests), 3 (for <code>GET</code>,
   * 				<code>HEAD</code>, and <code>OPTIONS</code> requests) and 7 (for <code>GET, HEAD, OPTIONS,
   * 				PUT, PATCH, POST</code>, and <code>DELETE</code> requests).</p>
   */
  Quantity: number | undefined;
}

export namespace AllowedMethods {
  export function isa(o: any): o is AllowedMethods {
    return _smithy.isa(o, "AllowedMethods");
  }
}

/**
 * <p>A complex type that describes how CloudFront processes requests.</p>
 * 		       <p>You must create at least as many cache behaviors (including the default cache behavior)
 * 			as you have origins if you want CloudFront to distribute objects from all of the origins. Each cache
 * 			behavior specifies the one origin from which you want CloudFront to get objects. If you have two
 * 			origins and only the default cache behavior, the default cache behavior will cause CloudFront to get
 * 			objects from one of the origins, but the other origin is never used.</p>
 * 		       <p>For the current limit on the number of cache behaviors that you can add to a
 * 			distribution, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront
 * 				Limits</a> in the <i>AWS General Reference</i>.</p>
 * 		       <p>If you don't want to specify any cache behaviors, include only an empty
 * 				<code>CacheBehaviors</code> element. Don't include an empty <code>CacheBehavior</code>
 * 			element, or CloudFront returns a <code>MalformedXML</code> error.</p>
 * 		       <p>To delete all cache behaviors in an existing distribution, update the distribution
 * 			configuration and include only an empty <code>CacheBehaviors</code> element.</p>
 * 		       <p>To add, change, or remove one or more cache behaviors, update the distribution
 * 			configuration and specify all of the cache behaviors that you want to include in the updated
 * 			distribution.</p>
 * 		       <p>For more information about cache behaviors, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache
 * 				Behaviors</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CacheBehavior {
  __type?: "CacheBehavior";
  /**
   * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your
   * 			Amazon S3 bucket or your custom origin. There are three choices:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code>
   * 					requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and
   * 						<code>DELETE</code> requests.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or
   * 			to your custom origin so users can't perform operations that you don't want them to. For
   * 			example, you might not want users to have permissions to delete objects from your
   * 			origin.</p>
   */
  AllowedMethods?: AllowedMethods;

  /**
   * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior.
   * 			If so, specify true; if not, specify false. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Compress?: boolean;

  /**
   * <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. The
   * 			value that you specify applies only when your origin does not add HTTP headers such as
   * 				<code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 				<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 				in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultTTL?: number;

  /**
   * <p>The value of <code>ID</code> for the field-level encryption configuration that you
   * 			want CloudFront to use for encrypting specific fields of data for a cache behavior or for the
   * 			default cache behavior in your distribution.</p>
   */
  FieldLevelEncryptionId?: string;

  /**
   * <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
   */
  ForwardedValues: ForwardedValues | undefined;

  /**
   * <p>A complex type that contains zero or more Lambda function associations for a cache
   * 			behavior.</p>
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations;

  /**
   * <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. The
   * 			value that you specify applies only when your origin adds HTTP headers such as
   * 				<code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 				<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 				in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MaxTTL?: number;

  /**
   * <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">
   * 				Managing How Long Content Stays in an Edge Cache (Expiration)</a> in the <i>
   * 				Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to
   * 			forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code>
   * 			for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>
   */
  MinTTL: number | undefined;

  /**
   * <p>The pattern (for example, <code>images/*.jpg</code>) that specifies which requests to
   * 			apply the behavior to. When CloudFront receives a viewer request, the requested path is compared
   * 			with path patterns in the order in which cache behaviors are listed in the
   * 			distribution.</p>
   * 		       <note>
   * 			         <p>You can optionally include a slash (<code>/</code>) at the beginning of the path
   * 				pattern. For example, <code>/images/*.jpg</code>. CloudFront behavior is the same with or without
   * 				the leading <code>/</code>.</p>
   * 		       </note>
   * 		       <p>The path pattern for the default cache behavior is <code>*</code> and cannot be
   * 			changed. If the request for an object does not match the path pattern for any cache behaviors,
   * 			CloudFront applies the behavior in the default cache behavior.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesPathPattern">Path
   * 				Pattern</a> in the <i> Amazon CloudFront Developer Guide</i>.</p>
   */
  PathPattern: string | undefined;

  /**
   * <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming
   * 			format using the origin that is associated with this cache behavior. If so, specify
   * 				<code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for
   * 				<code>SmoothStreaming</code>, you can still distribute other content using this cache
   * 			behavior if the content matches the value of <code>PathPattern</code>. </p>
   */
  SmoothStreaming?: boolean;

  /**
   * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to
   * 			when a request matches the path pattern either for a cache behavior or for the default cache
   * 			behavior in your distribution.</p>
   */
  TargetOriginId: string | undefined;

  /**
   * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to
   * 			create signed URLs for private content.</p>
   * 		       <p>If you want to require signed URLs in requests for objects in the target origin that
   * 			match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for
   * 				<code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and
   * 				<code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
   * 		</p>
   * 		       <p>If you don't want to require signed URLs in requests for objects that match
   * 				<code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and
   * 				<code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p>
   * 		       <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to
   * 				<code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as
   * 			applicable, and specify all of the trusted signers that you want to include in the updated
   * 			distribution.</p>
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * <p>The protocol that viewers can use to access the files in the origin specified by
   * 				<code>TargetOriginId</code> when a request matches the path pattern in
   * 				<code>PathPattern</code>. You can specify the following options:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns
   * 					an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The
   * 					viewer then resubmits the request using the new URL. </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP
   * 					status code of 403 (Forbidden). </p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html">Using an HTTPS Connection to Access Your
   * 				Objects</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <note>
   * 			         <p>The only way to guarantee that viewers retrieve an object that was fetched from the
   * 				origin using HTTPS is never to use any other protocol to fetch the object. If you have
   * 				recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because
   * 				cached objects are protocol agnostic. That means that an edge location will return an object
   * 				from the cache regardless of whether the current request protocol matches the protocol used
   * 				previously. For more information, see
   * 				<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 				in an Edge Cache (Expiration)</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       </note>
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | string | undefined;
}

export namespace CacheBehavior {
  export function isa(o: any): o is CacheBehavior {
    return _smithy.isa(o, "CacheBehavior");
  }
}

/**
 * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.
 * 		</p>
 */
export interface CacheBehaviors {
  __type?: "CacheBehaviors";
  /**
   * <p>Optional: A complex type that contains cache behaviors for this distribution. If
   * 				<code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?: Array<CacheBehavior>;

  /**
   * <p>The number of cache behaviors for this distribution. </p>
   */
  Quantity: number | undefined;
}

export namespace CacheBehaviors {
  export function isa(o: any): o is CacheBehaviors {
    return _smithy.isa(o, "CacheBehaviors");
  }
}

/**
 * <p>A complex type that controls whether CloudFront caches the response to requests using the
 * 			specified HTTP methods. There are two choices:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>CloudFront caches responses to <code>GET</code> and <code>HEAD</code> requests.</p>
 * 			         </li>
 *             <li>
 * 				           <p>CloudFront caches responses to <code>GET</code>, <code>HEAD</code>, and
 * 						<code>OPTIONS</code> requests.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>If you pick the second choice for your Amazon S3 Origin, you may need to forward
 * 			Access-Control-Request-Method, Access-Control-Request-Headers, and Origin headers for the
 * 			responses to be cached correctly. </p>
 */
export interface CachedMethods {
  __type?: "CachedMethods";
  /**
   * <p>A complex type that contains the HTTP methods that you want CloudFront to cache responses
   * 			to.</p>
   */
  Items: Array<Method | string> | undefined;

  /**
   * <p>The number of HTTP methods for which you want CloudFront to cache responses. Valid values are
   * 				<code>2</code> (for caching responses to <code>GET</code> and <code>HEAD</code> requests)
   * 			and <code>3</code> (for caching responses to <code>GET</code>, <code>HEAD</code>, and
   * 				<code>OPTIONS</code> requests).</p>
   */
  Quantity: number | undefined;
}

export namespace CachedMethods {
  export function isa(o: any): o is CachedMethods {
    return _smithy.isa(o, "CachedMethods");
  }
}

export type CertificateSource = "acm" | "cloudfront" | "iam";

/**
 * <p>CloudFront origin access identity.</p>
 */
export interface CloudFrontOriginAccessIdentity {
  __type?: "CloudFrontOriginAccessIdentity";
  /**
   * <p>The current configuration information for the identity. </p>
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;

  /**
   * <p>The ID for the origin access identity, for example, <code>E74FTE3AJFJ256A</code>.
   * 		</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon S3 canonical user ID for the origin access identity, used when giving the origin
   * 			access identity read permission to an object in Amazon S3. </p>
   */
  S3CanonicalUserId: string | undefined;
}

export namespace CloudFrontOriginAccessIdentity {
  export function isa(o: any): o is CloudFrontOriginAccessIdentity {
    return _smithy.isa(o, "CloudFrontOriginAccessIdentity");
  }
}

/**
 * <p>Origin access identity configuration. Send a <code>GET</code> request to the
 * 					<code>/<i>CloudFront API version</i>/CloudFront/identity ID/config</code> resource.
 * 		</p>
 */
export interface CloudFrontOriginAccessIdentityConfig {
  __type?: "CloudFrontOriginAccessIdentityConfig";
  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be replayed.</p>
   * 		       <p>If the value of <code>CallerReference</code> is new (regardless of the content of the
   * 			<code>CloudFrontOriginAccessIdentityConfig</code> object), a new origin access identity is
   * 			created.</p>
   * 		       <p>If the <code>CallerReference</code> is a value already sent in a previous identity
   * 			request, and the content of the <code>CloudFrontOriginAccessIdentityConfig</code> is identical
   * 			to the original request (ignoring white space), the response includes the same information
   * 			returned to the original request. </p>
   * 		       <p>If the <code>CallerReference</code> is a value you already sent in a previous request
   * 			to create an identity, but the content of the
   * 			<code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request,
   * 			CloudFront returns a <code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>
   */
  CallerReference: string | undefined;

  /**
   * <p>Any comments you want to include about the origin access identity. </p>
   */
  Comment: string | undefined;
}

export namespace CloudFrontOriginAccessIdentityConfig {
  export function isa(o: any): o is CloudFrontOriginAccessIdentityConfig {
    return _smithy.isa(o, "CloudFrontOriginAccessIdentityConfig");
  }
}

/**
 * <p>Lists the origin access identities for CloudFront.Send a <code>GET</code> request to the
 * 					<code>/<i>CloudFront API version</i>/origin-access-identity/cloudfront</code>
 * 			resource. The response includes a <code>CloudFrontOriginAccessIdentityList</code> element with
 * 			zero or more <code>CloudFrontOriginAccessIdentitySummary</code> child elements. By default,
 * 			your entire list of origin access identities is returned in one single page. If the list is
 * 			long, you can paginate it using the <code>MaxItems</code> and <code>Marker</code>
 * 			parameters.</p>
 */
export interface CloudFrontOriginAccessIdentityList {
  __type?: "CloudFrontOriginAccessIdentityList";
  /**
   * <p>A flag that indicates whether more origin access identities remain to be listed. If
   * 			your results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more items in the list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>A complex type that contains one <code>CloudFrontOriginAccessIdentitySummary</code>
   * 			element for each origin access identity that was created by the current AWS
   * 			account.</p>
   */
  Items?: Array<CloudFrontOriginAccessIdentitySummary>;

  /**
   * <p>Use this when paginating results to indicate where to begin in your list of origin
   * 			access identities. The results include identities in the list that occur after the marker. To
   * 			get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of the last
   * 			identity on that page). </p>
   */
  Marker: string | undefined;

  /**
   * <p>The maximum number of origin access identities you want in the response body.
   * 		</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing your
   * 			origin access identities where they left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>The number of CloudFront origin access identities that were created by the current AWS
   * 			account. </p>
   */
  Quantity: number | undefined;
}

export namespace CloudFrontOriginAccessIdentityList {
  export function isa(o: any): o is CloudFrontOriginAccessIdentityList {
    return _smithy.isa(o, "CloudFrontOriginAccessIdentityList");
  }
}

/**
 * <p>Summary of the information about a CloudFront origin access identity.</p>
 */
export interface CloudFrontOriginAccessIdentitySummary {
  __type?: "CloudFrontOriginAccessIdentitySummary";
  /**
   * <p>The comment for this origin access identity, as originally specified when
   * 			created.</p>
   */
  Comment: string | undefined;

  /**
   * <p>The ID for the origin access identity. For example:
   * 			<code>E74FTE3AJFJ256A</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon S3 canonical user ID for the origin access identity, which you use when giving
   * 			the origin access identity read permission to an object in Amazon S3.</p>
   */
  S3CanonicalUserId: string | undefined;
}

export namespace CloudFrontOriginAccessIdentitySummary {
  export function isa(o: any): o is CloudFrontOriginAccessIdentitySummary {
    return _smithy.isa(o, "CloudFrontOriginAccessIdentitySummary");
  }
}

/**
 * <p>A field-level encryption content type profile. </p>
 */
export interface ContentTypeProfile {
  __type?: "ContentTypeProfile";
  /**
   * <p>The content type for a field-level encryption content type-profile mapping. </p>
   */
  ContentType: string | undefined;

  /**
   * <p>The format for a field-level encryption content type-profile mapping. </p>
   */
  Format: Format | string | undefined;

  /**
   * <p>The profile ID for a field-level encryption content type-profile mapping. </p>
   */
  ProfileId?: string;
}

export namespace ContentTypeProfile {
  export function isa(o: any): o is ContentTypeProfile {
    return _smithy.isa(o, "ContentTypeProfile");
  }
}

/**
 * <p>The configuration for a field-level encryption content type-profile mapping. </p>
 */
export interface ContentTypeProfileConfig {
  __type?: "ContentTypeProfileConfig";
  /**
   * <p>The configuration for a field-level encryption content type-profile. </p>
   */
  ContentTypeProfiles?: ContentTypeProfiles;

  /**
   * <p>The setting in a field-level encryption content type-profile mapping that specifies what to do
   * 			when an unknown content type is provided for the profile. If true, content is
   * 			forwarded without being encrypted when the content type is unknown. If false (the
   * 			default), an error is returned when the content type is unknown. </p>
   */
  ForwardWhenContentTypeIsUnknown: boolean | undefined;
}

export namespace ContentTypeProfileConfig {
  export function isa(o: any): o is ContentTypeProfileConfig {
    return _smithy.isa(o, "ContentTypeProfileConfig");
  }
}

/**
 * <p>Field-level encryption content type-profile. </p>
 */
export interface ContentTypeProfiles {
  __type?: "ContentTypeProfiles";
  /**
   * <p>Items in a field-level encryption content type-profile mapping. </p>
   */
  Items?: Array<ContentTypeProfile>;

  /**
   * <p>The number of field-level encryption content type-profile mappings. </p>
   */
  Quantity: number | undefined;
}

export namespace ContentTypeProfiles {
  export function isa(o: any): o is ContentTypeProfiles {
    return _smithy.isa(o, "ContentTypeProfiles");
  }
}

/**
 * <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin
 * 			and, if so, which ones. For more information about forwarding cookies to the origin, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">
 * 			Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CookieNames {
  __type?: "CookieNames";
  /**
   * <p>A complex type that contains one <code>Name</code> element for each cookie that you
   * 			want CloudFront to forward to the origin for this cache behavior.</p>
   */
  Items?: Array<string>;

  /**
   * <p>The number of different cookies that you want CloudFront to forward to the origin for this
   * 			cache behavior.</p>
   */
  Quantity: number | undefined;
}

export namespace CookieNames {
  export function isa(o: any): o is CookieNames {
    return _smithy.isa(o, "CookieNames");
  }
}

/**
 * <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin
 * 			and, if so, which ones. For more information about forwarding cookies to the origin, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">Caching Content
 * 				Based on Cookies</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CookiePreference {
  __type?: "CookiePreference";
  /**
   * <p>Specifies which cookies to forward to the origin for this cache behavior: all, none, or
   * 			the list of cookies specified in the <code>WhitelistedNames</code> complex type.</p>
   * 		       <p>Amazon S3 doesn't process cookies. When the cache behavior is forwarding requests to an
   * 			Amazon S3 origin, specify none for the <code>Forward</code> element. </p>
   */
  Forward: ItemSelection | string | undefined;

  /**
   * <p>Required if you specify <code>whitelist</code> for the value of <code>Forward:</code>.
   * 			A complex type that specifies how many different cookies you want CloudFront to forward to the
   * 			origin for this cache behavior and, if you want to forward selected cookies, the names of
   * 			those cookies.</p>
   * 		       <p>If you specify <code>all</code> or none for the value of <code>Forward</code>, omit
   * 				<code>WhitelistedNames</code>. If you change the value of <code>Forward</code> from
   * 				<code>whitelist</code> to all or none and you don't delete the <code>WhitelistedNames</code>
   * 			element and its child elements, CloudFront deletes them automatically.</p>
   * 		       <p>For the current limit on the number of cookie names that you can whitelist for each
   * 			cache behavior, see <a href="https://docs.aws.amazon.com/general/latest/gr/xrefaws_service_limits.html#limits_cloudfront">
   * 				CloudFront Limits</a> in the <i>AWS General Reference</i>.</p>
   */
  WhitelistedNames?: CookieNames;
}

export namespace CookiePreference {
  export function isa(o: any): o is CookiePreference {
    return _smithy.isa(o, "CookiePreference");
  }
}

/**
 * <p>The request to create a new origin access identity (OAI). An origin access identity is a
 * 			special CloudFront user that you can associate with Amazon S3 origins, so that you can secure all or
 * 			just some of your Amazon S3 content. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">
 * 			Restricting Access to Amazon S3 Content by Using an Origin Access Identity</a> in the
 * 			<i>Amazon CloudFront Developer Guide</i>. </p>
 */
export interface CreateCloudFrontOriginAccessIdentityRequest {
  __type?: "CreateCloudFrontOriginAccessIdentityRequest";
  /**
   * <p>The current configuration information for the identity.</p>
   */
  CloudFrontOriginAccessIdentityConfig:
    | CloudFrontOriginAccessIdentityConfig
    | undefined;
}

export namespace CreateCloudFrontOriginAccessIdentityRequest {
  export function isa(
    o: any
  ): o is CreateCloudFrontOriginAccessIdentityRequest {
    return _smithy.isa(o, "CreateCloudFrontOriginAccessIdentityRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateCloudFrontOriginAccessIdentityResult
  extends $MetadataBearer {
  __type?: "CreateCloudFrontOriginAccessIdentityResult";
  /**
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * <p>The current version of the origin access identity created.</p>
   */
  ETag?: string;

  /**
   * <p>The fully qualified URI of the new origin access identity just created. For example:
   * 				<code>https://cloudfront.amazonaws.com/2010-11-01/origin-access-identity/cloudfront/E74FTE3AJFJ256A</code>.</p>
   */
  Location?: string;
}

export namespace CreateCloudFrontOriginAccessIdentityResult {
  export function isa(o: any): o is CreateCloudFrontOriginAccessIdentityResult {
    return _smithy.isa(o, "CreateCloudFrontOriginAccessIdentityResult");
  }
}

/**
 * <p>The request to create a new distribution.</p>
 */
export interface CreateDistributionRequest {
  __type?: "CreateDistributionRequest";
  /**
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfig: DistributionConfig | undefined;
}

export namespace CreateDistributionRequest {
  export function isa(o: any): o is CreateDistributionRequest {
    return _smithy.isa(o, "CreateDistributionRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateDistributionResult extends $MetadataBearer {
  __type?: "CreateDistributionResult";
  /**
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;

  /**
   * <p>The current version of the distribution created.</p>
   */
  ETag?: string;

  /**
   * <p>The fully qualified URI of the new distribution resource just created. For example:
   * 				<code>https://cloudfront.amazonaws.com/2010-11-01/distribution/EDFDVBD632BHDS5</code>.</p>
   */
  Location?: string;
}

export namespace CreateDistributionResult {
  export function isa(o: any): o is CreateDistributionResult {
    return _smithy.isa(o, "CreateDistributionResult");
  }
}

/**
 * <p>The request to create a new distribution with tags. </p>
 */
export interface CreateDistributionWithTagsRequest {
  __type?: "CreateDistributionWithTagsRequest";
  /**
   * <p>The distribution's configuration information. </p>
   */
  DistributionConfigWithTags: DistributionConfigWithTags | undefined;
}

export namespace CreateDistributionWithTagsRequest {
  export function isa(o: any): o is CreateDistributionWithTagsRequest {
    return _smithy.isa(o, "CreateDistributionWithTagsRequest");
  }
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface CreateDistributionWithTagsResult extends $MetadataBearer {
  __type?: "CreateDistributionWithTagsResult";
  /**
   * <p>The distribution's information. </p>
   */
  Distribution?: Distribution;

  /**
   * <p>The current version of the distribution created.</p>
   */
  ETag?: string;

  /**
   * <p>The fully qualified URI of the new distribution resource just created. For example:
   * 				<code>https://cloudfront.amazonaws.com/2010-11-01/distribution/EDFDVBD632BHDS5</code>.
   * 		</p>
   */
  Location?: string;
}

export namespace CreateDistributionWithTagsResult {
  export function isa(o: any): o is CreateDistributionWithTagsResult {
    return _smithy.isa(o, "CreateDistributionWithTagsResult");
  }
}

export interface CreateFieldLevelEncryptionConfigRequest {
  __type?: "CreateFieldLevelEncryptionConfigRequest";
  /**
   * <p>The request to create a new field-level encryption configuration.</p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;
}

export namespace CreateFieldLevelEncryptionConfigRequest {
  export function isa(o: any): o is CreateFieldLevelEncryptionConfigRequest {
    return _smithy.isa(o, "CreateFieldLevelEncryptionConfigRequest");
  }
}

export interface CreateFieldLevelEncryptionConfigResult
  extends $MetadataBearer {
  __type?: "CreateFieldLevelEncryptionConfigResult";
  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Returned when you create a new field-level encryption configuration.</p>
   */
  FieldLevelEncryption?: FieldLevelEncryption;

  /**
   * <p>The fully qualified URI of the new configuration resource just created. For example:
   * 			<code>https://cloudfront.amazonaws.com/2010-11-01/field-level-encryption-config/EDFDVBD632BHDS5</code>.</p>
   */
  Location?: string;
}

export namespace CreateFieldLevelEncryptionConfigResult {
  export function isa(o: any): o is CreateFieldLevelEncryptionConfigResult {
    return _smithy.isa(o, "CreateFieldLevelEncryptionConfigResult");
  }
}

export interface CreateFieldLevelEncryptionProfileRequest {
  __type?: "CreateFieldLevelEncryptionProfileRequest";
  /**
   * <p>The request to create a field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfileConfig:
    | FieldLevelEncryptionProfileConfig
    | undefined;
}

export namespace CreateFieldLevelEncryptionProfileRequest {
  export function isa(o: any): o is CreateFieldLevelEncryptionProfileRequest {
    return _smithy.isa(o, "CreateFieldLevelEncryptionProfileRequest");
  }
}

export interface CreateFieldLevelEncryptionProfileResult
  extends $MetadataBearer {
  __type?: "CreateFieldLevelEncryptionProfileResult";
  /**
   * <p>The current version of the field level encryption profile. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Returned when you create a new field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;

  /**
   * <p>The fully qualified URI of the new profile resource just created. For example:
   * 			<code>https://cloudfront.amazonaws.com/2010-11-01/field-level-encryption-profile/EDFDVBD632BHDS5</code>.</p>
   */
  Location?: string;
}

export namespace CreateFieldLevelEncryptionProfileResult {
  export function isa(o: any): o is CreateFieldLevelEncryptionProfileResult {
    return _smithy.isa(o, "CreateFieldLevelEncryptionProfileResult");
  }
}

/**
 * <p>The request to create an invalidation.</p>
 */
export interface CreateInvalidationRequest {
  __type?: "CreateInvalidationRequest";
  /**
   * <p>The distribution's id.</p>
   */
  DistributionId: string | undefined;

  /**
   * <p>The batch information for the invalidation.</p>
   */
  InvalidationBatch: InvalidationBatch | undefined;
}

export namespace CreateInvalidationRequest {
  export function isa(o: any): o is CreateInvalidationRequest {
    return _smithy.isa(o, "CreateInvalidationRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateInvalidationResult extends $MetadataBearer {
  __type?: "CreateInvalidationResult";
  /**
   * <p>The invalidation's information.</p>
   */
  Invalidation?: Invalidation;

  /**
   * <p>The fully qualified URI of the distribution and invalidation batch request, including
   * 			the <code>Invalidation ID</code>.</p>
   */
  Location?: string;
}

export namespace CreateInvalidationResult {
  export function isa(o: any): o is CreateInvalidationResult {
    return _smithy.isa(o, "CreateInvalidationResult");
  }
}

export interface CreatePublicKeyRequest {
  __type?: "CreatePublicKeyRequest";
  /**
   * <p>The request to add a public key to CloudFront.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

export namespace CreatePublicKeyRequest {
  export function isa(o: any): o is CreatePublicKeyRequest {
    return _smithy.isa(o, "CreatePublicKeyRequest");
  }
}

export interface CreatePublicKeyResult extends $MetadataBearer {
  __type?: "CreatePublicKeyResult";
  /**
   * <p>The current version of the public key. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>The fully qualified URI of the new public key resource just created. For example:
   * 			<code>https://cloudfront.amazonaws.com/2010-11-01/cloudfront-public-key/EDFDVBD632BHDS5</code>.</p>
   */
  Location?: string;

  /**
   * <p>Returned when you add a public key.</p>
   */
  PublicKey?: PublicKey;
}

export namespace CreatePublicKeyResult {
  export function isa(o: any): o is CreatePublicKeyResult {
    return _smithy.isa(o, "CreatePublicKeyResult");
  }
}

/**
 * <p>The request to create a new streaming distribution.</p>
 */
export interface CreateStreamingDistributionRequest {
  __type?: "CreateStreamingDistributionRequest";
  /**
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

export namespace CreateStreamingDistributionRequest {
  export function isa(o: any): o is CreateStreamingDistributionRequest {
    return _smithy.isa(o, "CreateStreamingDistributionRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface CreateStreamingDistributionResult extends $MetadataBearer {
  __type?: "CreateStreamingDistributionResult";
  /**
   * <p>The current version of the streaming distribution created.</p>
   */
  ETag?: string;

  /**
   * <p>The fully qualified URI of the new streaming distribution resource just created. For
   * 			example:
   * 				<code>https://cloudfront.amazonaws.com/2010-11-01/streaming-distribution/EGTXBD79H29TRA8</code>.</p>
   */
  Location?: string;

  /**
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;
}

export namespace CreateStreamingDistributionResult {
  export function isa(o: any): o is CreateStreamingDistributionResult {
    return _smithy.isa(o, "CreateStreamingDistributionResult");
  }
}

/**
 * <p>The request to create a new streaming distribution with tags.</p>
 */
export interface CreateStreamingDistributionWithTagsRequest {
  __type?: "CreateStreamingDistributionWithTagsRequest";
  /**
   * <p> The streaming distribution's configuration information. </p>
   */
  StreamingDistributionConfigWithTags:
    | StreamingDistributionConfigWithTags
    | undefined;
}

export namespace CreateStreamingDistributionWithTagsRequest {
  export function isa(o: any): o is CreateStreamingDistributionWithTagsRequest {
    return _smithy.isa(o, "CreateStreamingDistributionWithTagsRequest");
  }
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface CreateStreamingDistributionWithTagsResult
  extends $MetadataBearer {
  __type?: "CreateStreamingDistributionWithTagsResult";
  /**
   * <p>The current version of the distribution created.</p>
   */
  ETag?: string;

  /**
   * <p>The fully qualified URI of the new streaming distribution resource just created. For
   * 				example:<code>
   * 				https://cloudfront.amazonaws.com/2010-11-01/streaming-distribution/EGTXBD79H29TRA8</code>.</p>
   */
  Location?: string;

  /**
   * <p>The streaming distribution's information. </p>
   */
  StreamingDistribution?: StreamingDistribution;
}

export namespace CreateStreamingDistributionWithTagsResult {
  export function isa(o: any): o is CreateStreamingDistributionWithTagsResult {
    return _smithy.isa(o, "CreateStreamingDistributionWithTagsResult");
  }
}

/**
 * <p>A complex type that controls:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error
 * 					messages before returning the response to the viewer. </p>
 * 			         </li>
 *             <li>
 * 				           <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CustomErrorResponse {
  __type?: "CustomErrorResponse";
  /**
   * <p>The minimum amount of time, in seconds, that you want CloudFront to cache the HTTP status
   * 			code specified in <code>ErrorCode</code>. When this time period has elapsed, CloudFront queries your
   * 			origin to see whether the problem that caused the error has been resolved and the requested
   * 			object is now available.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing
   * 				Error Responses</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  ErrorCachingMinTTL?: number;

  /**
   * <p>The HTTP status code for which you want to specify a custom error page and/or a caching
   * 			duration.</p>
   */
  ErrorCode: number | undefined;

  /**
   * <p>The HTTP status code that you want CloudFront to return to the viewer along with the custom
   * 			error page. There are a variety of reasons that you might want CloudFront to return a status code
   * 			different from the status code that your origin returned to CloudFront, for example:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Some Internet devices (some firewalls and corporate proxies, for example) intercept
   * 					HTTP 4xx and 5xx and prevent the response from being returned to the viewer. If you
   * 					substitute <code>200</code>, the response typically won't be intercepted.</p>
   * 			         </li>
   *             <li>
   * 				           <p>If you don't care about distinguishing among different client errors or server
   * 					errors, you can specify <code>400</code> or <code>500</code> as the
   * 						<code>ResponseCode</code> for all 4xx or 5xx errors.</p>
   * 			         </li>
   *             <li>
   * 				           <p>You might want to return a <code>200</code> status code (OK) and static website so
   * 					your customers don't know that your website is down.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you specify a value for <code>ResponseCode</code>, you must also specify a value for
   * 			<code>ResponsePagePath</code>.</p>
   */
  ResponseCode?: string;

  /**
   * <p>The path to the custom error page that you want CloudFront to return to a viewer when your
   * 			origin returns the HTTP status code specified by <code>ErrorCode</code>, for example,
   * 				<code>/4xx-errors/403-forbidden.html</code>. If you want to store your objects and your
   * 			custom error pages in different locations, your distribution must include a cache behavior for
   * 			which the following is true:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>The value of <code>PathPattern</code> matches the path to your custom error
   * 					messages. For example, suppose you saved custom error pages for 4xx errors in an Amazon S3
   * 					bucket in a directory named <code>/4xx-errors</code>. Your distribution must include a
   * 					cache behavior for which the path pattern routes requests for your custom error pages to
   * 					that location, for example, <code>/4xx-errors/*</code>. </p>
   * 			         </li>
   *             <li>
   * 				           <p>The value of <code>TargetOriginId</code> specifies the value of the <code>ID</code>
   * 					element for the origin that contains your custom error pages.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you specify a value for <code>ResponsePagePath</code>, you must also specify a value
   * 			for <code>ResponseCode</code>.</p>
   * 		       <p>We recommend that you store custom error pages in an Amazon S3 bucket. If you store custom
   * 			error pages on an HTTP server and the server starts to return 5xx errors, CloudFront can't get the
   * 			files that you want to return to viewers because the origin server is unavailable.</p>
   */
  ResponsePagePath?: string;
}

export namespace CustomErrorResponse {
  export function isa(o: any): o is CustomErrorResponse {
    return _smithy.isa(o, "CustomErrorResponse");
  }
}

/**
 * <p>A complex type that controls:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error
 * 					messages before returning the response to the viewer.</p>
 * 			         </li>
 *             <li>
 * 				           <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p>
 * 			         </li>
 *          </ul>
 * 		       <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface CustomErrorResponses {
  __type?: "CustomErrorResponses";
  /**
   * <p>A complex type that contains a <code>CustomErrorResponse</code> element for each HTTP
   * 			status code for which you want to specify a custom error page and/or a caching duration.
   * 		</p>
   */
  Items?: Array<CustomErrorResponse>;

  /**
   * <p>The number of HTTP status codes for which you want to specify a custom error page
   * 			and/or a caching duration. If <code>Quantity</code> is <code>0</code>, you can omit
   * 				<code>Items</code>.</p>
   */
  Quantity: number | undefined;
}

export namespace CustomErrorResponses {
  export function isa(o: any): o is CustomErrorResponses {
    return _smithy.isa(o, "CustomErrorResponses");
  }
}

/**
 * <p>A complex type that contains the list of Custom Headers for each origin. </p>
 */
export interface CustomHeaders {
  __type?: "CustomHeaders";
  /**
   * <p>
   *             <b>Optional</b>: A list that contains one
   * 				<code>OriginCustomHeader</code> element for each custom header that you want CloudFront to forward
   * 			to the origin. If Quantity is <code>0</code>, omit <code>Items</code>.</p>
   */
  Items?: Array<OriginCustomHeader>;

  /**
   * <p>The number of custom headers, if any, for this distribution.</p>
   */
  Quantity: number | undefined;
}

export namespace CustomHeaders {
  export function isa(o: any): o is CustomHeaders {
    return _smithy.isa(o, "CustomHeaders");
  }
}

/**
 * <p>A custom origin or an Amazon S3 bucket configured as a website endpoint.</p>
 */
export interface CustomOriginConfig {
  __type?: "CustomOriginConfig";
  /**
   * <p>The HTTP port the custom origin listens on.</p>
   */
  HTTPPort: number | undefined;

  /**
   * <p>The HTTPS port the custom origin listens on.</p>
   */
  HTTPSPort: number | undefined;

  /**
   * <p>You can create a custom keep-alive timeout. All timeout units are in seconds. The
   * 			default keep-alive timeout is 5 seconds, but you can configure custom timeout lengths using
   * 			the CloudFront API. The minimum timeout length is 1 second; the maximum is 60 seconds.</p>
   * 		       <p>If you need to increase the maximum time limit, contact the <a href="https://console.aws.amazon.com/support/home#/">AWS Support Center</a>.</p>
   */
  OriginKeepaliveTimeout?: number;

  /**
   * <p>The origin protocol policy to apply to your origin.</p>
   */
  OriginProtocolPolicy: OriginProtocolPolicy | string | undefined;

  /**
   * <p>You can create a custom origin read timeout. All timeout units are in seconds. The
   * 			default origin read timeout is 30 seconds, but you can configure custom timeout lengths using
   * 			the CloudFront API. The minimum timeout length is 4 seconds; the maximum is 60 seconds.</p>
   * 		       <p>If you need to increase the maximum time limit, contact the <a href="https://console.aws.amazon.com/support/home#/">AWS Support Center</a>.</p>
   */
  OriginReadTimeout?: number;

  /**
   * <p>The SSL/TLS protocols that you want CloudFront to use when communicating with your origin over HTTPS.</p>
   */
  OriginSslProtocols?: OriginSslProtocols;
}

export namespace CustomOriginConfig {
  export function isa(o: any): o is CustomOriginConfig {
    return _smithy.isa(o, "CustomOriginConfig");
  }
}

/**
 * <p>A complex type that describes the default cache behavior if you don't specify a
 * 				<code>CacheBehavior</code> element or if files don't match any of the values of
 * 				<code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one
 * 			default cache behavior.</p>
 */
export interface DefaultCacheBehavior {
  __type?: "DefaultCacheBehavior";
  /**
   * <p>A complex type that controls which HTTP methods CloudFront processes and forwards to your
   * 			Amazon S3 bucket or your custom origin. There are three choices:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>CloudFront forwards only <code>GET</code> and <code>HEAD</code> requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront forwards only <code>GET</code>, <code>HEAD</code>, and <code>OPTIONS</code>
   * 					requests.</p>
   * 			         </li>
   *             <li>
   * 				           <p>CloudFront forwards <code>GET, HEAD, OPTIONS, PUT, PATCH, POST</code>, and
   * 						<code>DELETE</code> requests.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>If you pick the third choice, you may need to restrict access to your Amazon S3 bucket or
   * 			to your custom origin so users can't perform operations that you don't want them to. For
   * 			example, you might not want users to have permissions to delete objects from your
   * 			origin.</p>
   */
  AllowedMethods?: AllowedMethods;

  /**
   * <p>Whether you want CloudFront to automatically compress certain files for this cache behavior.
   * 			If so, specify <code>true</code>; if not, specify <code>false</code>. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/ServingCompressedFiles.html">Serving Compressed Files</a> in
   * 			the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Compress?: boolean;

  /**
   * <p>The default amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. The
   * 			value that you specify applies only when your origin does not add HTTP headers such as
   * 				<code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 				<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 					in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultTTL?: number;

  /**
   * <p>The value of <code>ID</code> for the field-level encryption configuration that you
   * 		want CloudFront to use for encrypting specific fields of data for a cache behavior or for the
   * 		default cache behavior in your distribution.</p>
   */
  FieldLevelEncryptionId?: string;

  /**
   * <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
   */
  ForwardedValues: ForwardedValues | undefined;

  /**
   * <p>A complex type that contains zero or more Lambda function associations for a cache
   * 			behavior.</p>
   */
  LambdaFunctionAssociations?: LambdaFunctionAssociations;

  /**
   * <p>The maximum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. The
   * 			value that you specify applies only when your origin adds HTTP headers such as
   * 			<code>Cache-Control max-age</code>, <code>Cache-Control s-maxage</code>, and
   * 			<code>Expires</code> to objects. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 				in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MaxTTL?: number;

  /**
   * <p>The minimum amount of time that you want objects to stay in CloudFront caches before CloudFront
   * 			forwards another request to your origin to determine whether the object has been updated. For
   * 			more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How Long Content Stays
   * 				in an Edge Cache (Expiration)</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>You must specify <code>0</code> for <code>MinTTL</code> if you configure CloudFront to
   * 			forward all headers to your origin (under <code>Headers</code>, if you specify <code>1</code>
   * 			for <code>Quantity</code> and <code>*</code> for <code>Name</code>).</p>
   */
  MinTTL: number | undefined;

  /**
   * <p>Indicates whether you want to distribute media files in the Microsoft Smooth Streaming
   * 			format using the origin that is associated with this cache behavior. If so, specify
   * 				<code>true</code>; if not, specify <code>false</code>. If you specify <code>true</code> for
   * 				<code>SmoothStreaming</code>, you can still distribute other content using this cache
   * 			behavior if the content matches the value of <code>PathPattern</code>. </p>
   */
  SmoothStreaming?: boolean;

  /**
   * <p>The value of <code>ID</code> for the origin that you want CloudFront to route requests to
   * 			when a request matches the path pattern either for a cache behavior or for the default cache
   * 			behavior in your distribution.</p>
   */
  TargetOriginId: string | undefined;

  /**
   * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to
   * 			create signed URLs for private content.</p>
   * 		       <p>If you want to require signed URLs in requests for objects in the target origin that
   * 			match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for
   * 				<code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and
   * 				<code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>
   * 				Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>If you don't want to require signed URLs in requests for objects that match
   * 				<code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and
   * 				<code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p>
   * 		       <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to
   * 				<code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as
   * 			applicable, and specify all of the trusted signers that you want to include in the updated
   * 			distribution.</p>
   */
  TrustedSigners: TrustedSigners | undefined;

  /**
   * <p>The protocol that viewers can use to access the files in the origin specified by
   * 				<code>TargetOriginId</code> when a request matches the path pattern in
   * 				<code>PathPattern</code>. You can specify the following options:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>allow-all</code>: Viewers can use HTTP or HTTPS.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>redirect-to-https</code>: If a viewer submits an HTTP request, CloudFront returns
   * 					an HTTP status code of 301 (Moved Permanently) to the viewer along with the HTTPS URL. The
   * 					viewer then resubmits the request using the new URL.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>https-only</code>: If a viewer sends an HTTP request, CloudFront returns an HTTP
   * 					status code of 403 (Forbidden).</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information about requiring the HTTPS protocol, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html">Using an HTTPS Connection to Access Your
   * 				Objects</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <note>
   * 			         <p>The only way to guarantee that viewers retrieve an object that was fetched from the
   * 				origin using HTTPS is never to use any other protocol to fetch the object. If you have
   * 				recently changed from HTTP to HTTPS, we recommend that you clear your objects' cache because
   * 				cached objects are protocol agnostic. That means that an edge location will return an object
   * 				from the cache regardless of whether the current request protocol matches the protocol used
   * 				previously. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Expiration.html">Managing How
   * 					Long Content Stays in an Edge Cache (Expiration)</a> in the
   * 					<i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       </note>
   */
  ViewerProtocolPolicy: ViewerProtocolPolicy | string | undefined;
}

export namespace DefaultCacheBehavior {
  export function isa(o: any): o is DefaultCacheBehavior {
    return _smithy.isa(o, "DefaultCacheBehavior");
  }
}

/**
 * <p>Deletes a origin access identity.</p>
 */
export interface DeleteCloudFrontOriginAccessIdentityRequest {
  __type?: "DeleteCloudFrontOriginAccessIdentityRequest";
  /**
   * <p>The origin access identity's ID.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header you received from a previous <code>GET</code>
   * 			or <code>PUT</code> request. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteCloudFrontOriginAccessIdentityRequest {
  export function isa(
    o: any
  ): o is DeleteCloudFrontOriginAccessIdentityRequest {
    return _smithy.isa(o, "DeleteCloudFrontOriginAccessIdentityRequest");
  }
}

/**
 * <p>This action deletes a web distribution. To delete a web distribution using the CloudFront
 * 			API, perform the following steps.</p>
 * 		       <p>
 * 			         <b>To delete a web distribution using the CloudFront API:</b>
 * 		       </p>
 * 		       <ol>
 *             <li>
 * 				           <p>Disable the web distribution </p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>GET Distribution Config</code> request to get the current
 * 					configuration and the <code>Etag</code> header for the distribution.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Update the XML document that was returned in the response to your <code>GET
 * 						Distribution Config</code> request to change the value of <code>Enabled</code> to
 * 						<code>false</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>PUT Distribution Config</code> request to update the configuration
 * 					for your distribution. In the request body, include the XML document that you updated in
 * 					Step 3. Set the value of the HTTP <code>If-Match</code> header to the value of the
 * 						<code>ETag</code> header that CloudFront returned when you submitted the <code>GET
 * 						Distribution Config</code> request in Step 2.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Review the response to the <code>PUT Distribution Config</code> request to confirm
 * 					that the distribution was successfully disabled.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>GET Distribution</code> request to confirm that your changes have
 * 					propagated. When propagation is complete, the value of <code>Status</code> is
 * 						<code>Deployed</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Submit a <code>DELETE Distribution</code> request. Set the value of the HTTP
 * 						<code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront
 * 					returned when you submitted the <code>GET Distribution Config</code> request in Step
 * 					6.</p>
 * 			         </li>
 *             <li>
 * 				           <p>Review the response to your <code>DELETE Distribution</code> request to confirm
 * 					that the distribution was successfully deleted.</p>
 * 			         </li>
 *          </ol>
 * 		       <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the
 * 				<i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface DeleteDistributionRequest {
  __type?: "DeleteDistributionRequest";
  /**
   * <p>The distribution ID. </p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when you disabled the
   * 			distribution. For example: <code>E2QWRUHAPOMQZL</code>. </p>
   */
  IfMatch?: string;
}

export namespace DeleteDistributionRequest {
  export function isa(o: any): o is DeleteDistributionRequest {
    return _smithy.isa(o, "DeleteDistributionRequest");
  }
}

export interface DeleteFieldLevelEncryptionConfigRequest {
  __type?: "DeleteFieldLevelEncryptionConfigRequest";
  /**
   * <p>The ID of the configuration you want to delete from CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			configuration identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteFieldLevelEncryptionConfigRequest {
  export function isa(o: any): o is DeleteFieldLevelEncryptionConfigRequest {
    return _smithy.isa(o, "DeleteFieldLevelEncryptionConfigRequest");
  }
}

export interface DeleteFieldLevelEncryptionProfileRequest {
  __type?: "DeleteFieldLevelEncryptionProfileRequest";
  /**
   * <p>Request the ID of the profile you want to delete from CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			profile to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteFieldLevelEncryptionProfileRequest {
  export function isa(o: any): o is DeleteFieldLevelEncryptionProfileRequest {
    return _smithy.isa(o, "DeleteFieldLevelEncryptionProfileRequest");
  }
}

export interface DeletePublicKeyRequest {
  __type?: "DeletePublicKeyRequest";
  /**
   * <p>The ID of the public key you want to remove from CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			public key identity to delete. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeletePublicKeyRequest {
  export function isa(o: any): o is DeletePublicKeyRequest {
    return _smithy.isa(o, "DeletePublicKeyRequest");
  }
}

/**
 * <p>The request to delete a streaming distribution.</p>
 */
export interface DeleteStreamingDistributionRequest {
  __type?: "DeleteStreamingDistributionRequest";
  /**
   * <p>The distribution ID. </p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when you disabled the
   * 			streaming distribution. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace DeleteStreamingDistributionRequest {
  export function isa(o: any): o is DeleteStreamingDistributionRequest {
    return _smithy.isa(o, "DeleteStreamingDistributionRequest");
  }
}

/**
 * <p>A distribution tells CloudFront where you want content to be delivered from, and the details about how to
 * 			track and manage content delivery.</p>
 */
export interface Distribution {
  __type?: "Distribution";
  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example:
   * 				<code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where
   * 				<code>123456789012</code> is your AWS account ID.</p>
   */
  ARN: string | undefined;

  /**
   * <p>CloudFront automatically adds this element to the response only if you've set up the
   * 			distribution to serve private content with signed URLs. The element lists the key pair IDs
   * 			that CloudFront is aware of for each trusted signer. The <code>Signer</code> child element lists the
   * 			AWS account number of the trusted signer (or an empty <code>Self</code> element if the
   * 			signer is you). The <code>Signer</code> element also includes the IDs of any active key pairs
   * 			associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element
   * 			appears for a <code>Signer</code>, that signer can't create working signed URLs.</p>
   */
  ActiveTrustedSigners: ActiveTrustedSigners | undefined;

  /**
   * <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content
   * 			publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP
   * 			recordal status for CNAMEs associated with distributions.</p>
   * 		       <p>For more information about ICP recordals, see  <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html">
   * 			Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
   */
  AliasICPRecordals?: Array<AliasICPRecordal>;

  /**
   * <p>The current configuration information for the distribution. Send a <code>GET</code>
   * 			request to the <code>/<i>CloudFront API version</i>/distribution ID/config</code>
   * 			resource.</p>
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>. </p>
   */
  DomainName: string | undefined;

  /**
   * <p>The identifier for the distribution. For example: <code>EDFDVBD632BHDS5</code>.
   * 		</p>
   */
  Id: string | undefined;

  /**
   * <p>The number of invalidation batches currently in progress. </p>
   */
  InProgressInvalidationBatches: number | undefined;

  /**
   * <p>The date and time the distribution was last modified. </p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>This response element indicates the current status of the distribution. When the status
   * 			is <code>Deployed</code>, the distribution's information is fully propagated to all CloudFront edge
   * 			locations. </p>
   */
  Status: string | undefined;
}

export namespace Distribution {
  export function isa(o: any): o is Distribution {
    return _smithy.isa(o, "Distribution");
  }
}

/**
 * <p>A distribution configuration.</p>
 */
export interface DistributionConfig {
  __type?: "DistributionConfig";
  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this distribution.</p>
   */
  Aliases?: Aliases;

  /**
   * <p>A complex type that contains zero or more <code>CacheBehavior</code> elements.
   * 		</p>
   */
  CacheBehaviors?: CacheBehaviors;

  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be
   * 			replayed.</p>
   * 		       <p>If the value of <code>CallerReference</code> is new (regardless of the content of the
   * 				<code>DistributionConfig</code> object), CloudFront creates a new distribution.</p>
   * 		       <p>If <code>CallerReference</code> is a value that you already sent in a previous request to
   * 			create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>Any comments you want to include about the distribution.</p>
   * 		       <p>If you don't want to specify a comment, include an empty <code>Comment</code>
   * 			element.</p>
   * 		       <p>To delete an existing comment, update the distribution configuration and include an
   * 			empty <code>Comment</code> element.</p>
   * 		       <p>To add or change a comment, update the distribution configuration and specify the new
   * 			comment.</p>
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that controls the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>Whether CloudFront replaces HTTP status codes in the 4xx and 5xx range with custom error
   * 					messages before returning the response to the viewer.</p>
   * 			         </li>
   *             <li>
   * 				           <p>How long CloudFront caches HTTP status codes in the 4xx and 5xx range.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information about custom error pages, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/custom-error-pages.html">Customizing Error Responses</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  CustomErrorResponses?: CustomErrorResponses;

  /**
   * <p>A complex type that describes the default cache behavior if you don't specify a
   * 				<code>CacheBehavior</code> element or if files don't match any of the values of
   * 				<code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one
   * 			default cache behavior.</p>
   */
  DefaultCacheBehavior: DefaultCacheBehavior | undefined;

  /**
   * <p>The object that you want CloudFront to request from your origin (for example,
   * 				<code>index.html</code>) when a viewer requests the root URL for your distribution
   * 				(<code>http://www.example.com</code>) instead of an object in your distribution
   * 				(<code>http://www.example.com/product-description.html</code>). Specifying a default root
   * 			object avoids exposing the contents of your distribution.</p>
   * 		       <p>Specify only the object name, for example, <code>index.html</code>. Don't add a
   * 				<code>/</code> before the object name.</p>
   * 		       <p>If you don't want to specify a default root object when you create a distribution,
   * 			include an empty <code>DefaultRootObject</code> element.</p>
   * 		       <p>To delete the default root object from an existing distribution, update the
   * 			distribution configuration and include an empty <code>DefaultRootObject</code>
   * 			element.</p>
   * 		       <p>To replace the default root object, update the distribution configuration and specify
   * 			the new object.</p>
   * 		       <p>For more information about the default root object, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/DefaultRootObject.html">Creating a Default Root Object</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  DefaultRootObject?: string;

  /**
   * <p>From this field, you can enable or disable the selected distribution.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>(Optional) Specify the maximum HTTP version that you want viewers to use to communicate
   * 			with CloudFront. The default value for new web distributions is http2. Viewers that don't support
   * 			HTTP/2 automatically use an earlier HTTP version.</p>
   * 		       <p>For viewers and CloudFront to use HTTP/2, viewers must support TLS 1.2 or later, and must
   * 			support Server Name Identification (SNI).</p>
   * 		       <p>In general, configuring CloudFront to communicate with viewers using HTTP/2 reduces latency.
   * 			You can improve performance by optimizing for HTTP/2. For more information, do an Internet
   * 			search for "http/2 optimization." </p>
   */
  HttpVersion?: HttpVersion | string;

  /**
   * <p>If you want CloudFront to respond to IPv6 DNS requests with an IPv6 address for your
   * 			distribution, specify <code>true</code>. If you specify <code>false</code>, CloudFront responds to
   * 			IPv6 DNS requests with the DNS response code <code>NOERROR</code> and with no IP addresses.
   * 			This allows viewers to submit a second request, for an IPv4 address for your distribution. </p>
   * 		       <p>In general, you should enable IPv6 if you have users on IPv6 networks who want to
   * 			access your content. However, if you're using signed URLs or signed cookies to restrict access
   * 			to your content, and if you're using a custom policy that includes the <code>IpAddress</code>
   * 			parameter to restrict the IP addresses that can access your content, don't enable IPv6. If
   * 			you want to restrict access to some content by IP address and not restrict access to other
   * 			content (or restrict access but not by IP address), you can create two distributions. For more
   * 			information, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-creating-signed-url-custom-policy.html">Creating a Signed URL Using a Custom Policy</a> in the <i>Amazon CloudFront Developer
   * 				Guide</i>.</p>
   * 		       <p>If you're using an Amazon Route 53 alias resource record set to route traffic to your CloudFront
   * 			distribution, you need to create a second alias resource record set when both of the following
   * 			are true:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>You enable IPv6 for the distribution</p>
   * 			         </li>
   *             <li>
   * 				           <p>You're using alternate domain names in the URLs for your objects</p>
   * 			         </li>
   *          </ul>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html">Routing Traffic
   * 				to an Amazon CloudFront Web Distribution by Using Your Domain Name</a> in the <i>Amazon Route 53
   * 				Developer Guide</i>.</p>
   * 		       <p>If you created a CNAME resource record set, either with Amazon Route 53 or with another DNS
   * 			service, you don't need to make any changes. A CNAME record will route traffic to your
   * 			distribution regardless of the IP address format of the viewer request.</p>
   */
  IsIPV6Enabled?: boolean;

  /**
   * <p>A complex type that controls whether access logs are written for the
   * 			distribution.</p>
   * 		       <p>For more information about logging, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html">Access
   * 				Logs</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Logging?: LoggingConfig;

  /**
   * <p> A complex type that contains information about origin groups for this
   * 			distribution.</p>
   */
  OriginGroups?: OriginGroups;

  /**
   * <p>A complex type that contains information about origins for this distribution.
   * 		</p>
   */
  Origins: Origins | undefined;

  /**
   * <p>The price class that corresponds with the maximum price that you want to pay for CloudFront
   * 			service. If you specify <code>PriceClass_All</code>, CloudFront responds to requests for your
   * 			objects from all CloudFront edge locations.</p>
   * 		       <p>If you specify a price class other than <code>PriceClass_All</code>, CloudFront serves your
   * 			objects from the CloudFront edge location that has the lowest latency among the edge locations in
   * 			your price class. Viewers who are in or near regions that are excluded from your specified
   * 			price class may encounter slower performance.</p>
   * 		       <p>For more information about price classes, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PriceClass.html">Choosing the Price Class for a CloudFront Distribution</a> in the
   * 			<i>Amazon CloudFront Developer Guide</i>. For information about CloudFront pricing, including how price
   * 			classes (such as Price Class 100) map to CloudFront regions, see
   * 			<a href="http://aws.amazon.com/cloudfront/pricing/">Amazon CloudFront Pricing</a>.
   * 			For price class information, scroll down to see the table at the bottom of the page.</p>
   */
  PriceClass?: PriceClass | string;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your
   * 			content.</p>
   */
  Restrictions?: Restrictions;

  /**
   * <p>A complex type that specifies whether you want viewers to use HTTP or HTTPS to request your objects,
   * 			whether you're using an alternate domain name with HTTPS, and if so, if you're using AWS Certificate Manager (ACM)
   * 			or a third-party certificate authority.</p>
   */
  ViewerCertificate?: ViewerCertificate;

  /**
   * <p>A unique identifier that specifies the AWS WAF web ACL, if any, to associate
   * 			with this distribution. To specify a web ACL created using the latest version of AWS
   * 			WAF, use the ACL ARN, for example
   * 			<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
   * 			To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example
   * 			<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
   * 		       <p>AWS WAF is a web application firewall that lets you monitor the HTTP and HTTPS
   * 			requests that are forwarded to CloudFront, and lets you control access to your content. Based on
   * 			conditions that you specify, such as the IP addresses that requests originate from or the
   * 			values of query strings, CloudFront responds to requests either with the requested content or with
   * 			an HTTP 403 status code (Forbidden). You can also configure CloudFront to return a custom error page
   * 			when a request is blocked. For more information about AWS WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">AWS WAF
   * 				Developer Guide</a>. </p>
   */
  WebACLId?: string;
}

export namespace DistributionConfig {
  export function isa(o: any): o is DistributionConfig {
    return _smithy.isa(o, "DistributionConfig");
  }
}

/**
 * <p>A distribution Configuration and a list of tags to be associated with the
 * 			distribution.</p>
 */
export interface DistributionConfigWithTags {
  __type?: "DistributionConfigWithTags";
  /**
   * <p>A distribution configuration.</p>
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

export namespace DistributionConfigWithTags {
  export function isa(o: any): o is DistributionConfigWithTags {
    return _smithy.isa(o, "DistributionConfigWithTags");
  }
}

/**
 * <p>A distribution list.</p>
 */
export interface DistributionList {
  __type?: "DistributionList";
  /**
   * <p>A flag that indicates whether more distributions remain to be listed. If your results
   * 			were truncated, you can make a follow-up pagination request using the <code>Marker</code>
   * 			request parameter to retrieve more distributions in the list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>A complex type that contains one <code>DistributionSummary</code> element for each
   * 			distribution that was created by the current AWS account.</p>
   */
  Items?: Array<DistributionSummary>;

  /**
   * <p>The value you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker: string | undefined;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing your
   * 			distributions where they left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>The number of distributions that were created by the current AWS account. </p>
   */
  Quantity: number | undefined;
}

export namespace DistributionList {
  export function isa(o: any): o is DistributionList {
    return _smithy.isa(o, "DistributionList");
  }
}

/**
 * <p>A summary of the information about a CloudFront distribution.</p>
 */
export interface DistributionSummary {
  __type?: "DistributionSummary";
  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example:
   * 				<code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where
   * 				<code>123456789012</code> is your AWS account ID.</p>
   */
  ARN: string | undefined;

  /**
   * <p>AWS services in China customers must file for an Internet Content Provider (ICP) recordal if they want to serve content
   * 			publicly on an alternate domain name, also known as a CNAME, that they've added to CloudFront. AliasICPRecordal provides the ICP
   * 			recordal status for CNAMEs associated with distributions.</p>
   * 		       <p>For more information about ICP recordals, see  <a href="https://docs.amazonaws.cn/en_us/aws/latest/userguide/accounts-and-credentials.html">
   * 			Signup, Accounts, and Credentials</a> in <i>Getting Started with AWS services in China</i>.</p>
   */
  AliasICPRecordals?: Array<AliasICPRecordal>;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this distribution.</p>
   */
  Aliases: Aliases | undefined;

  /**
   * <p>A complex type that contains zero or more <code>CacheBehavior</code>
   * 			elements.</p>
   */
  CacheBehaviors: CacheBehaviors | undefined;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string | undefined;

  /**
   * <p>A complex type that contains zero or more <code>CustomErrorResponses</code>
   * 			elements.</p>
   */
  CustomErrorResponses: CustomErrorResponses | undefined;

  /**
   * <p>A complex type that describes the default cache behavior if you don't specify a
   * 				<code>CacheBehavior</code> element or if files don't match any of the values of
   * 				<code>PathPattern</code> in <code>CacheBehavior</code> elements. You must create exactly one
   * 			default cache behavior.</p>
   */
  DefaultCacheBehavior: DefaultCacheBehavior | undefined;

  /**
   * <p>The domain name that corresponds to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Whether the distribution is enabled to accept user requests for content.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p> Specify the maximum HTTP version that you want viewers to use to communicate with
   * 			CloudFront. The default value for new web distributions is <code>http2</code>. Viewers that don't
   * 			support <code>HTTP/2</code> will automatically use an earlier version.</p>
   */
  HttpVersion: HttpVersion | string | undefined;

  /**
   * <p>The identifier for the distribution. For example:
   * 			<code>EDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>Whether CloudFront responds to IPv6 DNS requests with an IPv6 address for your
   * 			distribution.</p>
   */
  IsIPV6Enabled: boolean | undefined;

  /**
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p> A complex type that contains information about origin groups for this
   * 			distribution.</p>
   */
  OriginGroups?: OriginGroups;

  /**
   * <p>A complex type that contains information about origins for this distribution.</p>
   */
  Origins: Origins | undefined;

  /**
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution. </p>
   */
  PriceClass: PriceClass | string | undefined;

  /**
   * <p>A complex type that identifies ways in which you want to restrict distribution of your
   * 			content.</p>
   */
  Restrictions: Restrictions | undefined;

  /**
   * <p>The current status of the distribution. When the status is <code>Deployed</code>, the
   * 			distribution's information is propagated to all CloudFront edge locations.</p>
   */
  Status: string | undefined;

  /**
   * <p>A complex type that specifies whether you want viewers to use HTTP or HTTPS to request your objects,
   * 				whether you're using an alternate domain name with HTTPS, and if so, if you're using AWS Certificate Manager (ACM)
   * 				or a third-party certificate authority.</p>
   */
  ViewerCertificate: ViewerCertificate | undefined;

  /**
   * <p>The Web ACL Id (if any) associated with the distribution.</p>
   */
  WebACLId: string | undefined;
}

export namespace DistributionSummary {
  export function isa(o: any): o is DistributionSummary {
    return _smithy.isa(o, "DistributionSummary");
  }
}

/**
 * <p>Complex data type for field-level encryption profiles that includes all of the encryption entities. </p>
 */
export interface EncryptionEntities {
  __type?: "EncryptionEntities";
  /**
   * <p>An array of field patterns in a field-level encryption content type-profile mapping. </p>
   */
  Items?: Array<EncryptionEntity>;

  /**
   * <p>Number of field pattern items in a field-level encryption content type-profile mapping. </p>
   */
  Quantity: number | undefined;
}

export namespace EncryptionEntities {
  export function isa(o: any): o is EncryptionEntities {
    return _smithy.isa(o, "EncryptionEntities");
  }
}

/**
 * <p>Complex data type for field-level encryption profiles that includes the encryption key and field pattern specifications. </p>
 */
export interface EncryptionEntity {
  __type?: "EncryptionEntity";
  /**
   * <p>Field patterns in a field-level encryption content type profile specify the fields that you want to be encrypted. You can provide the
   * 			full field name, or any beginning characters followed by a wildcard (*). You can't overlap field patterns. For example, you can't have
   * 			both ABC* and AB*. Note that field patterns are case-sensitive. </p>
   */
  FieldPatterns: FieldPatterns | undefined;

  /**
   * <p>The provider associated with the public key being used for encryption. This value must also be provided with the private key
   * 		for applications to be able to decrypt data.</p>
   */
  ProviderId: string | undefined;

  /**
   * <p>The public key associated with a set of field-level encryption patterns, to be used when encrypting the fields that match
   * 			the patterns. </p>
   */
  PublicKeyId: string | undefined;
}

export namespace EncryptionEntity {
  export function isa(o: any): o is EncryptionEntity {
    return _smithy.isa(o, "EncryptionEntity");
  }
}

export type EventType =
  | "origin-request"
  | "origin-response"
  | "viewer-request"
  | "viewer-response";

/**
 * <p>A complex data type that includes the profile configurations and other options specified for field-level encryption. </p>
 */
export interface FieldLevelEncryption {
  __type?: "FieldLevelEncryption";
  /**
   * <p>A complex data type that includes the profile configurations specified for field-level encryption. </p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;

  /**
   * <p>The configuration ID for a field-level encryption configuration which includes a set of profiles that specify certain
   * 		selected data fields to be encrypted by specific public keys.</p>
   */
  Id: string | undefined;

  /**
   * <p>The last time the field-level encryption configuration was changed. </p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace FieldLevelEncryption {
  export function isa(o: any): o is FieldLevelEncryption {
    return _smithy.isa(o, "FieldLevelEncryption");
  }
}

/**
 * <p>A complex data type that includes the profile configurations specified for field-level encryption. </p>
 */
export interface FieldLevelEncryptionConfig {
  __type?: "FieldLevelEncryptionConfig";
  /**
   * <p>A unique number that ensures the request can't be replayed.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>An optional comment about the configuration.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type that specifies when to forward content if a content type isn't recognized and profiles to use as by default
   * 			in a request if a query argument doesn't specify a profile to use.</p>
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig;

  /**
   * <p>A complex data type that specifies when to forward content if a profile isn't found and the profile that can be provided as a
   * 			query argument in a request.</p>
   */
  QueryArgProfileConfig?: QueryArgProfileConfig;
}

export namespace FieldLevelEncryptionConfig {
  export function isa(o: any): o is FieldLevelEncryptionConfig {
    return _smithy.isa(o, "FieldLevelEncryptionConfig");
  }
}

/**
 * <p>List of field-level encrpytion configurations.</p>
 */
export interface FieldLevelEncryptionList {
  __type?: "FieldLevelEncryptionList";
  /**
   * <p>An array of field-level encryption items.</p>
   */
  Items?: Array<FieldLevelEncryptionSummary>;

  /**
   * <p>The maximum number of elements you want in the response body. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>If there are more elements to be listed, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue
   * 			listing your configurations where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The number of field-level encryption items.</p>
   */
  Quantity: number | undefined;
}

export namespace FieldLevelEncryptionList {
  export function isa(o: any): o is FieldLevelEncryptionList {
    return _smithy.isa(o, "FieldLevelEncryptionList");
  }
}

/**
 * <p>A complex data type for field-level encryption profiles.</p>
 */
export interface FieldLevelEncryptionProfile {
  __type?: "FieldLevelEncryptionProfile";
  /**
   * <p>A complex data type that includes the profile name and the encryption entities for the field-level encryption profile.</p>
   */
  FieldLevelEncryptionProfileConfig:
    | FieldLevelEncryptionProfileConfig
    | undefined;

  /**
   * <p>The ID for a field-level encryption profile configuration which includes a set of profiles that specify certain
   * 			selected data fields to be encrypted by specific public keys.</p>
   */
  Id: string | undefined;

  /**
   * <p>The last time the field-level encryption profile was updated.</p>
   */
  LastModifiedTime: Date | undefined;
}

export namespace FieldLevelEncryptionProfile {
  export function isa(o: any): o is FieldLevelEncryptionProfile {
    return _smithy.isa(o, "FieldLevelEncryptionProfile");
  }
}

/**
 * <p>A complex data type of profiles for the field-level encryption.</p>
 */
export interface FieldLevelEncryptionProfileConfig {
  __type?: "FieldLevelEncryptionProfileConfig";
  /**
   * <p>A unique number that ensures that the request can't be replayed.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>An optional comment for the field-level encryption profile.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and
   * 			field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: EncryptionEntities | undefined;

  /**
   * <p>Profile name for the field-level encryption profile.</p>
   */
  Name: string | undefined;
}

export namespace FieldLevelEncryptionProfileConfig {
  export function isa(o: any): o is FieldLevelEncryptionProfileConfig {
    return _smithy.isa(o, "FieldLevelEncryptionProfileConfig");
  }
}

/**
 * <p>List of field-level encryption profiles.</p>
 */
export interface FieldLevelEncryptionProfileList {
  __type?: "FieldLevelEncryptionProfileList";
  /**
   * <p>The field-level encryption profile items.</p>
   */
  Items?: Array<FieldLevelEncryptionProfileSummary>;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>If there are more elements to be listed, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue
   * 			listing your profiles where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The number of field-level encryption profiles.</p>
   */
  Quantity: number | undefined;
}

export namespace FieldLevelEncryptionProfileList {
  export function isa(o: any): o is FieldLevelEncryptionProfileList {
    return _smithy.isa(o, "FieldLevelEncryptionProfileList");
  }
}

/**
 * <p>The field-level encryption profile summary.</p>
 */
export interface FieldLevelEncryptionProfileSummary {
  __type?: "FieldLevelEncryptionProfileSummary";
  /**
   * <p>An optional comment for the field-level encryption profile summary.</p>
   */
  Comment?: string;

  /**
   * <p>A complex data type of encryption entities for the field-level encryption profile that include the public key ID, provider, and
   * 			field patterns for specifying which fields to encrypt with this key.</p>
   */
  EncryptionEntities: EncryptionEntities | undefined;

  /**
   * <p>ID for the field-level encryption profile summary.</p>
   */
  Id: string | undefined;

  /**
   * <p>The time when the the field-level encryption profile summary was last updated.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>Name for the field-level encryption profile summary.</p>
   */
  Name: string | undefined;
}

export namespace FieldLevelEncryptionProfileSummary {
  export function isa(o: any): o is FieldLevelEncryptionProfileSummary {
    return _smithy.isa(o, "FieldLevelEncryptionProfileSummary");
  }
}

/**
 * <p>A summary of a field-level encryption item.</p>
 */
export interface FieldLevelEncryptionSummary {
  __type?: "FieldLevelEncryptionSummary";
  /**
   * <p>An optional comment about the field-level encryption item.</p>
   */
  Comment?: string;

  /**
   * <p>
   * 			A summary of a content type-profile mapping.
   * 		</p>
   */
  ContentTypeProfileConfig?: ContentTypeProfileConfig;

  /**
   * <p>The unique ID of a field-level encryption item.</p>
   */
  Id: string | undefined;

  /**
   * <p>The last time that the summary of field-level encryption items was modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>
   * 			A summary of a query argument-profile mapping.
   * 		</p>
   */
  QueryArgProfileConfig?: QueryArgProfileConfig;
}

export namespace FieldLevelEncryptionSummary {
  export function isa(o: any): o is FieldLevelEncryptionSummary {
    return _smithy.isa(o, "FieldLevelEncryptionSummary");
  }
}

/**
 * <p>A complex data type that includes the field patterns to match for field-level encryption.</p>
 */
export interface FieldPatterns {
  __type?: "FieldPatterns";
  /**
   * <p>An array of the field-level encryption field patterns.</p>
   */
  Items?: Array<string>;

  /**
   * <p>The number of field-level encryption field patterns.</p>
   */
  Quantity: number | undefined;
}

export namespace FieldPatterns {
  export function isa(o: any): o is FieldPatterns {
    return _smithy.isa(o, "FieldPatterns");
  }
}

export type Format = "URLEncoded";

/**
 * <p>A complex type that specifies how CloudFront handles query strings, cookies, and HTTP headers.</p>
 */
export interface ForwardedValues {
  __type?: "ForwardedValues";
  /**
   * <p>A complex type that specifies whether you want CloudFront to forward cookies to the origin
   * 			and, if so, which ones. For more information about forwarding cookies to the origin, see
   * 				<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Cookies.html">How CloudFront Forwards, Caches, and Logs Cookies</a> in
   * 			the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Cookies: CookiePreference | undefined;

  /**
   * <p>A complex type that specifies the <code>Headers</code>, if any, that you want CloudFront to forward to the
   * 			origin for this cache behavior (whitelisted headers). For the headers that you specify, CloudFront also caches
   * 			separate versions of a specified object that is based on the header values in viewer requests.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">
   * 			Caching Content Based on Request Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Headers?: Headers;

  /**
   * <p>Indicates whether you want CloudFront to forward query strings to the origin that is
   * 			associated with this cache behavior and cache based on the query string parameters. CloudFront
   * 			behavior depends on the value of <code>QueryString</code> and on the values that you specify
   * 			for <code>QueryStringCacheKeys</code>, if any:</p>
   * 		       <p>If you specify true for <code>QueryString</code> and you don't specify any values for
   * 				<code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin
   * 			and caches based on all query string parameters. Depending on how many query string parameters
   * 			and values you have, this can adversely affect performance because CloudFront must forward more
   * 			requests to the origin.</p>
   * 		       <p>If you specify true for <code>QueryString</code> and you specify one or more values for
   * 				<code>QueryStringCacheKeys</code>, CloudFront forwards all query string parameters to the origin,
   * 			but it only caches based on the query string parameters that you specify.</p>
   * 		       <p>If you specify false for <code>QueryString</code>, CloudFront doesn't forward any query
   * 			string parameters to the origin, and doesn't cache based on query string parameters.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/QueryStringParameters.html">Configuring CloudFront to Cache Based on Query String Parameters</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  QueryString: boolean | undefined;

  /**
   * <p>A complex type that contains information about the query string parameters that you
   * 			want CloudFront to use for caching for this cache behavior.</p>
   */
  QueryStringCacheKeys?: QueryStringCacheKeys;
}

export namespace ForwardedValues {
  export function isa(o: any): o is ForwardedValues {
    return _smithy.isa(o, "ForwardedValues");
  }
}

/**
 * <p>A complex type that controls the countries in which your content is distributed. CloudFront
 * 			determines the location of your users using <code>MaxMind</code> GeoIP databases. </p>
 */
export interface GeoRestriction {
  __type?: "GeoRestriction";
  /**
   * <p> A complex type that contains a <code>Location</code> element for each country in which
   * 			you want CloudFront either to distribute your content (<code>whitelist</code>) or not distribute
   * 			your content (<code>blacklist</code>).</p>
   * 		       <p>The <code>Location</code> element is a two-letter, uppercase country code for a country
   * 			that you want to include in your <code>blacklist</code> or <code>whitelist</code>. Include one
   * 				<code>Location</code> element for each country.</p>
   * 		       <p>CloudFront and <code>MaxMind</code> both use <code>ISO 3166</code> country codes. For the
   * 			current list of countries and the corresponding codes, see <code>ISO 3166-1-alpha-2</code>
   * 			code on the <i>International Organization for Standardization</i> website. You
   * 			can also refer to the country list on the CloudFront console, which includes both country names and
   * 			codes.</p>
   */
  Items?: Array<string>;

  /**
   * <p>When geo restriction is <code>enabled</code>, this is the number of countries in your
   * 				<code>whitelist</code> or <code>blacklist</code>. Otherwise, when it is not enabled,
   * 				<code>Quantity</code> is <code>0</code>, and you can omit <code>Items</code>.</p>
   */
  Quantity: number | undefined;

  /**
   * <p>The method that you want to use to restrict distribution of your content by
   * 			country:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>none</code>: No geo restriction is enabled, meaning access to content is not
   * 					restricted by client geo location.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>blacklist</code>: The <code>Location</code> elements specify the countries in
   * 					which you don't want CloudFront to distribute your content.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>whitelist</code>: The <code>Location</code> elements specify the countries in
   * 					which you want CloudFront to distribute your content.</p>
   * 			         </li>
   *          </ul>
   */
  RestrictionType: GeoRestrictionType | string | undefined;
}

export namespace GeoRestriction {
  export function isa(o: any): o is GeoRestriction {
    return _smithy.isa(o, "GeoRestriction");
  }
}

export type GeoRestrictionType = "blacklist" | "none" | "whitelist";

/**
 * <p>The origin access identity's configuration information. For more information, see
 * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_CloudFrontOriginAccessIdentityConfig.html">CloudFrontOriginAccessIdentityConfig</a>.</p>
 */
export interface GetCloudFrontOriginAccessIdentityConfigRequest {
  __type?: "GetCloudFrontOriginAccessIdentityConfigRequest";
  /**
   * <p>The identity's ID. </p>
   */
  Id: string | undefined;
}

export namespace GetCloudFrontOriginAccessIdentityConfigRequest {
  export function isa(
    o: any
  ): o is GetCloudFrontOriginAccessIdentityConfigRequest {
    return _smithy.isa(o, "GetCloudFrontOriginAccessIdentityConfigRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetCloudFrontOriginAccessIdentityConfigResult
  extends $MetadataBearer {
  __type?: "GetCloudFrontOriginAccessIdentityConfigResult";
  /**
   * <p>The origin access identity's configuration information. </p>
   */
  CloudFrontOriginAccessIdentityConfig?: CloudFrontOriginAccessIdentityConfig;

  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetCloudFrontOriginAccessIdentityConfigResult {
  export function isa(
    o: any
  ): o is GetCloudFrontOriginAccessIdentityConfigResult {
    return _smithy.isa(o, "GetCloudFrontOriginAccessIdentityConfigResult");
  }
}

/**
 * <p>The request to get an origin access identity's information.</p>
 */
export interface GetCloudFrontOriginAccessIdentityRequest {
  __type?: "GetCloudFrontOriginAccessIdentityRequest";
  /**
   * <p>The identity's ID.</p>
   */
  Id: string | undefined;
}

export namespace GetCloudFrontOriginAccessIdentityRequest {
  export function isa(o: any): o is GetCloudFrontOriginAccessIdentityRequest {
    return _smithy.isa(o, "GetCloudFrontOriginAccessIdentityRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetCloudFrontOriginAccessIdentityResult
  extends $MetadataBearer {
  __type?: "GetCloudFrontOriginAccessIdentityResult";
  /**
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * <p>The current version of the origin access identity's information. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetCloudFrontOriginAccessIdentityResult {
  export function isa(o: any): o is GetCloudFrontOriginAccessIdentityResult {
    return _smithy.isa(o, "GetCloudFrontOriginAccessIdentityResult");
  }
}

/**
 * <p>The request to get a distribution configuration.</p>
 */
export interface GetDistributionConfigRequest {
  __type?: "GetDistributionConfigRequest";
  /**
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is returned.</p>
   */
  Id: string | undefined;
}

export namespace GetDistributionConfigRequest {
  export function isa(o: any): o is GetDistributionConfigRequest {
    return _smithy.isa(o, "GetDistributionConfigRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetDistributionConfigResult extends $MetadataBearer {
  __type?: "GetDistributionConfigResult";
  /**
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfig?: DistributionConfig;

  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetDistributionConfigResult {
  export function isa(o: any): o is GetDistributionConfigResult {
    return _smithy.isa(o, "GetDistributionConfigResult");
  }
}

/**
 * <p>The request to get a distribution's information.</p>
 */
export interface GetDistributionRequest {
  __type?: "GetDistributionRequest";
  /**
   * <p>The distribution's ID. If the ID is empty, an empty distribution configuration is returned.</p>
   */
  Id: string | undefined;
}

export namespace GetDistributionRequest {
  export function isa(o: any): o is GetDistributionRequest {
    return _smithy.isa(o, "GetDistributionRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetDistributionResult extends $MetadataBearer {
  __type?: "GetDistributionResult";
  /**
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;

  /**
   * <p>The current version of the distribution's information. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace GetDistributionResult {
  export function isa(o: any): o is GetDistributionResult {
    return _smithy.isa(o, "GetDistributionResult");
  }
}

export interface GetFieldLevelEncryptionConfigRequest {
  __type?: "GetFieldLevelEncryptionConfigRequest";
  /**
   * <p>Request the ID for the field-level encryption configuration information.</p>
   */
  Id: string | undefined;
}

export namespace GetFieldLevelEncryptionConfigRequest {
  export function isa(o: any): o is GetFieldLevelEncryptionConfigRequest {
    return _smithy.isa(o, "GetFieldLevelEncryptionConfigRequest");
  }
}

export interface GetFieldLevelEncryptionConfigResult extends $MetadataBearer {
  __type?: "GetFieldLevelEncryptionConfigResult";
  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the field-level encryption configuration information.</p>
   */
  FieldLevelEncryptionConfig?: FieldLevelEncryptionConfig;
}

export namespace GetFieldLevelEncryptionConfigResult {
  export function isa(o: any): o is GetFieldLevelEncryptionConfigResult {
    return _smithy.isa(o, "GetFieldLevelEncryptionConfigResult");
  }
}

export interface GetFieldLevelEncryptionProfileConfigRequest {
  __type?: "GetFieldLevelEncryptionProfileConfigRequest";
  /**
   * <p>Get the ID for the field-level encryption profile configuration information.</p>
   */
  Id: string | undefined;
}

export namespace GetFieldLevelEncryptionProfileConfigRequest {
  export function isa(
    o: any
  ): o is GetFieldLevelEncryptionProfileConfigRequest {
    return _smithy.isa(o, "GetFieldLevelEncryptionProfileConfigRequest");
  }
}

export interface GetFieldLevelEncryptionProfileConfigResult
  extends $MetadataBearer {
  __type?: "GetFieldLevelEncryptionProfileConfigResult";
  /**
   * <p>The current version of the field-level encryption profile configuration result. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the field-level encryption profile configuration information.</p>
   */
  FieldLevelEncryptionProfileConfig?: FieldLevelEncryptionProfileConfig;
}

export namespace GetFieldLevelEncryptionProfileConfigResult {
  export function isa(o: any): o is GetFieldLevelEncryptionProfileConfigResult {
    return _smithy.isa(o, "GetFieldLevelEncryptionProfileConfigResult");
  }
}

export interface GetFieldLevelEncryptionProfileRequest {
  __type?: "GetFieldLevelEncryptionProfileRequest";
  /**
   * <p>Get the ID for the field-level encryption profile information.</p>
   */
  Id: string | undefined;
}

export namespace GetFieldLevelEncryptionProfileRequest {
  export function isa(o: any): o is GetFieldLevelEncryptionProfileRequest {
    return _smithy.isa(o, "GetFieldLevelEncryptionProfileRequest");
  }
}

export interface GetFieldLevelEncryptionProfileResult extends $MetadataBearer {
  __type?: "GetFieldLevelEncryptionProfileResult";
  /**
   * <p>The current version of the field level encryption profile. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the field-level encryption profile information.</p>
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
}

export namespace GetFieldLevelEncryptionProfileResult {
  export function isa(o: any): o is GetFieldLevelEncryptionProfileResult {
    return _smithy.isa(o, "GetFieldLevelEncryptionProfileResult");
  }
}

export interface GetFieldLevelEncryptionRequest {
  __type?: "GetFieldLevelEncryptionRequest";
  /**
   * <p>Request the ID for the field-level encryption configuration information.</p>
   */
  Id: string | undefined;
}

export namespace GetFieldLevelEncryptionRequest {
  export function isa(o: any): o is GetFieldLevelEncryptionRequest {
    return _smithy.isa(o, "GetFieldLevelEncryptionRequest");
  }
}

export interface GetFieldLevelEncryptionResult extends $MetadataBearer {
  __type?: "GetFieldLevelEncryptionResult";
  /**
   * <p>The current version of the field level encryption configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the field-level encryption configuration information.</p>
   */
  FieldLevelEncryption?: FieldLevelEncryption;
}

export namespace GetFieldLevelEncryptionResult {
  export function isa(o: any): o is GetFieldLevelEncryptionResult {
    return _smithy.isa(o, "GetFieldLevelEncryptionResult");
  }
}

/**
 * <p>The request to get an invalidation's information. </p>
 */
export interface GetInvalidationRequest {
  __type?: "GetInvalidationRequest";
  /**
   * <p>The distribution's ID.</p>
   */
  DistributionId: string | undefined;

  /**
   * <p>The identifier for the invalidation request, for example,
   * 			<code>IDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;
}

export namespace GetInvalidationRequest {
  export function isa(o: any): o is GetInvalidationRequest {
    return _smithy.isa(o, "GetInvalidationRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetInvalidationResult extends $MetadataBearer {
  __type?: "GetInvalidationResult";
  /**
   * <p>The invalidation's information. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/InvalidationDatatype.html">Invalidation Complex Type</a>. </p>
   */
  Invalidation?: Invalidation;
}

export namespace GetInvalidationResult {
  export function isa(o: any): o is GetInvalidationResult {
    return _smithy.isa(o, "GetInvalidationResult");
  }
}

export interface GetPublicKeyConfigRequest {
  __type?: "GetPublicKeyConfigRequest";
  /**
   * <p>Request the ID for the public key configuration.</p>
   */
  Id: string | undefined;
}

export namespace GetPublicKeyConfigRequest {
  export function isa(o: any): o is GetPublicKeyConfigRequest {
    return _smithy.isa(o, "GetPublicKeyConfigRequest");
  }
}

export interface GetPublicKeyConfigResult extends $MetadataBearer {
  __type?: "GetPublicKeyConfigResult";
  /**
   * <p>The current version of the public key configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the result for the public key configuration.</p>
   */
  PublicKeyConfig?: PublicKeyConfig;
}

export namespace GetPublicKeyConfigResult {
  export function isa(o: any): o is GetPublicKeyConfigResult {
    return _smithy.isa(o, "GetPublicKeyConfigResult");
  }
}

export interface GetPublicKeyRequest {
  __type?: "GetPublicKeyRequest";
  /**
   * <p>Request the ID for the public key.</p>
   */
  Id: string | undefined;
}

export namespace GetPublicKeyRequest {
  export function isa(o: any): o is GetPublicKeyRequest {
    return _smithy.isa(o, "GetPublicKeyRequest");
  }
}

export interface GetPublicKeyResult extends $MetadataBearer {
  __type?: "GetPublicKeyResult";
  /**
   * <p>The current version of the public key. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the public key.</p>
   */
  PublicKey?: PublicKey;
}

export namespace GetPublicKeyResult {
  export function isa(o: any): o is GetPublicKeyResult {
    return _smithy.isa(o, "GetPublicKeyResult");
  }
}

/**
 * <p>To request to get a streaming distribution configuration.</p>
 */
export interface GetStreamingDistributionConfigRequest {
  __type?: "GetStreamingDistributionConfigRequest";
  /**
   * <p>The streaming distribution's ID.</p>
   */
  Id: string | undefined;
}

export namespace GetStreamingDistributionConfigRequest {
  export function isa(o: any): o is GetStreamingDistributionConfigRequest {
    return _smithy.isa(o, "GetStreamingDistributionConfigRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetStreamingDistributionConfigResult extends $MetadataBearer {
  __type?: "GetStreamingDistributionConfigResult";
  /**
   * <p>The current version of the configuration. For example: <code>E2QWRUHAPOMQZL</code>.
   * 		</p>
   */
  ETag?: string;

  /**
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig?: StreamingDistributionConfig;
}

export namespace GetStreamingDistributionConfigResult {
  export function isa(o: any): o is GetStreamingDistributionConfigResult {
    return _smithy.isa(o, "GetStreamingDistributionConfigResult");
  }
}

/**
 * <p>The request to get a streaming distribution's information.</p>
 */
export interface GetStreamingDistributionRequest {
  __type?: "GetStreamingDistributionRequest";
  /**
   * <p>The streaming distribution's ID.</p>
   */
  Id: string | undefined;
}

export namespace GetStreamingDistributionRequest {
  export function isa(o: any): o is GetStreamingDistributionRequest {
    return _smithy.isa(o, "GetStreamingDistributionRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface GetStreamingDistributionResult extends $MetadataBearer {
  __type?: "GetStreamingDistributionResult";
  /**
   * <p>The current version of the streaming distribution's information. For example:
   * 				<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;
}

export namespace GetStreamingDistributionResult {
  export function isa(o: any): o is GetStreamingDistributionResult {
    return _smithy.isa(o, "GetStreamingDistributionResult");
  }
}

/**
 * <p>A complex type that specifies the request headers, if any, that you want CloudFront to base caching on for this cache behavior. </p>
 * 		       <p>For the headers that you specify, CloudFront caches separate versions of a specified object based on the header values in viewer requests.
 * 			For example, suppose viewer requests for <code>logo.jpg</code> contain a custom <code>product</code> header that has a value of
 * 			either <code>acme</code> or <code>apex</code>, and you configure CloudFront to cache your content based on values in the <code>product</code> header.
 * 			CloudFront forwards the <code>product</code> header to the origin and caches the response from the origin once for each header value. For
 * 			more information about caching based on header values, see
 * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/header-caching.html">How CloudFront Forwards and Caches Headers</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface Headers {
  __type?: "Headers";
  /**
   * <p>A list that contains one <code>Name</code> element for each header that you want CloudFront to use for caching
   * 			in this cache behavior. If <code>Quantity</code> is <code>0</code>, omit <code>Items</code>.</p>
   */
  Items?: Array<string>;

  /**
   * <p>The number of different headers that you want CloudFront to base caching on for this cache behavior. You can configure each
   * 			cache behavior in a web distribution to do one of the following:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <b>Forward all headers to your origin</b>: Specify <code>1</code> for <code>Quantity</code> and
   * 					<code>*</code> for <code>Name</code>.</p>
   * 				           <important>
   * 					             <p>CloudFront doesn't cache the objects that are associated with this cache behavior. Instead, CloudFront sends every request
   * 						to the origin. </p>
   * 				           </important>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Forward a whitelist of headers you specify</b>: Specify the number of headers that you want
   * 					CloudFront to base caching on. Then specify the header names in <code>Name</code> elements. CloudFront caches your objects based on the values
   * 					in the specified headers.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <b>Forward only the default headers</b>: Specify <code>0</code> for <code>Quantity</code> and
   * 					omit <code>Items</code>. In this configuration, CloudFront doesn't cache based on the values in the request headers.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>Regardless of which option you choose, CloudFront forwards headers to your origin based on whether the origin is an S3 bucket or a
   * 			custom origin. See the following documentation:</p>
   * 			      <ul>
   *             <li>
   *                <p>
   *                   <b>S3 bucket</b>: See
   * 					<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorS3Origin.html#request-s3-removed-headers">HTTP Request Headers That CloudFront Removes or Updates</a>
   * 					          </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Custom origin</b>: See
   * 					<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/RequestAndResponseBehaviorCustomOrigin.html#request-custom-headers-behavior">HTTP Request Headers and CloudFront Behavior</a>
   * 					          </p>
   *             </li>
   *          </ul>
   */
  Quantity: number | undefined;
}

export namespace Headers {
  export function isa(o: any): o is Headers {
    return _smithy.isa(o, "Headers");
  }
}

export type HttpVersion = "http1.1" | "http2";

export type ICPRecordalStatus = "APPROVED" | "PENDING" | "SUSPENDED";

/**
 * <p>An invalidation. </p>
 */
export interface Invalidation {
  __type?: "Invalidation";
  /**
   * <p>The date and time the invalidation request was first made. </p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The identifier for the invalidation request. For example:
   * 			<code>IDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The current invalidation information for the batch request. </p>
   */
  InvalidationBatch: InvalidationBatch | undefined;

  /**
   * <p>The status of the invalidation request. When the invalidation batch is finished, the
   * 			status is <code>Completed</code>.</p>
   */
  Status: string | undefined;
}

export namespace Invalidation {
  export function isa(o: any): o is Invalidation {
    return _smithy.isa(o, "Invalidation");
  }
}

/**
 * <p>An invalidation batch.</p>
 */
export interface InvalidationBatch {
  __type?: "InvalidationBatch";
  /**
   * <p>A value that you specify to uniquely identify an invalidation request. CloudFront uses the
   * 			value to prevent you from accidentally resubmitting an identical request. Whenever you create
   * 			a new invalidation request, you must specify a new value for <code>CallerReference</code> and
   * 			change other values in the request as applicable. One way to ensure that the value of
   * 				<code>CallerReference</code> is unique is to use a <code>timestamp</code>, for example,
   * 				<code>20120301090000</code>.</p>
   * 		       <p>If you make a second invalidation request with the same value for
   * 				<code>CallerReference</code>, and if the rest of the request is the same, CloudFront doesn't
   * 			create a new invalidation request. Instead, CloudFront returns information about the invalidation
   * 			request that you previously created with the same <code>CallerReference</code>.</p>
   * 		       <p>If <code>CallerReference</code> is a value you already sent in a previous invalidation
   * 			batch request but the content of any <code>Path</code> is different from the original request,
   * 			CloudFront returns an <code>InvalidationBatchAlreadyExists</code> error.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>A complex type that contains information about the objects that you want to invalidate.
   * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects
   * 				to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  Paths: Paths | undefined;
}

export namespace InvalidationBatch {
  export function isa(o: any): o is InvalidationBatch {
    return _smithy.isa(o, "InvalidationBatch");
  }
}

/**
 * <p>The <code>InvalidationList</code> complex type describes the list of invalidation
 * 			objects. For more information about invalidation, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">Invalidating Objects (Web Distributions Only)</a> in
 * 			the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface InvalidationList {
  __type?: "InvalidationList";
  /**
   * <p>A flag that indicates whether more invalidation batch requests remain to be listed. If
   * 			your results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more invalidation batches in the
   * 			list.</p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>A complex type that contains one <code>InvalidationSummary</code> element for each
   * 			invalidation batch created by the current AWS account.</p>
   */
  Items?: Array<InvalidationSummary>;

  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker: string | undefined;

  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems: number | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue listing
   * 			your invalidation batches where they left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The number of invalidation batches that were created by the current AWS account.
   * 		</p>
   */
  Quantity: number | undefined;
}

export namespace InvalidationList {
  export function isa(o: any): o is InvalidationList {
    return _smithy.isa(o, "InvalidationList");
  }
}

/**
 * <p>A summary of an invalidation request.</p>
 */
export interface InvalidationSummary {
  __type?: "InvalidationSummary";
  /**
   * <p>The time that an invalidation request was created.</p>
   */
  CreateTime: Date | undefined;

  /**
   * <p>The unique ID for an invalidation request.</p>
   */
  Id: string | undefined;

  /**
   * <p>The status of an invalidation request.</p>
   */
  Status: string | undefined;
}

export namespace InvalidationSummary {
  export function isa(o: any): o is InvalidationSummary {
    return _smithy.isa(o, "InvalidationSummary");
  }
}

export type ItemSelection = "all" | "none" | "whitelist";

/**
 * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>. </p>
 * 		       <p>For more information, see
 * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p>
 */
export interface KeyPairIds {
  __type?: "KeyPairIds";
  /**
   * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>.</p>
   * 		       <p>For more information, see
   * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p>
   */
  Items?: Array<string>;

  /**
   * <p>The number of active CloudFront key pairs for <code>AwsAccountNumber</code>.</p>
   * 		       <p>For more information, see
   * 			<a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ActiveTrustedSigners.html">ActiveTrustedSigners</a>.</p>
   */
  Quantity: number | undefined;
}

export namespace KeyPairIds {
  export function isa(o: any): o is KeyPairIds {
    return _smithy.isa(o, "KeyPairIds");
  }
}

/**
 * <p>A complex type that contains a Lambda function association.</p>
 */
export interface LambdaFunctionAssociation {
  __type?: "LambdaFunctionAssociation";
  /**
   * <p>Specifies the event type that triggers a Lambda function invocation. You can specify the following values:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>viewer-request</code>: The function executes when CloudFront receives a request from a viewer
   * 				and before it checks to see whether the requested object is in the edge cache. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin-request</code>: The function executes only when CloudFront forwards a request to your origin.
   * 				When the requested object is in the edge cache, the function doesn't execute.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>origin-response</code>: The function executes after CloudFront receives a response from the origin and
   * 				before it caches the object in the response. When the requested object is in the edge cache, the function doesn't execute.</p>
   * 			         </li>
   *             <li>
   *                <p>
   *                   <code>viewer-response</code>: The function executes before CloudFront returns the requested object to the viewer.
   * 				The function executes regardless of whether the object was already in the edge cache.</p>
   * 				           <p>If the origin returns an HTTP status code other than HTTP 200 (OK), the function doesn't execute.</p>
   * 			         </li>
   *          </ul>
   */
  EventType: EventType | string | undefined;

  /**
   * <p>A flag that allows a Lambda function to have read access to the body content. For more information,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-include-body-access.html">Accessing the Request Body by Choosing the
   * 				Include Body Option</a> in the Amazon CloudFront Developer Guide.</p>
   */
  IncludeBody?: boolean;

  /**
   * <p>The ARN of the Lambda function. You must specify the ARN of a function version; you can't specify a Lambda alias
   * 			or $LATEST.</p>
   */
  LambdaFunctionARN: string | undefined;
}

export namespace LambdaFunctionAssociation {
  export function isa(o: any): o is LambdaFunctionAssociation {
    return _smithy.isa(o, "LambdaFunctionAssociation");
  }
}

/**
 * <p>A complex type that specifies a list of Lambda functions associations for a cache
 * 			behavior.</p>
 *
 * 		       <p>If you want to invoke one or more Lambda functions triggered by requests that match the
 * 				<code>PathPattern</code> of the cache behavior, specify the applicable values for
 * 				<code>Quantity</code> and <code>Items</code>. Note that there can be up to 4
 * 				<code>LambdaFunctionAssociation</code> items in this list (one for each possible value of
 * 				<code>EventType</code>) and each <code>EventType</code> can be associated with the Lambda
 * 			function only once.</p>
 *
 * 		       <p>If you don't want to invoke any Lambda functions for the requests that match
 * 				<code>PathPattern</code>, specify <code>0</code> for <code>Quantity</code> and omit
 * 				<code>Items</code>. </p>
 */
export interface LambdaFunctionAssociations {
  __type?: "LambdaFunctionAssociations";
  /**
   * <p>
   *             <b>Optional</b>: A complex type that contains <code>LambdaFunctionAssociation</code> items
   * 			for this cache behavior. If <code>Quantity</code> is <code>0</code>, you can omit <code>Items</code>.</p>
   */
  Items?: Array<LambdaFunctionAssociation>;

  /**
   * <p>The number of Lambda function associations for this cache behavior.</p>
   */
  Quantity: number | undefined;
}

export namespace LambdaFunctionAssociations {
  export function isa(o: any): o is LambdaFunctionAssociations {
    return _smithy.isa(o, "LambdaFunctionAssociations");
  }
}

/**
 * <p>The request to list origin access identities. </p>
 */
export interface ListCloudFrontOriginAccessIdentitiesRequest {
  __type?: "ListCloudFrontOriginAccessIdentitiesRequest";
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of origin
   * 			access identities. The results include identities in the list that occur after the marker. To
   * 			get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of the last
   * 			identity on that page).</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of origin access identities you want in the response body.
   * 		</p>
   */
  MaxItems?: string;
}

export namespace ListCloudFrontOriginAccessIdentitiesRequest {
  export function isa(
    o: any
  ): o is ListCloudFrontOriginAccessIdentitiesRequest {
    return _smithy.isa(o, "ListCloudFrontOriginAccessIdentitiesRequest");
  }
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListCloudFrontOriginAccessIdentitiesResult
  extends $MetadataBearer {
  __type?: "ListCloudFrontOriginAccessIdentitiesResult";
  /**
   * <p>The <code>CloudFrontOriginAccessIdentityList</code> type. </p>
   */
  CloudFrontOriginAccessIdentityList?: CloudFrontOriginAccessIdentityList;
}

export namespace ListCloudFrontOriginAccessIdentitiesResult {
  export function isa(o: any): o is ListCloudFrontOriginAccessIdentitiesResult {
    return _smithy.isa(o, "ListCloudFrontOriginAccessIdentitiesResult");
  }
}

/**
 * <p>The request to list distributions that are associated with a specified AWS WAF web
 * 			ACL. </p>
 */
export interface ListDistributionsByWebACLIdRequest {
  __type?: "ListDistributionsByWebACLIdRequest";
  /**
   * <p>Use <code>Marker</code> and <code>MaxItems</code> to control pagination of results. If
   * 			you have more than <code>MaxItems</code> distributions that satisfy the request, the response
   * 			includes a <code>NextMarker</code> element. To get the next page of results, submit another
   * 			request. For the value of <code>Marker</code>, specify the value of <code>NextMarker</code>
   * 			from the last response. (For the first request, omit <code>Marker</code>.) </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of distributions that you want CloudFront to return in the response body.
   * 			The maximum and default values are both 100.</p>
   */
  MaxItems?: string;

  /**
   * <p>The ID of the AWS WAF web ACL that you want to list the associated distributions.
   * 			If you specify "null" for the ID, the request returns a list of the distributions that aren't
   * 			associated with a web ACL. </p>
   */
  WebACLId: string | undefined;
}

export namespace ListDistributionsByWebACLIdRequest {
  export function isa(o: any): o is ListDistributionsByWebACLIdRequest {
    return _smithy.isa(o, "ListDistributionsByWebACLIdRequest");
  }
}

/**
 * <p>The response to a request to list the distributions that are associated with a
 * 			specified AWS WAF web ACL. </p>
 */
export interface ListDistributionsByWebACLIdResult extends $MetadataBearer {
  __type?: "ListDistributionsByWebACLIdResult";
  /**
   * <p>The <code>DistributionList</code> type. </p>
   */
  DistributionList?: DistributionList;
}

export namespace ListDistributionsByWebACLIdResult {
  export function isa(o: any): o is ListDistributionsByWebACLIdResult {
    return _smithy.isa(o, "ListDistributionsByWebACLIdResult");
  }
}

/**
 * <p>The request to list your distributions. </p>
 */
export interface ListDistributionsRequest {
  __type?: "ListDistributionsRequest";
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of
   * 			distributions. The results include distributions in the list that occur after the marker. To
   * 			get the next page of results, set the <code>Marker</code> to the value of the
   * 				<code>NextMarker</code> from the current page's response (which is also the ID of the last
   * 			distribution on that page).</p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of distributions you want in the response body.</p>
   */
  MaxItems?: string;
}

export namespace ListDistributionsRequest {
  export function isa(o: any): o is ListDistributionsRequest {
    return _smithy.isa(o, "ListDistributionsRequest");
  }
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListDistributionsResult extends $MetadataBearer {
  __type?: "ListDistributionsResult";
  /**
   * <p>The <code>DistributionList</code> type. </p>
   */
  DistributionList?: DistributionList;
}

export namespace ListDistributionsResult {
  export function isa(o: any): o is ListDistributionsResult {
    return _smithy.isa(o, "ListDistributionsResult");
  }
}

export interface ListFieldLevelEncryptionConfigsRequest {
  __type?: "ListFieldLevelEncryptionConfigsRequest";
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of configurations. The results include configurations in the list that
   * 			occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 			<code>NextMarker</code> from the current page's response (which is also the ID of the last configuration on that page). </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of field-level encryption configurations you want in the response body. </p>
   */
  MaxItems?: string;
}

export namespace ListFieldLevelEncryptionConfigsRequest {
  export function isa(o: any): o is ListFieldLevelEncryptionConfigsRequest {
    return _smithy.isa(o, "ListFieldLevelEncryptionConfigsRequest");
  }
}

export interface ListFieldLevelEncryptionConfigsResult extends $MetadataBearer {
  __type?: "ListFieldLevelEncryptionConfigsResult";
  /**
   * <p>Returns a list of all field-level encryption configurations that have been created in CloudFront for this account.</p>
   */
  FieldLevelEncryptionList?: FieldLevelEncryptionList;
}

export namespace ListFieldLevelEncryptionConfigsResult {
  export function isa(o: any): o is ListFieldLevelEncryptionConfigsResult {
    return _smithy.isa(o, "ListFieldLevelEncryptionConfigsResult");
  }
}

export interface ListFieldLevelEncryptionProfilesRequest {
  __type?: "ListFieldLevelEncryptionProfilesRequest";
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of profiles. The results include profiles in the list that
   * 			occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 			<code>NextMarker</code> from the current page's response (which is also the ID of the last profile on that page). </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of field-level encryption profiles you want in the response body. </p>
   */
  MaxItems?: string;
}

export namespace ListFieldLevelEncryptionProfilesRequest {
  export function isa(o: any): o is ListFieldLevelEncryptionProfilesRequest {
    return _smithy.isa(o, "ListFieldLevelEncryptionProfilesRequest");
  }
}

export interface ListFieldLevelEncryptionProfilesResult
  extends $MetadataBearer {
  __type?: "ListFieldLevelEncryptionProfilesResult";
  /**
   * <p>Returns a list of the field-level encryption profiles that have been created in CloudFront for this account.</p>
   */
  FieldLevelEncryptionProfileList?: FieldLevelEncryptionProfileList;
}

export namespace ListFieldLevelEncryptionProfilesResult {
  export function isa(o: any): o is ListFieldLevelEncryptionProfilesResult {
    return _smithy.isa(o, "ListFieldLevelEncryptionProfilesResult");
  }
}

/**
 * <p>The request to list invalidations. </p>
 */
export interface ListInvalidationsRequest {
  __type?: "ListInvalidationsRequest";
  /**
   * <p>The distribution's ID.</p>
   */
  DistributionId: string | undefined;

  /**
   * <p>Use this parameter when paginating results to indicate where to begin in your list of
   * 			invalidation batches. Because the results are returned in decreasing order from most recent to
   * 			oldest, the most recent results are on the first page, the second page will contain earlier
   * 			results, and so on. To get the next page of results, set <code>Marker</code> to the value of
   * 			the <code>NextMarker</code> from the current page's response. This value is the same as the ID
   * 			of the last invalidation batch on that page. </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of invalidation batches that you want in the response
   * 			body.</p>
   */
  MaxItems?: string;
}

export namespace ListInvalidationsRequest {
  export function isa(o: any): o is ListInvalidationsRequest {
    return _smithy.isa(o, "ListInvalidationsRequest");
  }
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListInvalidationsResult extends $MetadataBearer {
  __type?: "ListInvalidationsResult";
  /**
   * <p>Information about invalidation batches. </p>
   */
  InvalidationList?: InvalidationList;
}

export namespace ListInvalidationsResult {
  export function isa(o: any): o is ListInvalidationsResult {
    return _smithy.isa(o, "ListInvalidationsResult");
  }
}

export interface ListPublicKeysRequest {
  __type?: "ListPublicKeysRequest";
  /**
   * <p>Use this when paginating results to indicate where to begin in your list of public keys. The results include public keys in the list that
   * 			occur after the marker. To get the next page of results, set the <code>Marker</code> to the value of the
   * 			<code>NextMarker</code> from the current page's response (which is also the ID of the last public key on that page). </p>
   */
  Marker?: string;

  /**
   * <p>The maximum number of public keys you want in the response body. </p>
   */
  MaxItems?: string;
}

export namespace ListPublicKeysRequest {
  export function isa(o: any): o is ListPublicKeysRequest {
    return _smithy.isa(o, "ListPublicKeysRequest");
  }
}

export interface ListPublicKeysResult extends $MetadataBearer {
  __type?: "ListPublicKeysResult";
  /**
   * <p>Returns a list of all public keys that have been added to CloudFront for this account.</p>
   */
  PublicKeyList?: PublicKeyList;
}

export namespace ListPublicKeysResult {
  export function isa(o: any): o is ListPublicKeysResult {
    return _smithy.isa(o, "ListPublicKeysResult");
  }
}

/**
 * <p>The request to list your streaming distributions. </p>
 */
export interface ListStreamingDistributionsRequest {
  __type?: "ListStreamingDistributionsRequest";
  /**
   * <p>The value that you provided for the <code>Marker</code> request parameter.</p>
   */
  Marker?: string;

  /**
   * <p>The value that you provided for the <code>MaxItems</code> request parameter.</p>
   */
  MaxItems?: string;
}

export namespace ListStreamingDistributionsRequest {
  export function isa(o: any): o is ListStreamingDistributionsRequest {
    return _smithy.isa(o, "ListStreamingDistributionsRequest");
  }
}

/**
 * <p>The returned result of the corresponding request. </p>
 */
export interface ListStreamingDistributionsResult extends $MetadataBearer {
  __type?: "ListStreamingDistributionsResult";
  /**
   * <p>The <code>StreamingDistributionList</code> type. </p>
   */
  StreamingDistributionList?: StreamingDistributionList;
}

export namespace ListStreamingDistributionsResult {
  export function isa(o: any): o is ListStreamingDistributionsResult {
    return _smithy.isa(o, "ListStreamingDistributionsResult");
  }
}

/**
 * <p> The request to list tags for a CloudFront resource.</p>
 */
export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p> An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return _smithy.isa(o, "ListTagsForResourceRequest");
  }
}

/**
 * <p> The returned result of the corresponding request.</p>
 */
export interface ListTagsForResourceResult extends $MetadataBearer {
  __type?: "ListTagsForResourceResult";
  /**
   * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

export namespace ListTagsForResourceResult {
  export function isa(o: any): o is ListTagsForResourceResult {
    return _smithy.isa(o, "ListTagsForResourceResult");
  }
}

/**
 * <p>A complex type that controls whether access logs are written for the
 * 			distribution.</p>
 */
export interface LoggingConfig {
  __type?: "LoggingConfig";
  /**
   * <p>The Amazon S3 bucket to store the access logs in, for example,
   * 				<code>myawslogbucket.s3.amazonaws.com</code>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't
   * 			want to enable logging when you create a distribution or if you want to disable logging for an
   * 			existing distribution, specify <code>false</code> for <code>Enabled</code>, and specify empty
   * 				<code>Bucket</code> and <code>Prefix</code> elements. If you specify <code>false</code> for
   * 				<code>Enabled</code> but you specify values for <code>Bucket</code>, <code>prefix</code>,
   * 			and <code>IncludeCookies</code>, the values are automatically deleted.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specifies whether you want CloudFront to include cookies in access logs, specify
   * 				<code>true</code> for <code>IncludeCookies</code>. If you choose to include cookies in logs,
   * 			CloudFront logs all cookies regardless of how you configure the cache behaviors for this
   * 			distribution. If you don't want to include cookies when you create a distribution or if you
   * 			want to disable include cookies for an existing distribution, specify <code>false</code> for
   * 				<code>IncludeCookies</code>.</p>
   */
  IncludeCookies: boolean | undefined;

  /**
   * <p>An optional string that you want CloudFront to prefix to the access log
   * 				<code>filenames</code> for this distribution, for example, <code>myprefix/</code>. If you
   * 			want to enable logging, but you don't want to specify a prefix, you still must include an
   * 			empty <code>Prefix</code> element in the <code>Logging</code> element.</p>
   */
  Prefix: string | undefined;
}

export namespace LoggingConfig {
  export function isa(o: any): o is LoggingConfig {
    return _smithy.isa(o, "LoggingConfig");
  }
}

export type Method =
  | "DELETE"
  | "GET"
  | "HEAD"
  | "OPTIONS"
  | "PATCH"
  | "POST"
  | "PUT";

export type MinimumProtocolVersion =
  | "SSLv3"
  | "TLSv1"
  | "TLSv1.1_2016"
  | "TLSv1.2_2018"
  | "TLSv1_2016";

/**
 * <p>A complex type that describes the Amazon S3 bucket, HTTP server (for example, a web
 * 			server), Amazon MediaStore, or other server from which CloudFront gets your files. This can
 * 			also be an origin group, if you've created an origin group. You must specify at
 * 			least one origin or origin group.</p>
 * 		       <p>For the current limit on the number of origins or origin groups that you can specify
 * 			for a distribution, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_cloudfront">Amazon CloudFront Limits</a>
 * 			in the <i>AWS General Reference</i>.</p>
 */
export interface Origin {
  __type?: "Origin";
  /**
   * <p>A complex type that contains names and values for the custom headers that you
   * 			want.</p>
   */
  CustomHeaders?: CustomHeaders;

  /**
   * <p>A complex type that contains information about a custom origin. If the origin is an
   * 			Amazon S3 bucket, use the <code>S3OriginConfig</code> element instead.</p>
   */
  CustomOriginConfig?: CustomOriginConfig;

  /**
   * <p>
   *             <b>Amazon S3 origins</b>: The DNS name of the Amazon S3 bucket from
   * 			which you want CloudFront to get objects for this origin, for example,
   * 			<code>myawsbucket.s3.amazonaws.com</code>. If you set up your bucket to be configured
   * 			as a website endpoint, enter the Amazon S3 static website hosting endpoint for the bucket.</p>
   * 		       <p>For more information about specifying this value for different types of origins,
   * 			see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesDomainName">Origin Domain
   * 			Name</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   * 		       <p>Constraints for Amazon S3 origins: </p>
   * 		       <ul>
   *             <li>
   * 				           <p>If you configured Amazon S3 Transfer Acceleration for your bucket, don't specify the
   * 						<code>s3-accelerate</code> endpoint for <code>DomainName</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The bucket name must be between 3 and 63 characters long (inclusive).</p>
   * 			         </li>
   *             <li>
   * 				           <p>The bucket name must contain only lowercase characters, numbers, periods,
   * 					underscores, and dashes.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The bucket name must not contain adjacent periods.</p>
   * 			         </li>
   *          </ul>
   * 		       <p>
   *             <b>Custom Origins</b>: The DNS domain name for the HTTP
   * 			server from which you want CloudFront to get objects for this origin, for example,
   * 				<code>www.example.com</code>. </p>
   * 		       <p>Constraints for custom origins:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>DomainName</code> must be a valid DNS name that contains only a-z, A-Z, 0-9,
   * 					dot (.), hyphen (-), or underscore (_) characters.</p>
   * 			         </li>
   *             <li>
   * 				           <p>The name cannot exceed 128 characters.</p>
   * 			         </li>
   *          </ul>
   */
  DomainName: string | undefined;

  /**
   * <p>A unique identifier for the origin or origin group. The value of <code>Id</code> must be unique within
   * 			the distribution.</p>
   * 		       <p>When you specify the value of <code>TargetOriginId</code> for the default cache
   * 			behavior or for another cache behavior, you indicate the origin to which you want the cache
   * 			behavior to route requests by specifying the value of the <code>Id</code> element for that
   * 			origin. When a request matches the path pattern for that cache behavior, CloudFront routes the
   * 			request to the specified origin. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-values-specify.html#DownloadDistValuesCacheBehavior">Cache
   * 				Behavior Settings</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  Id: string | undefined;

  /**
   * <p>An optional element that causes CloudFront to request your content from a directory in your
   * 			Amazon S3 bucket or your custom origin. When you include the <code>OriginPath</code> element,
   * 			specify the directory name, beginning with a <code>/</code>. CloudFront appends the directory name
   * 			to the value of <code>DomainName</code>, for example, <code>example.com/production</code>. Do
   * 			not include a <code>/</code> at the end of the directory name.</p>
   * 		       <p>For example, suppose you've specified the following values for your
   * 			distribution:</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>DomainName</code>: An Amazon S3 bucket named <code>myawsbucket</code>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>OriginPath</code>: <code>/production</code>
   *                </p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>CNAME</code>: <code>example.com</code>
   *                </p>
   * 			         </li>
   *          </ul>
   * 		       <p>When a user enters <code>example.com/index.html</code> in a browser, CloudFront sends a
   * 			request to Amazon S3 for <code>myawsbucket/production/index.html</code>.</p>
   * 		       <p>When a user enters <code>example.com/acme/index.html</code> in a browser, CloudFront sends a
   * 			request to Amazon S3 for <code>myawsbucket/production/acme/index.html</code>.</p>
   */
  OriginPath?: string;

  /**
   * <p>A complex type that contains information about the Amazon S3 origin. If the origin is a
   * 			custom origin, use the <code>CustomOriginConfig</code> element instead.</p>
   */
  S3OriginConfig?: S3OriginConfig;
}

export namespace Origin {
  export function isa(o: any): o is Origin {
    return _smithy.isa(o, "Origin");
  }
}

/**
 * <p>A complex type that contains <code>HeaderName</code> and <code>HeaderValue</code>
 * 			elements, if any, for this distribution. </p>
 */
export interface OriginCustomHeader {
  __type?: "OriginCustomHeader";
  /**
   * <p>The name of a header that you want CloudFront to forward to your origin. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/forward-custom-headers.html">Forwarding Custom
   * 				Headers to Your Origin (Web Distributions Only)</a> in the <i>
   * 				Amazon CloudFront Developer Guide</i>.</p>
   */
  HeaderName: string | undefined;

  /**
   * <p>The value for the header that you specified in the <code>HeaderName</code>
   * 			field.</p>
   */
  HeaderValue: string | undefined;
}

export namespace OriginCustomHeader {
  export function isa(o: any): o is OriginCustomHeader {
    return _smithy.isa(o, "OriginCustomHeader");
  }
}

/**
 * <p>An origin group includes two origins (a primary origin and a second origin to failover to) and a failover criteria that you specify.
 * 		You create an origin group to support origin failover in CloudFront. When you create or update a distribution, you can specifiy
 * 		the origin group instead of a single origin, and CloudFront will failover from the primary origin to the second origin
 * 		under the failover conditions that you've chosen.</p>
 */
export interface OriginGroup {
  __type?: "OriginGroup";
  /**
   * <p>A complex type that contains information about the failover criteria for an origin group.</p>
   */
  FailoverCriteria: OriginGroupFailoverCriteria | undefined;

  /**
   * <p>The origin group's ID.</p>
   */
  Id: string | undefined;

  /**
   * <p>A complex type that contains information about the origins in an origin group.</p>
   */
  Members: OriginGroupMembers | undefined;
}

export namespace OriginGroup {
  export function isa(o: any): o is OriginGroup {
    return _smithy.isa(o, "OriginGroup");
  }
}

/**
 * <p>A complex data type that includes information about the failover criteria for an origin group, including
 * 		the status codes for which CloudFront will failover from the primary origin to the second origin.</p>
 */
export interface OriginGroupFailoverCriteria {
  __type?: "OriginGroupFailoverCriteria";
  /**
   * <p>The status codes that, when returned from the primary origin, will trigger CloudFront to failover
   * 		to the second origin.</p>
   */
  StatusCodes: StatusCodes | undefined;
}

export namespace OriginGroupFailoverCriteria {
  export function isa(o: any): o is OriginGroupFailoverCriteria {
    return _smithy.isa(o, "OriginGroupFailoverCriteria");
  }
}

/**
 * <p>An origin in an origin group.</p>
 */
export interface OriginGroupMember {
  __type?: "OriginGroupMember";
  /**
   * <p>The ID for an origin in an origin group.</p>
   */
  OriginId: string | undefined;
}

export namespace OriginGroupMember {
  export function isa(o: any): o is OriginGroupMember {
    return _smithy.isa(o, "OriginGroupMember");
  }
}

/**
 * <p>A complex data type for the origins included in an origin group.</p>
 */
export interface OriginGroupMembers {
  __type?: "OriginGroupMembers";
  /**
   * <p>Items (origins) in an origin group.</p>
   */
  Items: Array<OriginGroupMember> | undefined;

  /**
   * <p>The number of origins in an origin group.</p>
   */
  Quantity: number | undefined;
}

export namespace OriginGroupMembers {
  export function isa(o: any): o is OriginGroupMembers {
    return _smithy.isa(o, "OriginGroupMembers");
  }
}

/**
 * <p>A complex data type for the origin groups specified for a distribution.</p>
 */
export interface OriginGroups {
  __type?: "OriginGroups";
  /**
   * <p>The items (origin groups) in a distribution.</p>
   */
  Items?: Array<OriginGroup>;

  /**
   * <p>The number of origin groups.</p>
   */
  Quantity: number | undefined;
}

export namespace OriginGroups {
  export function isa(o: any): o is OriginGroups {
    return _smithy.isa(o, "OriginGroups");
  }
}

export type OriginProtocolPolicy = "http-only" | "https-only" | "match-viewer";

/**
 * <p>A complex type that contains information about the SSL/TLS protocols that CloudFront can use
 * 			when establishing an HTTPS connection with your origin. </p>
 */
export interface OriginSslProtocols {
  __type?: "OriginSslProtocols";
  /**
   * <p>A list that contains allowed SSL/TLS protocols for this distribution.</p>
   */
  Items: Array<SslProtocol | string> | undefined;

  /**
   * <p>The number of SSL/TLS protocols that you want to allow CloudFront to use when establishing an
   * 			HTTPS connection with this origin. </p>
   */
  Quantity: number | undefined;
}

export namespace OriginSslProtocols {
  export function isa(o: any): o is OriginSslProtocols {
    return _smithy.isa(o, "OriginSslProtocols");
  }
}

/**
 * <p>A complex type that contains information about origins and origin groups for this distribution.
 * 		</p>
 */
export interface Origins {
  __type?: "Origins";
  /**
   * <p>A complex type that contains origins or origin groups for this distribution.</p>
   */
  Items: Array<Origin> | undefined;

  /**
   * <p>The number of origins or origin groups for this distribution.</p>
   */
  Quantity: number | undefined;
}

export namespace Origins {
  export function isa(o: any): o is Origins {
    return _smithy.isa(o, "Origins");
  }
}

/**
 * <p>A complex type that contains information about the objects that you want to invalidate.
 * 			For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html#invalidation-specifying-objects">Specifying the Objects
 * 				to Invalidate</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
 */
export interface Paths {
  __type?: "Paths";
  /**
   * <p>A complex type that contains a list of the paths that you want to invalidate.</p>
   */
  Items?: Array<string>;

  /**
   * <p>The number of invalidation paths specified for the objects that you want to invalidate.</p>
   */
  Quantity: number | undefined;
}

export namespace Paths {
  export function isa(o: any): o is Paths {
    return _smithy.isa(o, "Paths");
  }
}

export type PriceClass = "PriceClass_100" | "PriceClass_200" | "PriceClass_All";

/**
 * <p>A complex data type of public keys you add to CloudFront to use with features like field-level encryption.</p>
 */
export interface PublicKey {
  __type?: "PublicKey";
  /**
   * <p>A time you added a public key to CloudFront.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>A unique ID assigned to a public key you've added to CloudFront.</p>
   */
  Id: string | undefined;

  /**
   * <p>A complex data type for a public key you add to CloudFront to use with features like field-level encryption.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

export namespace PublicKey {
  export function isa(o: any): o is PublicKey {
    return _smithy.isa(o, "PublicKey");
  }
}

/**
 * <p>Information about a public key you add to CloudFront to use with features like field-level encryption.</p>
 */
export interface PublicKeyConfig {
  __type?: "PublicKeyConfig";
  /**
   * <p>A unique number that ensures that the request can't be replayed.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>An optional comment about a public key.</p>
   */
  Comment?: string;

  /**
   * <p>The encoded public key that you want to add to CloudFront to use with features like field-level encryption.</p>
   */
  EncodedKey: string | undefined;

  /**
   * <p>The name for a public key you add to CloudFront to use with features like field-level encryption.</p>
   */
  Name: string | undefined;
}

export namespace PublicKeyConfig {
  export function isa(o: any): o is PublicKeyConfig {
    return _smithy.isa(o, "PublicKeyConfig");
  }
}

/**
 * <p>A list of public keys you've added to CloudFront to use with features like field-level encryption.</p>
 */
export interface PublicKeyList {
  __type?: "PublicKeyList";
  /**
   * <p>An array of information about a public key you add to CloudFront to use with features like field-level encryption.</p>
   */
  Items?: Array<PublicKeySummary>;

  /**
   * <p>The maximum number of public keys you want in the response body. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>If there are more elements to be listed, this element is present and contains
   * 			the value that you can use for the <code>Marker</code> request parameter to continue
   * 			listing your public keys where you left off.</p>
   */
  NextMarker?: string;

  /**
   * <p>The number of public keys you added to CloudFront to use with features like field-level
   * 			encryption.</p>
   */
  Quantity: number | undefined;
}

export namespace PublicKeyList {
  export function isa(o: any): o is PublicKeyList {
    return _smithy.isa(o, "PublicKeyList");
  }
}

/**
 * <p>A complex data type for public key information.
 * 		</p>
 */
export interface PublicKeySummary {
  __type?: "PublicKeySummary";
  /**
   * <p>
   * 			Comment for public key information summary.
   * 		</p>
   */
  Comment?: string;

  /**
   * <p>
   * 			Creation time for public key information summary.
   * 		</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>
   * 			Encoded key for public key information summary.
   * 		</p>
   */
  EncodedKey: string | undefined;

  /**
   * <p>
   * 			ID for public key information summary.
   * 		</p>
   */
  Id: string | undefined;

  /**
   * <p>
   * 			Name for public key information summary.
   * 		</p>
   */
  Name: string | undefined;
}

export namespace PublicKeySummary {
  export function isa(o: any): o is PublicKeySummary {
    return _smithy.isa(o, "PublicKeySummary");
  }
}

/**
 * <p>Query argument-profile mapping for field-level encryption.</p>
 */
export interface QueryArgProfile {
  __type?: "QueryArgProfile";
  /**
   * <p>ID of profile to use for field-level encryption query argument-profile mapping</p>
   */
  ProfileId: string | undefined;

  /**
   * <p>Query argument for field-level encryption query argument-profile mapping.</p>
   */
  QueryArg: string | undefined;
}

export namespace QueryArgProfile {
  export function isa(o: any): o is QueryArgProfile {
    return _smithy.isa(o, "QueryArgProfile");
  }
}

/**
 * <p>Configuration for query argument-profile mapping for field-level encryption.</p>
 */
export interface QueryArgProfileConfig {
  __type?: "QueryArgProfileConfig";
  /**
   * <p>Flag to set if you want a request to be forwarded to the origin even if the profile specified by the field-level encryption query argument,
   * 			fle-profile, is unknown.</p>
   */
  ForwardWhenQueryArgProfileIsUnknown: boolean | undefined;

  /**
   * <p>Profiles specified for query argument-profile mapping for field-level encryption.</p>
   */
  QueryArgProfiles?: QueryArgProfiles;
}

export namespace QueryArgProfileConfig {
  export function isa(o: any): o is QueryArgProfileConfig {
    return _smithy.isa(o, "QueryArgProfileConfig");
  }
}

/**
 * <p>Query argument-profile mapping for field-level encryption.</p>
 */
export interface QueryArgProfiles {
  __type?: "QueryArgProfiles";
  /**
   * <p>Number of items for query argument-profile mapping for field-level encryption.</p>
   */
  Items?: Array<QueryArgProfile>;

  /**
   * <p>Number of profiles for query argument-profile mapping for field-level encryption.</p>
   */
  Quantity: number | undefined;
}

export namespace QueryArgProfiles {
  export function isa(o: any): o is QueryArgProfiles {
    return _smithy.isa(o, "QueryArgProfiles");
  }
}

/**
 * <p>A complex type that contains information about the query string parameters that you want
 * 			CloudFront to use for caching for a cache behavior.
 * 		</p>
 */
export interface QueryStringCacheKeys {
  __type?: "QueryStringCacheKeys";
  /**
   * <p>A list that contains the query string parameters that you want CloudFront to use
   * 			as a basis for caching for a cache behavior. If <code>Quantity</code> is 0, you can omit
   * 			<code>Items</code>. </p>
   */
  Items?: Array<string>;

  /**
   * <p>The number of <code>whitelisted</code> query string parameters for a cache
   * 			behavior.</p>
   */
  Quantity: number | undefined;
}

export namespace QueryStringCacheKeys {
  export function isa(o: any): o is QueryStringCacheKeys {
    return _smithy.isa(o, "QueryStringCacheKeys");
  }
}

/**
 * <p>A complex type that identifies ways in which you want to restrict distribution of your
 * 			content.</p>
 */
export interface Restrictions {
  __type?: "Restrictions";
  /**
   * <p>A complex type that controls the countries in which your content is distributed. CloudFront
   * 			determines the location of your users using <code>MaxMind</code> GeoIP databases.</p>
   */
  GeoRestriction: GeoRestriction | undefined;
}

export namespace Restrictions {
  export function isa(o: any): o is Restrictions {
    return _smithy.isa(o, "Restrictions");
  }
}

/**
 * <p>A complex type that contains information about the Amazon S3 bucket from which you want
 * 			CloudFront to get your media files for distribution.</p>
 */
export interface S3Origin {
  __type?: "S3Origin";
  /**
   * <p>The DNS name of the Amazon S3 origin. </p>
   */
  DomainName: string | undefined;

  /**
   * <p>The CloudFront origin access identity to associate with the distribution. Use an origin
   * 			access identity to configure the distribution so that end users can only access objects in an
   * 			Amazon S3 bucket through CloudFront.</p>
   * 		       <p>If you want end users to be able to access objects using either the CloudFront URL or the
   * 			Amazon S3 URL, specify an empty <code>OriginAccessIdentity</code> element.</p>
   * 		       <p>To delete the origin access identity from an existing distribution, update the
   * 			distribution configuration and include an empty <code>OriginAccessIdentity</code>
   * 			element.</p>
   * 		       <p>To replace the origin access identity, update the distribution configuration and
   * 			specify the new origin access identity.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/private-content-restricting-access-to-s3.html">Using an Origin Access
   * 				Identity to Restrict Access to Your Amazon S3 Content</a> in the <i>
   * 				Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginAccessIdentity: string | undefined;
}

export namespace S3Origin {
  export function isa(o: any): o is S3Origin {
    return _smithy.isa(o, "S3Origin");
  }
}

/**
 * <p>A complex type that contains information about the Amazon S3 origin. If the origin is a
 * 			custom origin, use the <code>CustomOriginConfig</code> element instead.</p>
 */
export interface S3OriginConfig {
  __type?: "S3OriginConfig";
  /**
   * <p>The CloudFront origin access identity to associate with the origin. Use an origin access
   * 			identity to configure the origin so that viewers can <i>only</i> access objects
   * 			in an Amazon S3 bucket through CloudFront. The format of the value is:</p>
   * 		       <p>origin-access-identity/cloudfront/<i>ID-of-origin-access-identity</i>
   *          </p>
   * 		       <p>where <code>
   *                <i>ID-of-origin-access-identity</i>
   *             </code> is the value that
   * 			CloudFront returned in the <code>ID</code> element when you created the origin access
   * 			identity.</p>
   * 		       <p>If you want viewers to be able to access objects using either the CloudFront URL or the Amazon S3
   * 			URL, specify an empty <code>OriginAccessIdentity</code> element.</p>
   * 		       <p>To delete the origin access identity from an existing distribution, update the
   * 			distribution configuration and include an empty <code>OriginAccessIdentity</code>
   * 			element.</p>
   * 		       <p>To replace the origin access identity, update the distribution configuration and
   * 			specify the new origin access identity.</p>
   * 		       <p>For more information about the origin access identity, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the
   * 				<i>Amazon CloudFront Developer Guide</i>.</p>
   */
  OriginAccessIdentity: string | undefined;
}

export namespace S3OriginConfig {
  export function isa(o: any): o is S3OriginConfig {
    return _smithy.isa(o, "S3OriginConfig");
  }
}

export type SSLSupportMethod = "sni-only" | "vip";

/**
 * <p>A complex type that lists the AWS accounts that were included in the
 * 				<code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any.
 * 		</p>
 */
export interface Signer {
  __type?: "Signer";
  /**
   * <p>An AWS account that is included in the <code>TrustedSigners</code> complex type for
   * 			this distribution. Valid values include:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <code>self</code>, which is the AWS account used to create the distribution.</p>
   *             </li>
   *             <li>
   *                <p>An AWS account number.</p>
   *             </li>
   *          </ul>
   */
  AwsAccountNumber?: string;

  /**
   * <p>A complex type that lists the active CloudFront key pairs, if any, that are associated with <code>AwsAccountNumber</code>.</p>
   */
  KeyPairIds?: KeyPairIds;
}

export namespace Signer {
  export function isa(o: any): o is Signer {
    return _smithy.isa(o, "Signer");
  }
}

export type SslProtocol = "SSLv3" | "TLSv1" | "TLSv1.1" | "TLSv1.2";

/**
 * <p>A complex data type for the status codes that you specify that, when returned by a primary origin, trigger
 * 		CloudFront to failover to a second origin.</p>
 */
export interface StatusCodes {
  __type?: "StatusCodes";
  /**
   * <p>The items (status codes) for an origin group.</p>
   */
  Items: Array<number> | undefined;

  /**
   * <p>The number of status codes.</p>
   */
  Quantity: number | undefined;
}

export namespace StatusCodes {
  export function isa(o: any): o is StatusCodes {
    return _smithy.isa(o, "StatusCodes");
  }
}

/**
 * <p>A streaming distribution tells CloudFront where you want RTMP content to be delivered from, and the details about how to
 * 			track and manage content delivery.</p>
 */
export interface StreamingDistribution {
  __type?: "StreamingDistribution";
  /**
   * <p>The ARN (Amazon Resource Name) for the distribution. For example:
   * 			<code>arn:aws:cloudfront::123456789012:distribution/EDFDVBD632BHDS5</code>, where
   * 			<code>123456789012</code> is your AWS account ID.</p>
   */
  ARN: string | undefined;

  /**
   * <p>A complex type that lists the AWS accounts, if any, that you included in the
   * 				<code>TrustedSigners</code> complex type for this distribution. These are the accounts that
   * 			you want to allow to create signed URLs for private content.</p>
   * 		       <p>The <code>Signer</code> complex type lists the AWS account number of the trusted
   * 			signer or <code>self</code> if the signer is the AWS account that created the distribution.
   * 			The <code>Signer</code> element also includes the IDs of any active CloudFront key pairs that are
   * 			associated with the trusted signer's AWS account. If no <code>KeyPairId</code> element
   * 			appears for a <code>Signer</code>, that signer can't create signed URLs.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
   * 				Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  ActiveTrustedSigners: ActiveTrustedSigners | undefined;

  /**
   * <p>The domain name that corresponds to the streaming distribution, for example, <code>s5c39gqb8ow64r.cloudfront.net</code>. </p>
   */
  DomainName: string | undefined;

  /**
   * <p>The identifier for the RTMP distribution. For example:
   * 			<code>EGTXBD79EXAMPLE</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time that the distribution was last modified. </p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>The current status of the RTMP distribution. When the status is <code>Deployed</code>,
   * 			the distribution's information is propagated to all CloudFront edge locations.</p>
   */
  Status: string | undefined;

  /**
   * <p>The current configuration information for the RTMP distribution.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

export namespace StreamingDistribution {
  export function isa(o: any): o is StreamingDistribution {
    return _smithy.isa(o, "StreamingDistribution");
  }
}

/**
 * <p>The RTMP distribution's configuration information.</p>
 */
export interface StreamingDistributionConfig {
  __type?: "StreamingDistributionConfig";
  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this streaming distribution. </p>
   */
  Aliases?: Aliases;

  /**
   * <p>A unique value (for example, a date-time stamp) that ensures that the request can't be
   * 			replayed.</p>
   * 		       <p>If the value of <code>CallerReference</code> is new (regardless of the content of the
   * 			<code>StreamingDistributionConfig</code> object), CloudFront creates a new distribution.</p>
   * 		       <p>If <code>CallerReference</code> is a value that you already sent in a previous request to
   * 			create a distribution, CloudFront returns a <code>DistributionAlreadyExists</code> error.</p>
   */
  CallerReference: string | undefined;

  /**
   * <p>Any comments you want to include about the streaming distribution. </p>
   */
  Comment: string | undefined;

  /**
   * <p>Whether the streaming distribution is enabled to accept user requests for
   * 			content.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>A complex type that controls whether access logs are written for the streaming
   * 			distribution. </p>
   */
  Logging?: StreamingLoggingConfig;

  /**
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution. </p>
   */
  PriceClass?: PriceClass | string;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want
   * 			CloudFront to get your media files for distribution. </p>
   */
  S3Origin: S3Origin | undefined;

  /**
   * <p>A complex type that specifies any AWS accounts that you want to permit to create signed
   * 			URLs for private content. If you want the distribution to use signed URLs, include this
   * 			element; if you want the distribution to use public URLs, remove this element. For more
   * 			information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through
   * 				CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  TrustedSigners: TrustedSigners | undefined;
}

export namespace StreamingDistributionConfig {
  export function isa(o: any): o is StreamingDistributionConfig {
    return _smithy.isa(o, "StreamingDistributionConfig");
  }
}

/**
 * <p>A streaming distribution Configuration and a list of tags to be associated with the
 * 			streaming distribution.</p>
 */
export interface StreamingDistributionConfigWithTags {
  __type?: "StreamingDistributionConfigWithTags";
  /**
   * <p>A streaming distribution Configuration.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;

  /**
   * <p>A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

export namespace StreamingDistributionConfigWithTags {
  export function isa(o: any): o is StreamingDistributionConfigWithTags {
    return _smithy.isa(o, "StreamingDistributionConfigWithTags");
  }
}

/**
 * <p>A streaming distribution list. </p>
 */
export interface StreamingDistributionList {
  __type?: "StreamingDistributionList";
  /**
   * <p>A flag that indicates whether more streaming distributions remain to be listed. If your
   * 			results were truncated, you can make a follow-up pagination request using the
   * 				<code>Marker</code> request parameter to retrieve more distributions in the list. </p>
   */
  IsTruncated: boolean | undefined;

  /**
   * <p>A complex type that contains one <code>StreamingDistributionSummary</code> element for
   * 			each distribution that was created by the current AWS account.</p>
   */
  Items?: Array<StreamingDistributionSummary>;

  /**
   * <p>The value you provided for the <code>Marker</code> request parameter. </p>
   */
  Marker: string | undefined;

  /**
   * <p>The value you provided for the <code>MaxItems</code> request parameter. </p>
   */
  MaxItems: number | undefined;

  /**
   * <p>If <code>IsTruncated</code> is <code>true</code>, this element is present and contains
   * 			the value you can use for the <code>Marker</code> request parameter to continue listing your
   * 			RTMP distributions where they left off. </p>
   */
  NextMarker?: string;

  /**
   * <p>The number of streaming distributions that were created by the current AWS account.
   * 		</p>
   */
  Quantity: number | undefined;
}

export namespace StreamingDistributionList {
  export function isa(o: any): o is StreamingDistributionList {
    return _smithy.isa(o, "StreamingDistributionList");
  }
}

/**
 * <p> A summary of the information for a CloudFront streaming distribution.</p>
 */
export interface StreamingDistributionSummary {
  __type?: "StreamingDistributionSummary";
  /**
   * <p> The ARN (Amazon Resource Name) for the streaming distribution. For example:
   * 				<code>arn:aws:cloudfront::123456789012:streaming-distribution/EDFDVBD632BHDS5</code>, where
   * 				<code>123456789012</code> is your AWS account ID.</p>
   */
  ARN: string | undefined;

  /**
   * <p>A complex type that contains information about CNAMEs (alternate domain names), if any,
   * 			for this streaming distribution.</p>
   */
  Aliases: Aliases | undefined;

  /**
   * <p>The comment originally specified when this distribution was created.</p>
   */
  Comment: string | undefined;

  /**
   * <p>The domain name corresponding to the distribution, for example, <code>d111111abcdef8.cloudfront.net</code>.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Whether the distribution is enabled to accept end user requests for content.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>The identifier for the distribution, for example, <code>EDFDVBD632BHDS5</code>.</p>
   */
  Id: string | undefined;

  /**
   * <p>The date and time the distribution was last modified.</p>
   */
  LastModifiedTime: Date | undefined;

  /**
   * <p>A complex type that contains information about price class for this streaming
   * 			distribution. </p>
   */
  PriceClass: PriceClass | string | undefined;

  /**
   * <p>A complex type that contains information about the Amazon S3 bucket from which you want
   * 			CloudFront to get your media files for distribution.</p>
   */
  S3Origin: S3Origin | undefined;

  /**
   * <p> Indicates the current status of the distribution. When the status is
   * 			<code>Deployed</code>, the distribution's information is fully propagated throughout the
   * 			Amazon CloudFront system.</p>
   */
  Status: string | undefined;

  /**
   * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to
   * 			create signed URLs for private content. If you want to require signed URLs in requests for
   * 			objects in the target origin that match the <code>PathPattern</code> for this cache behavior,
   * 			specify <code>true</code> for <code>Enabled</code>, and specify the applicable values for
   * 				<code>Quantity</code> and <code>Items</code>.If you don't want to require signed URLs in
   * 			requests for objects that match <code>PathPattern</code>, specify <code>false</code> for
   * 				<code>Enabled</code> and <code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.
   * 			To add, change, or remove one or more trusted signers, change <code>Enabled</code> to
   * 				<code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as
   * 			applicable, and specify all of the trusted signers that you want to include in the updated
   * 			distribution.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private
   * 			Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>. </p>
   */
  TrustedSigners: TrustedSigners | undefined;
}

export namespace StreamingDistributionSummary {
  export function isa(o: any): o is StreamingDistributionSummary {
    return _smithy.isa(o, "StreamingDistributionSummary");
  }
}

/**
 * <p>A complex type that controls whether access logs are written for this streaming distribution.</p>
 */
export interface StreamingLoggingConfig {
  __type?: "StreamingLoggingConfig";
  /**
   * <p>The Amazon S3 bucket to store the access logs in, for example, <code>myawslogbucket.s3.amazonaws.com</code>.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>Specifies whether you want CloudFront to save access logs to an Amazon S3 bucket. If you don't
   * 			want to enable logging when you create a streaming distribution or if you want to disable
   * 			logging for an existing streaming distribution, specify <code>false</code> for
   * 				<code>Enabled</code>, and specify <code>empty Bucket</code> and <code>Prefix</code>
   * 			elements. If you specify <code>false</code> for <code>Enabled</code> but you specify values
   * 			for <code>Bucket</code> and <code>Prefix</code>, the values are automatically deleted.
   * 		</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>An optional string that you want CloudFront to prefix to the access log filenames for this streaming distribution, for example,
   * 			<code>myprefix/</code>. If you want to enable logging, but you don't want to specify a prefix, you still must include
   * 			an empty <code>Prefix</code> element in the <code>Logging</code> element.</p>
   */
  Prefix: string | undefined;
}

export namespace StreamingLoggingConfig {
  export function isa(o: any): o is StreamingLoggingConfig {
    return _smithy.isa(o, "StreamingLoggingConfig");
  }
}

/**
 * <p> A complex type that contains <code>Tag</code> key and <code>Tag</code> value.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p> A string that contains <code>Tag</code> key.</p>
   * 		       <p>The string length should be between 1 and 128 characters. Valid characters include
   * 				<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters
   * 				<code>_ - . : / = + @</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p> A string that contains an optional <code>Tag</code> value.</p>
   * 		       <p>The string length should be between 0 and 256 characters. Valid characters include
   * 				<code>a-z</code>, <code>A-Z</code>, <code>0-9</code>, space, and the special characters
   * 				<code>_ - . : / = + @</code>.</p>
   */
  Value?: string;
}

export namespace Tag {
  export function isa(o: any): o is Tag {
    return _smithy.isa(o, "Tag");
  }
}

/**
 * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
 */
export interface TagKeys {
  __type?: "TagKeys";
  /**
   * <p> A complex type that contains <code>Tag</code> key elements.</p>
   */
  Items?: Array<string>;
}

export namespace TagKeys {
  export function isa(o: any): o is TagKeys {
    return _smithy.isa(o, "TagKeys");
  }
}

/**
 * <p> The request to add tags to a CloudFront resource.</p>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p> An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;

  /**
   * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
   */
  Tags: Tags | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return _smithy.isa(o, "TagResourceRequest");
  }
}

/**
 * <p> A complex type that contains zero or more <code>Tag</code> elements.</p>
 */
export interface Tags {
  __type?: "Tags";
  /**
   * <p> A complex type that contains <code>Tag</code> elements.</p>
   */
  Items?: Array<Tag>;
}

export namespace Tags {
  export function isa(o: any): o is Tags {
    return _smithy.isa(o, "Tags");
  }
}

/**
 * <p>A complex type that specifies the AWS accounts, if any, that you want to allow to
 * 			create signed URLs for private content.</p>
 * 		       <p>If you want to require signed URLs in requests for objects in the target origin that
 * 			match the <code>PathPattern</code> for this cache behavior, specify <code>true</code> for
 * 				<code>Enabled</code>, and specify the applicable values for <code>Quantity</code> and
 * 				<code>Items</code>. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>
 * 				Amazon CloudFront Developer Guide</i>.</p>
 * 		       <p>If you don't want to require signed URLs in requests for objects that match
 * 				<code>PathPattern</code>, specify <code>false</code> for <code>Enabled</code> and
 * 				<code>0</code> for <code>Quantity</code>. Omit <code>Items</code>.</p>
 * 		       <p>To add, change, or remove one or more trusted signers, change <code>Enabled</code> to
 * 				<code>true</code> (if it's currently <code>false</code>), change <code>Quantity</code> as
 * 			applicable, and specify all of the trusted signers that you want to include in the updated
 * 			distribution.</p>
 * 		       <p>For more information about updating the distribution configuration, see <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/DistributionConfig.html">DistributionConfig</a> in the
 * 			<i>Amazon CloudFront API Reference</i>.</p>
 */
export interface TrustedSigners {
  __type?: "TrustedSigners";
  /**
   * <p>Specifies whether you want to require viewers to use signed URLs to access the files
   * 			specified by <code>PathPattern</code> and <code>TargetOriginId</code>.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>
   *             <b>Optional</b>: A complex type that contains trusted signers
   * 			for this cache behavior. If <code>Quantity</code> is <code>0</code>, you can omit
   * 				<code>Items</code>.</p>
   */
  Items?: Array<string>;

  /**
   * <p>The number of trusted signers for this cache behavior.</p>
   */
  Quantity: number | undefined;
}

export namespace TrustedSigners {
  export function isa(o: any): o is TrustedSigners {
    return _smithy.isa(o, "TrustedSigners");
  }
}

/**
 * <p> The request to remove tags from a CloudFront resource.</p>
 */
export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p> An ARN of a CloudFront resource.</p>
   */
  Resource: string | undefined;

  /**
   * <p> A complex type that contains zero or more <code>Tag</code> key elements.</p>
   */
  TagKeys: TagKeys | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return _smithy.isa(o, "UntagResourceRequest");
  }
}

/**
 * <p>The request to update an origin access identity.</p>
 */
export interface UpdateCloudFrontOriginAccessIdentityRequest {
  __type?: "UpdateCloudFrontOriginAccessIdentityRequest";
  /**
   * <p>The identity's configuration information.</p>
   */
  CloudFrontOriginAccessIdentityConfig:
    | CloudFrontOriginAccessIdentityConfig
    | undefined;

  /**
   * <p>The identity's id.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			identity's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateCloudFrontOriginAccessIdentityRequest {
  export function isa(
    o: any
  ): o is UpdateCloudFrontOriginAccessIdentityRequest {
    return _smithy.isa(o, "UpdateCloudFrontOriginAccessIdentityRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateCloudFrontOriginAccessIdentityResult
  extends $MetadataBearer {
  __type?: "UpdateCloudFrontOriginAccessIdentityResult";
  /**
   * <p>The origin access identity's information.</p>
   */
  CloudFrontOriginAccessIdentity?: CloudFrontOriginAccessIdentity;

  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace UpdateCloudFrontOriginAccessIdentityResult {
  export function isa(o: any): o is UpdateCloudFrontOriginAccessIdentityResult {
    return _smithy.isa(o, "UpdateCloudFrontOriginAccessIdentityResult");
  }
}

/**
 * <p>The request to update a distribution.</p>
 */
export interface UpdateDistributionRequest {
  __type?: "UpdateDistributionRequest";
  /**
   * <p>The distribution's configuration information.</p>
   */
  DistributionConfig: DistributionConfig | undefined;

  /**
   * <p>The distribution's id.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateDistributionRequest {
  export function isa(o: any): o is UpdateDistributionRequest {
    return _smithy.isa(o, "UpdateDistributionRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateDistributionResult extends $MetadataBearer {
  __type?: "UpdateDistributionResult";
  /**
   * <p>The distribution's information.</p>
   */
  Distribution?: Distribution;

  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;
}

export namespace UpdateDistributionResult {
  export function isa(o: any): o is UpdateDistributionResult {
    return _smithy.isa(o, "UpdateDistributionResult");
  }
}

export interface UpdateFieldLevelEncryptionConfigRequest {
  __type?: "UpdateFieldLevelEncryptionConfigRequest";
  /**
   * <p>Request to update a field-level encryption configuration. </p>
   */
  FieldLevelEncryptionConfig: FieldLevelEncryptionConfig | undefined;

  /**
   * <p>The ID of the configuration you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the configuration identity to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateFieldLevelEncryptionConfigRequest {
  export function isa(o: any): o is UpdateFieldLevelEncryptionConfigRequest {
    return _smithy.isa(o, "UpdateFieldLevelEncryptionConfigRequest");
  }
}

export interface UpdateFieldLevelEncryptionConfigResult
  extends $MetadataBearer {
  __type?: "UpdateFieldLevelEncryptionConfigResult";
  /**
   * <p>The value of the <code>ETag</code> header that you received when updating the configuration.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the results of updating the configuration.</p>
   */
  FieldLevelEncryption?: FieldLevelEncryption;
}

export namespace UpdateFieldLevelEncryptionConfigResult {
  export function isa(o: any): o is UpdateFieldLevelEncryptionConfigResult {
    return _smithy.isa(o, "UpdateFieldLevelEncryptionConfigResult");
  }
}

export interface UpdateFieldLevelEncryptionProfileRequest {
  __type?: "UpdateFieldLevelEncryptionProfileRequest";
  /**
   * <p>Request to update a field-level encryption profile. </p>
   */
  FieldLevelEncryptionProfileConfig:
    | FieldLevelEncryptionProfileConfig
    | undefined;

  /**
   * <p>The ID of the field-level encryption profile request. </p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the profile identity to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;
}

export namespace UpdateFieldLevelEncryptionProfileRequest {
  export function isa(o: any): o is UpdateFieldLevelEncryptionProfileRequest {
    return _smithy.isa(o, "UpdateFieldLevelEncryptionProfileRequest");
  }
}

export interface UpdateFieldLevelEncryptionProfileResult
  extends $MetadataBearer {
  __type?: "UpdateFieldLevelEncryptionProfileResult";
  /**
   * <p>The result of the field-level encryption profile request. </p>
   */
  ETag?: string;

  /**
   * <p>Return the results of updating the profile.</p>
   */
  FieldLevelEncryptionProfile?: FieldLevelEncryptionProfile;
}

export namespace UpdateFieldLevelEncryptionProfileResult {
  export function isa(o: any): o is UpdateFieldLevelEncryptionProfileResult {
    return _smithy.isa(o, "UpdateFieldLevelEncryptionProfileResult");
  }
}

export interface UpdatePublicKeyRequest {
  __type?: "UpdatePublicKeyRequest";
  /**
   * <p>ID of the public key to be updated.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the public key to update.
   * 			For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>Request to update public key information.</p>
   */
  PublicKeyConfig: PublicKeyConfig | undefined;
}

export namespace UpdatePublicKeyRequest {
  export function isa(o: any): o is UpdatePublicKeyRequest {
    return _smithy.isa(o, "UpdatePublicKeyRequest");
  }
}

export interface UpdatePublicKeyResult extends $MetadataBearer {
  __type?: "UpdatePublicKeyResult";
  /**
   * <p>The current version of the update public key result. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>Return the results of updating the public key.</p>
   */
  PublicKey?: PublicKey;
}

export namespace UpdatePublicKeyResult {
  export function isa(o: any): o is UpdatePublicKeyResult {
    return _smithy.isa(o, "UpdatePublicKeyResult");
  }
}

/**
 * <p>The request to update a streaming distribution.</p>
 */
export interface UpdateStreamingDistributionRequest {
  __type?: "UpdateStreamingDistributionRequest";
  /**
   * <p>The streaming distribution's id.</p>
   */
  Id: string | undefined;

  /**
   * <p>The value of the <code>ETag</code> header that you received when retrieving the
   * 			streaming distribution's configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  IfMatch?: string;

  /**
   * <p>The streaming distribution's configuration information.</p>
   */
  StreamingDistributionConfig: StreamingDistributionConfig | undefined;
}

export namespace UpdateStreamingDistributionRequest {
  export function isa(o: any): o is UpdateStreamingDistributionRequest {
    return _smithy.isa(o, "UpdateStreamingDistributionRequest");
  }
}

/**
 * <p>The returned result of the corresponding request.</p>
 */
export interface UpdateStreamingDistributionResult extends $MetadataBearer {
  __type?: "UpdateStreamingDistributionResult";
  /**
   * <p>The current version of the configuration. For example:
   * 			<code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * <p>The streaming distribution's information.</p>
   */
  StreamingDistribution?: StreamingDistribution;
}

export namespace UpdateStreamingDistributionResult {
  export function isa(o: any): o is UpdateStreamingDistributionResult {
    return _smithy.isa(o, "UpdateStreamingDistributionResult");
  }
}

/**
 * <p>A complex type that specifies the following:</p>
 * 		       <ul>
 *             <li>
 * 				           <p>Whether you want viewers to use HTTP or HTTPS to request your objects.</p>
 * 			         </li>
 *             <li>
 * 				           <p>If you want viewers to use HTTPS, whether you're using an alternate domain name, such
 * 					as <code>example.com</code>, or the CloudFront domain name for your distribution, such
 * 					as <code>d111111abcdef8.cloudfront.net</code>.</p>
 * 			         </li>
 *             <li>
 * 				           <p>If you're using an alternate domain name, whether AWS Certificate Manager (ACM)
 * 					provided the certificate, or you purchased a certificate from a third-party certificate
 * 					authority and imported it into ACM or uploaded it to the IAM certificate store.</p>
 * 			         </li>
 *          </ul>
 *
 * 		       <p>Specify only one of the following values: </p>
 * 		       <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-ACMCertificateArn">ACMCertificateArn</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-IAMCertificateId">IAMCertificateId</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-CloudFrontDefaultCertificate">CloudFrontDefaultCertificate</a>
 *                </p>
 *             </li>
 *          </ul>
 *
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/SecureConnections.html#CNAMEsAndHTTPS">
 * 			Using Alternate Domain Names and HTTPS</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
 */
export interface ViewerCertificate {
  __type?: "ViewerCertificate";
  /**
   * <p>If you want viewers to use HTTPS to request your objects and you're using an alternate
   * 			domain name, you must choose the type of certificate that you want to use. If ACM
   * 			provided your certificate, specify the Amazon Resource Name (ARN) for the ACM
   * 			certificate that you want to use for this distribution. CloudFront only supports ACM
   * 			certificates in the US East (N. Virginia) Region (us-east-1).</p>
   * 				     <p>If you specify an ACM certificate ARN, you must also specify an SSL support method
   * 			(<code>sni-only</code> or <code>vip</code>).</p>
   */
  ACMCertificateArn?: string;

  /**
   * <p>This field is no longer used. Use one of the following fields instead:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-ACMCertificateArn">ACMCertificateArn</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-IAMCertificateId">IAMCertificateId</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-CloudFrontDefaultCertificate">CloudFrontDefaultCertificate</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  Certificate?: string;

  /**
   * <p>This field is no longer used. Use one of the following fields instead:</p>
   * 		       <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-ACMCertificateArn">ACMCertificateArn</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-IAMCertificateId">IAMCertificateId</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-CloudFrontDefaultCertificate">CloudFrontDefaultCertificate</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  CertificateSource?: CertificateSource | string;

  /**
   * <p>If you're using the CloudFront domain name for your distribution, such as
   * 			<code>d111111abcdef8.cloudfront.net</code>, specify this value as
   * 			<code>true</code>.</p>
   */
  CloudFrontDefaultCertificate?: boolean;

  /**
   * <p>If you want viewers to use HTTPS to request your objects and you're using an alternate
   * 			domain name, you must choose the type of certificate that you want to use. If you
   * 			purchased your certificate from a third-party certificate authority and uploaded it to
   * 			the IAM certificate store, specify the certificate ID that you want to use for this
   * 			distribution.</p>
   * 		       <p>If you specify a certificate ID, you must also specify an SSL support method
   * 			(<code>sni-only</code> or <code>vip</code>).</p>
   */
  IAMCertificateId?: string;

  /**
   * <p>Specify the security policy that you want CloudFront to use for HTTPS connections. A security policy determines two settings:</p>
   * 			      <ul>
   *             <li>
   *                <p>The minimum SSL/TLS protocol that CloudFront uses to communicate with viewers.</p>
   *             </li>
   *             <li>
   *                <p>The cipher that CloudFront uses to encrypt the content that it returns to viewers.</p>
   *             </li>
   *          </ul>
   *
   * 		       <note>
   *             <p>On the CloudFront console, this setting is called <b>Security
   * 				Policy</b>.</p>
   *          </note>
   *
   * 		       <p>We recommend that you specify <code>TLSv1.1_2016</code> unless your viewers are using
   * 			browsers or devices that do not support TLSv1.1 or later.</p>
   * 		       <p>When both of the following are true, you must specify <code>TLSv1</code> or later for the security policy: </p>
   * 			      <ul>
   *             <li>
   * 					          <p>You're using a custom certificate; that is, you specified a value for
   * 					<code>ACMCertificateArn</code> or for <code>IAMCertificateId</code>.</p>
   * 				        </li>
   *             <li>
   * 					          <p>You're using SNI; that is, you specified <code>sni-only</code> for
   * 					<code>SSLSupportMethod</code>.</p>
   * 				        </li>
   *          </ul>
   * 		       <p>If you specify <code>true</code> for <code>CloudFrontDefaultCertificate</code>, CloudFront
   * 			automatically sets the security policy to <code>TLSv1</code> regardless of the value
   * 			that you specify here.</p>
   *
   * 		       <p>For information about the relationship between the security policy that you choose and the protocols and ciphers that CloudFront
   * 			uses to communicate with viewers, see
   * 			<a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/secure-connections-supported-viewer-protocols-ciphers.html#secure-connections-supported-ciphers">
   * 				Supported SSL/TLS Protocols and Ciphers for Communication Between Viewers and CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  MinimumProtocolVersion?: MinimumProtocolVersion | string;

  /**
   * <p>If you specify a value for <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-ACMCertificateArn">ACMCertificateArn</a> or for <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_ViewerCertificate.html#cloudfront-Type-ViewerCertificate-IAMCertificateId">IAMCertificateId</a>, you must also specify how you want CloudFront to serve HTTPS
   * 			requests: using a method that works for browsers and clients released after 2010, or one
   * 			that works for all clients.</p>
   * 		       <ul>
   *             <li>
   * 				           <p>
   *                   <code>sni-only</code>: CloudFront can respond to HTTPS requests from viewers that support
   * 					Server Name Indication (SNI). All modern browsers support SNI, but there are a
   * 					few that don't. For a current list of the browsers that support SNI, see the
   * 					<a href="http://en.wikipedia.org/wiki/Server_Name_Indication">Wikipedia entry
   * 					Server Name Indication</a>. To learn about options to explore if you have
   * 					viewers with browsers that don't include SNI support, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-https-dedicated-ip-or-sni.html">Choosing How CloudFront Serves HTTPS Requests</a> in the
   * 					<i>Amazon CloudFront Developer Guide</i>.</p>
   * 			         </li>
   *             <li>
   * 				           <p>
   *                   <code>vip</code>: CloudFront uses dedicated IP addresses for your content and can respond to HTTPS requests from any viewer.
   * 					However, there are additional monthly charges. For details, including specific pricing information, see <a href="http://aws.amazon.com/cloudfront/custom-ssl-domains/">Custom SSL options for Amazon CloudFront</a>
   * 					on the AWS marketing site.</p>
   *
   * 			         </li>
   *          </ul>
   * 		       <p>Don't specify a value here if you specified <code>CloudFrontDefaultCertificate</code> as
   * 			<code>true</code>.</p>
   *
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/cnames-https-dedicated-ip-or-sni.html">Choosing
   * 			How CloudFront Serves HTTPS Requests</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
   */
  SSLSupportMethod?: SSLSupportMethod | string;
}

export namespace ViewerCertificate {
  export function isa(o: any): o is ViewerCertificate {
    return _smithy.isa(o, "ViewerCertificate");
  }
}

export type ViewerProtocolPolicy =
  | "allow-all"
  | "https-only"
  | "redirect-to-https";

/**
 * <p>Access denied.</p>
 */
export interface AccessDenied extends _smithy.SmithyException, $MetadataBearer {
  name: "AccessDenied";
  $fault: "client";
  Message?: string;
}

export namespace AccessDenied {
  export function isa(o: any): o is AccessDenied {
    return _smithy.isa(o, "AccessDenied");
  }
}

/**
 * <p>Invalidation batch specified is too large.</p>
 */
export interface BatchTooLarge
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "BatchTooLarge";
  $fault: "client";
  Message?: string;
}

export namespace BatchTooLarge {
  export function isa(o: any): o is BatchTooLarge {
    return _smithy.isa(o, "BatchTooLarge");
  }
}

/**
 * <p>The CNAME specified is already defined for CloudFront.</p>
 */
export interface CNAMEAlreadyExists
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "CNAMEAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace CNAMEAlreadyExists {
  export function isa(o: any): o is CNAMEAlreadyExists {
    return _smithy.isa(o, "CNAMEAlreadyExists");
  }
}

/**
 * <p>You can't change the value of a public key.</p>
 */
export interface CannotChangeImmutablePublicKeyFields
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "CannotChangeImmutablePublicKeyFields";
  $fault: "client";
  Message?: string;
}

export namespace CannotChangeImmutablePublicKeyFields {
  export function isa(o: any): o is CannotChangeImmutablePublicKeyFields {
    return _smithy.isa(o, "CannotChangeImmutablePublicKeyFields");
  }
}

/**
 * <p>If the <code>CallerReference</code> is a value you already sent in a previous request to create an identity but the content
 * 			of the <code>CloudFrontOriginAccessIdentityConfig</code> is different from the original request, CloudFront returns a
 * 			<code>CloudFrontOriginAccessIdentityAlreadyExists</code> error. </p>
 */
export interface CloudFrontOriginAccessIdentityAlreadyExists
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "CloudFrontOriginAccessIdentityAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace CloudFrontOriginAccessIdentityAlreadyExists {
  export function isa(
    o: any
  ): o is CloudFrontOriginAccessIdentityAlreadyExists {
    return _smithy.isa(o, "CloudFrontOriginAccessIdentityAlreadyExists");
  }
}

/**
 * <p>The Origin Access Identity specified is already in use.</p>
 */
export interface CloudFrontOriginAccessIdentityInUse
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "CloudFrontOriginAccessIdentityInUse";
  $fault: "client";
  Message?: string;
}

export namespace CloudFrontOriginAccessIdentityInUse {
  export function isa(o: any): o is CloudFrontOriginAccessIdentityInUse {
    return _smithy.isa(o, "CloudFrontOriginAccessIdentityInUse");
  }
}

/**
 * <p>The caller reference you attempted to create the distribution with is associated with another distribution.</p>
 */
export interface DistributionAlreadyExists
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "DistributionAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace DistributionAlreadyExists {
  export function isa(o: any): o is DistributionAlreadyExists {
    return _smithy.isa(o, "DistributionAlreadyExists");
  }
}

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable
 * 			the distribution before you can delete it.</p>
 */
export interface DistributionNotDisabled
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "DistributionNotDisabled";
  $fault: "client";
  Message?: string;
}

export namespace DistributionNotDisabled {
  export function isa(o: any): o is DistributionNotDisabled {
    return _smithy.isa(o, "DistributionNotDisabled");
  }
}

/**
 * <p>The specified configuration for field-level encryption already exists.</p>
 */
export interface FieldLevelEncryptionConfigAlreadyExists
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "FieldLevelEncryptionConfigAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionConfigAlreadyExists {
  export function isa(o: any): o is FieldLevelEncryptionConfigAlreadyExists {
    return _smithy.isa(o, "FieldLevelEncryptionConfigAlreadyExists");
  }
}

/**
 * <p>The specified configuration for field-level encryption is in use.</p>
 */
export interface FieldLevelEncryptionConfigInUse
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "FieldLevelEncryptionConfigInUse";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionConfigInUse {
  export function isa(o: any): o is FieldLevelEncryptionConfigInUse {
    return _smithy.isa(o, "FieldLevelEncryptionConfigInUse");
  }
}

/**
 * <p>The specified profile for field-level encryption already exists.</p>
 */
export interface FieldLevelEncryptionProfileAlreadyExists
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "FieldLevelEncryptionProfileAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionProfileAlreadyExists {
  export function isa(o: any): o is FieldLevelEncryptionProfileAlreadyExists {
    return _smithy.isa(o, "FieldLevelEncryptionProfileAlreadyExists");
  }
}

/**
 * <p>The specified profile for field-level encryption is in use.</p>
 */
export interface FieldLevelEncryptionProfileInUse
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "FieldLevelEncryptionProfileInUse";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionProfileInUse {
  export function isa(o: any): o is FieldLevelEncryptionProfileInUse {
    return _smithy.isa(o, "FieldLevelEncryptionProfileInUse");
  }
}

/**
 * <p>The maximum size of a profile for field-level encryption was exceeded.</p>
 */
export interface FieldLevelEncryptionProfileSizeExceeded
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "FieldLevelEncryptionProfileSizeExceeded";
  $fault: "client";
  Message?: string;
}

export namespace FieldLevelEncryptionProfileSizeExceeded {
  export function isa(o: any): o is FieldLevelEncryptionProfileSizeExceeded {
    return _smithy.isa(o, "FieldLevelEncryptionProfileSizeExceeded");
  }
}

/**
 * <p>The specified configuration for field-level encryption can't be associated with the specified cache behavior.</p>
 */
export interface IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior";
  $fault: "client";
  Message?: string;
}

export namespace IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior {
  export function isa(
    o: any
  ): o is IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior {
    return _smithy.isa(
      o,
      "IllegalFieldLevelEncryptionConfigAssociationWithCacheBehavior"
    );
  }
}

/**
 * <p>Origin and <code>CallerReference</code> cannot be updated. </p>
 */
export interface IllegalUpdate
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "IllegalUpdate";
  $fault: "client";
  Message?: string;
}

export namespace IllegalUpdate {
  export function isa(o: any): o is IllegalUpdate {
    return _smithy.isa(o, "IllegalUpdate");
  }
}

/**
 * <p>The value of <code>Quantity</code> and the size of <code>Items</code> don't match.</p>
 */
export interface InconsistentQuantities
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InconsistentQuantities";
  $fault: "client";
  Message?: string;
}

export namespace InconsistentQuantities {
  export function isa(o: any): o is InconsistentQuantities {
    return _smithy.isa(o, "InconsistentQuantities");
  }
}

/**
 * <p>The argument is invalid.</p>
 */
export interface InvalidArgument
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidArgument";
  $fault: "client";
  Message?: string;
}

export namespace InvalidArgument {
  export function isa(o: any): o is InvalidArgument {
    return _smithy.isa(o, "InvalidArgument");
  }
}

/**
 * <p>The default root object file name is too big or contains an invalid character.</p>
 */
export interface InvalidDefaultRootObject
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidDefaultRootObject";
  $fault: "client";
  Message?: string;
}

export namespace InvalidDefaultRootObject {
  export function isa(o: any): o is InvalidDefaultRootObject {
    return _smithy.isa(o, "InvalidDefaultRootObject");
  }
}

/**
 * <p>An invalid error code was specified.</p>
 */
export interface InvalidErrorCode
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidErrorCode";
  $fault: "client";
  Message?: string;
}

export namespace InvalidErrorCode {
  export function isa(o: any): o is InvalidErrorCode {
    return _smithy.isa(o, "InvalidErrorCode");
  }
}

/**
 * <p>Your request contains forward cookies option which doesn't match with the expectation for the <code>whitelisted</code>
 * 			list of cookie names. Either list of cookie names has been specified when not allowed or list of cookie names is missing when expected.</p>
 */
export interface InvalidForwardCookies
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidForwardCookies";
  $fault: "client";
  Message?: string;
}

export namespace InvalidForwardCookies {
  export function isa(o: any): o is InvalidForwardCookies {
    return _smithy.isa(o, "InvalidForwardCookies");
  }
}

/**
 * <p>The specified geo restriction parameter is not valid.</p>
 */
export interface InvalidGeoRestrictionParameter
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidGeoRestrictionParameter";
  $fault: "client";
  Message?: string;
}

export namespace InvalidGeoRestrictionParameter {
  export function isa(o: any): o is InvalidGeoRestrictionParameter {
    return _smithy.isa(o, "InvalidGeoRestrictionParameter");
  }
}

/**
 * <p>The headers specified are not valid for an Amazon S3 origin.</p>
 */
export interface InvalidHeadersForS3Origin
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidHeadersForS3Origin";
  $fault: "client";
  Message?: string;
}

export namespace InvalidHeadersForS3Origin {
  export function isa(o: any): o is InvalidHeadersForS3Origin {
    return _smithy.isa(o, "InvalidHeadersForS3Origin");
  }
}

/**
 * <p>The <code>If-Match</code> version is missing or not valid for the distribution.</p>
 */
export interface InvalidIfMatchVersion
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidIfMatchVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidIfMatchVersion {
  export function isa(o: any): o is InvalidIfMatchVersion {
    return _smithy.isa(o, "InvalidIfMatchVersion");
  }
}

/**
 * <p>The specified Lambda function association is invalid.</p>
 */
export interface InvalidLambdaFunctionAssociation
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidLambdaFunctionAssociation";
  $fault: "client";
  Message?: string;
}

export namespace InvalidLambdaFunctionAssociation {
  export function isa(o: any): o is InvalidLambdaFunctionAssociation {
    return _smithy.isa(o, "InvalidLambdaFunctionAssociation");
  }
}

/**
 * <p>The location code specified is not valid.</p>
 */
export interface InvalidLocationCode
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidLocationCode";
  $fault: "client";
  Message?: string;
}

export namespace InvalidLocationCode {
  export function isa(o: any): o is InvalidLocationCode {
    return _smithy.isa(o, "InvalidLocationCode");
  }
}

/**
 * <p>The minimum protocol version specified is not valid.</p>
 */
export interface InvalidMinimumProtocolVersion
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidMinimumProtocolVersion";
  $fault: "client";
  Message?: string;
}

export namespace InvalidMinimumProtocolVersion {
  export function isa(o: any): o is InvalidMinimumProtocolVersion {
    return _smithy.isa(o, "InvalidMinimumProtocolVersion");
  }
}

/**
 * <p>The Amazon S3 origin server specified does not refer to a valid Amazon S3 bucket.</p>
 */
export interface InvalidOrigin
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidOrigin";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOrigin {
  export function isa(o: any): o is InvalidOrigin {
    return _smithy.isa(o, "InvalidOrigin");
  }
}

/**
 * <p>The origin access identity is not valid or doesn't exist.</p>
 */
export interface InvalidOriginAccessIdentity
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidOriginAccessIdentity";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOriginAccessIdentity {
  export function isa(o: any): o is InvalidOriginAccessIdentity {
    return _smithy.isa(o, "InvalidOriginAccessIdentity");
  }
}

/**
 * <p>The keep alive timeout specified for the origin is not valid.</p>
 */
export interface InvalidOriginKeepaliveTimeout
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidOriginKeepaliveTimeout";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOriginKeepaliveTimeout {
  export function isa(o: any): o is InvalidOriginKeepaliveTimeout {
    return _smithy.isa(o, "InvalidOriginKeepaliveTimeout");
  }
}

/**
 * <p>The read timeout specified for the origin is not valid.</p>
 */
export interface InvalidOriginReadTimeout
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidOriginReadTimeout";
  $fault: "client";
  Message?: string;
}

export namespace InvalidOriginReadTimeout {
  export function isa(o: any): o is InvalidOriginReadTimeout {
    return _smithy.isa(o, "InvalidOriginReadTimeout");
  }
}

/**
 * <p>You cannot specify SSLv3 as the minimum protocol version if you only want to support only clients that support
 * 			Server Name Indication (SNI).</p>
 */
export interface InvalidProtocolSettings
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidProtocolSettings";
  $fault: "client";
  Message?: string;
}

export namespace InvalidProtocolSettings {
  export function isa(o: any): o is InvalidProtocolSettings {
    return _smithy.isa(o, "InvalidProtocolSettings");
  }
}

/**
 * <p>Query string parameters specified in the response body are not valid.</p>
 */
export interface InvalidQueryStringParameters
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidQueryStringParameters";
  $fault: "client";
  Message?: string;
}

export namespace InvalidQueryStringParameters {
  export function isa(o: any): o is InvalidQueryStringParameters {
    return _smithy.isa(o, "InvalidQueryStringParameters");
  }
}

/**
 * <p>The relative path is too big, is not URL-encoded, or does not begin with a slash (/).</p>
 */
export interface InvalidRelativePath
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidRelativePath";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRelativePath {
  export function isa(o: any): o is InvalidRelativePath {
    return _smithy.isa(o, "InvalidRelativePath");
  }
}

/**
 * <p>This operation requires the HTTPS protocol. Ensure that you specify the HTTPS protocol in your request, or omit the
 * 			<code>RequiredProtocols</code> element from your distribution configuration.</p>
 */
export interface InvalidRequiredProtocol
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidRequiredProtocol";
  $fault: "client";
  Message?: string;
}

export namespace InvalidRequiredProtocol {
  export function isa(o: any): o is InvalidRequiredProtocol {
    return _smithy.isa(o, "InvalidRequiredProtocol");
  }
}

/**
 * <p>A response code specified in the response body is not valid.</p>
 */
export interface InvalidResponseCode
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidResponseCode";
  $fault: "client";
  Message?: string;
}

export namespace InvalidResponseCode {
  export function isa(o: any): o is InvalidResponseCode {
    return _smithy.isa(o, "InvalidResponseCode");
  }
}

/**
 * <p>TTL order specified in the response body is not valid.</p>
 */
export interface InvalidTTLOrder
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidTTLOrder";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTTLOrder {
  export function isa(o: any): o is InvalidTTLOrder {
    return _smithy.isa(o, "InvalidTTLOrder");
  }
}

/**
 * <p>Tagging specified in the response body is not valid.</p>
 */
export interface InvalidTagging
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidTagging";
  $fault: "client";
  Message?: string;
}

export namespace InvalidTagging {
  export function isa(o: any): o is InvalidTagging {
    return _smithy.isa(o, "InvalidTagging");
  }
}

/**
 * <p>A viewer certificate specified in the response body is not valid.</p>
 */
export interface InvalidViewerCertificate
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidViewerCertificate";
  $fault: "client";
  Message?: string;
}

export namespace InvalidViewerCertificate {
  export function isa(o: any): o is InvalidViewerCertificate {
    return _smithy.isa(o, "InvalidViewerCertificate");
  }
}

/**
 * <p>A web ACL ID specified in the response body is not valid. To specify a web ACL created
 * 			using the latest version of AWS WAF, use the ACL ARN, for example
 * 			<code>arn:aws:wafv2:us-east-1:123456789012:global/webacl/ExampleWebACL/473e64fd-f30b-4765-81a0-62ad96dd167a</code>.
 * 			To specify a web ACL created using AWS WAF Classic, use the ACL ID, for example
 * 			<code>473e64fd-f30b-4765-81a0-62ad96dd167a</code>.</p>
 */
export interface InvalidWebACLId
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "InvalidWebACLId";
  $fault: "client";
  Message?: string;
}

export namespace InvalidWebACLId {
  export function isa(o: any): o is InvalidWebACLId {
    return _smithy.isa(o, "InvalidWebACLId");
  }
}

/**
 * <p>This operation requires a body. Ensure that the body is present and the <code>Content-Type</code> header is set.</p>
 */
export interface MissingBody extends _smithy.SmithyException, $MetadataBearer {
  name: "MissingBody";
  $fault: "client";
  Message?: string;
}

export namespace MissingBody {
  export function isa(o: any): o is MissingBody {
    return _smithy.isa(o, "MissingBody");
  }
}

/**
 * <p>The specified origin access identity does not exist.</p>
 */
export interface NoSuchCloudFrontOriginAccessIdentity
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "NoSuchCloudFrontOriginAccessIdentity";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchCloudFrontOriginAccessIdentity {
  export function isa(o: any): o is NoSuchCloudFrontOriginAccessIdentity {
    return _smithy.isa(o, "NoSuchCloudFrontOriginAccessIdentity");
  }
}

/**
 * <p>The specified distribution does not exist.</p>
 */
export interface NoSuchDistribution
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "NoSuchDistribution";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchDistribution {
  export function isa(o: any): o is NoSuchDistribution {
    return _smithy.isa(o, "NoSuchDistribution");
  }
}

/**
 * <p>The specified configuration for field-level encryption doesn't exist.</p>
 */
export interface NoSuchFieldLevelEncryptionConfig
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "NoSuchFieldLevelEncryptionConfig";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchFieldLevelEncryptionConfig {
  export function isa(o: any): o is NoSuchFieldLevelEncryptionConfig {
    return _smithy.isa(o, "NoSuchFieldLevelEncryptionConfig");
  }
}

/**
 * <p>The specified profile for field-level encryption doesn't exist.</p>
 */
export interface NoSuchFieldLevelEncryptionProfile
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "NoSuchFieldLevelEncryptionProfile";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchFieldLevelEncryptionProfile {
  export function isa(o: any): o is NoSuchFieldLevelEncryptionProfile {
    return _smithy.isa(o, "NoSuchFieldLevelEncryptionProfile");
  }
}

/**
 * <p>The specified invalidation does not exist.</p>
 */
export interface NoSuchInvalidation
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "NoSuchInvalidation";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchInvalidation {
  export function isa(o: any): o is NoSuchInvalidation {
    return _smithy.isa(o, "NoSuchInvalidation");
  }
}

/**
 * <p>No origin exists with the specified <code>Origin Id</code>. </p>
 */
export interface NoSuchOrigin extends _smithy.SmithyException, $MetadataBearer {
  name: "NoSuchOrigin";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchOrigin {
  export function isa(o: any): o is NoSuchOrigin {
    return _smithy.isa(o, "NoSuchOrigin");
  }
}

/**
 * <p>The specified public key doesn't exist.</p>
 */
export interface NoSuchPublicKey
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "NoSuchPublicKey";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchPublicKey {
  export function isa(o: any): o is NoSuchPublicKey {
    return _smithy.isa(o, "NoSuchPublicKey");
  }
}

/**
 * <p>A resource that was specified is not valid.</p>
 */
export interface NoSuchResource
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "NoSuchResource";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchResource {
  export function isa(o: any): o is NoSuchResource {
    return _smithy.isa(o, "NoSuchResource");
  }
}

/**
 * <p>The specified streaming distribution does not exist.</p>
 */
export interface NoSuchStreamingDistribution
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "NoSuchStreamingDistribution";
  $fault: "client";
  Message?: string;
}

export namespace NoSuchStreamingDistribution {
  export function isa(o: any): o is NoSuchStreamingDistribution {
    return _smithy.isa(o, "NoSuchStreamingDistribution");
  }
}

/**
 * <p>The precondition given in one or more of the request-header fields evaluated to <code>false</code>. </p>
 */
export interface PreconditionFailed
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "PreconditionFailed";
  $fault: "client";
  Message?: string;
}

export namespace PreconditionFailed {
  export function isa(o: any): o is PreconditionFailed {
    return _smithy.isa(o, "PreconditionFailed");
  }
}

/**
 * <p>The specified public key already exists.</p>
 */
export interface PublicKeyAlreadyExists
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "PublicKeyAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace PublicKeyAlreadyExists {
  export function isa(o: any): o is PublicKeyAlreadyExists {
    return _smithy.isa(o, "PublicKeyAlreadyExists");
  }
}

/**
 * <p>The specified public key is in use. </p>
 */
export interface PublicKeyInUse
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "PublicKeyInUse";
  $fault: "client";
  Message?: string;
}

export namespace PublicKeyInUse {
  export function isa(o: any): o is PublicKeyInUse {
    return _smithy.isa(o, "PublicKeyInUse");
  }
}

/**
 * <p>No profile specified for the field-level encryption query argument.</p>
 */
export interface QueryArgProfileEmpty
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "QueryArgProfileEmpty";
  $fault: "client";
  Message?: string;
}

export namespace QueryArgProfileEmpty {
  export function isa(o: any): o is QueryArgProfileEmpty {
    return _smithy.isa(o, "QueryArgProfileEmpty");
  }
}

/**
 * <p>The caller reference you attempted to create the streaming distribution with
 * 			is associated with another distribution</p>
 */
export interface StreamingDistributionAlreadyExists
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "StreamingDistributionAlreadyExists";
  $fault: "client";
  Message?: string;
}

export namespace StreamingDistributionAlreadyExists {
  export function isa(o: any): o is StreamingDistributionAlreadyExists {
    return _smithy.isa(o, "StreamingDistributionAlreadyExists");
  }
}

/**
 * <p>The specified CloudFront distribution is not disabled. You must disable
 * 			the distribution before you can delete it.</p>
 */
export interface StreamingDistributionNotDisabled
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "StreamingDistributionNotDisabled";
  $fault: "client";
  Message?: string;
}

export namespace StreamingDistributionNotDisabled {
  export function isa(o: any): o is StreamingDistributionNotDisabled {
    return _smithy.isa(o, "StreamingDistributionNotDisabled");
  }
}

/**
 * <p>You cannot create more cache behaviors for the distribution.</p>
 */
export interface TooManyCacheBehaviors
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyCacheBehaviors";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCacheBehaviors {
  export function isa(o: any): o is TooManyCacheBehaviors {
    return _smithy.isa(o, "TooManyCacheBehaviors");
  }
}

/**
 * <p>You cannot create anymore custom SSL/TLS certificates.</p>
 */
export interface TooManyCertificates
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyCertificates";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCertificates {
  export function isa(o: any): o is TooManyCertificates {
    return _smithy.isa(o, "TooManyCertificates");
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin access identities allowed.</p>
 */
export interface TooManyCloudFrontOriginAccessIdentities
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyCloudFrontOriginAccessIdentities";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCloudFrontOriginAccessIdentities {
  export function isa(o: any): o is TooManyCloudFrontOriginAccessIdentities {
    return _smithy.isa(o, "TooManyCloudFrontOriginAccessIdentities");
  }
}

/**
 * <p>Your request contains more cookie names in the whitelist than are allowed per cache behavior.</p>
 */
export interface TooManyCookieNamesInWhiteList
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyCookieNamesInWhiteList";
  $fault: "client";
  Message?: string;
}

export namespace TooManyCookieNamesInWhiteList {
  export function isa(o: any): o is TooManyCookieNamesInWhiteList {
    return _smithy.isa(o, "TooManyCookieNamesInWhiteList");
  }
}

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 */
export interface TooManyDistributionCNAMEs
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyDistributionCNAMEs";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionCNAMEs {
  export function isa(o: any): o is TooManyDistributionCNAMEs {
    return _smithy.isa(o, "TooManyDistributionCNAMEs");
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of distributions allowed.</p>
 */
export interface TooManyDistributions
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyDistributions";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributions {
  export function isa(o: any): o is TooManyDistributions {
    return _smithy.isa(o, "TooManyDistributions");
  }
}

/**
 * <p>The maximum number of distributions have been associated with the specified configuration for field-level encryption.</p>
 */
export interface TooManyDistributionsAssociatedToFieldLevelEncryptionConfig
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionsAssociatedToFieldLevelEncryptionConfig {
  export function isa(
    o: any
  ): o is TooManyDistributionsAssociatedToFieldLevelEncryptionConfig {
    return _smithy.isa(
      o,
      "TooManyDistributionsAssociatedToFieldLevelEncryptionConfig"
    );
  }
}

/**
 * <p>Processing your request would cause the maximum number of distributions with Lambda function associations per owner
 * 			to be exceeded.</p>
 */
export interface TooManyDistributionsWithLambdaAssociations
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyDistributionsWithLambdaAssociations";
  $fault: "client";
  Message?: string;
}

export namespace TooManyDistributionsWithLambdaAssociations {
  export function isa(o: any): o is TooManyDistributionsWithLambdaAssociations {
    return _smithy.isa(o, "TooManyDistributionsWithLambdaAssociations");
  }
}

/**
 * <p>The maximum number of configurations for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionConfigs
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyFieldLevelEncryptionConfigs";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionConfigs {
  export function isa(o: any): o is TooManyFieldLevelEncryptionConfigs {
    return _smithy.isa(o, "TooManyFieldLevelEncryptionConfigs");
  }
}

/**
 * <p>The maximum number of content type profiles for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionContentTypeProfiles
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyFieldLevelEncryptionContentTypeProfiles";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionContentTypeProfiles {
  export function isa(
    o: any
  ): o is TooManyFieldLevelEncryptionContentTypeProfiles {
    return _smithy.isa(o, "TooManyFieldLevelEncryptionContentTypeProfiles");
  }
}

/**
 * <p>The maximum number of encryption entities for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionEncryptionEntities
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyFieldLevelEncryptionEncryptionEntities";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionEncryptionEntities {
  export function isa(
    o: any
  ): o is TooManyFieldLevelEncryptionEncryptionEntities {
    return _smithy.isa(o, "TooManyFieldLevelEncryptionEncryptionEntities");
  }
}

/**
 * <p>The maximum number of field patterns for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionFieldPatterns
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyFieldLevelEncryptionFieldPatterns";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionFieldPatterns {
  export function isa(o: any): o is TooManyFieldLevelEncryptionFieldPatterns {
    return _smithy.isa(o, "TooManyFieldLevelEncryptionFieldPatterns");
  }
}

/**
 * <p>The maximum number of profiles for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionProfiles
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyFieldLevelEncryptionProfiles";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionProfiles {
  export function isa(o: any): o is TooManyFieldLevelEncryptionProfiles {
    return _smithy.isa(o, "TooManyFieldLevelEncryptionProfiles");
  }
}

/**
 * <p>The maximum number of query arg profiles for field-level encryption have been created.</p>
 */
export interface TooManyFieldLevelEncryptionQueryArgProfiles
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyFieldLevelEncryptionQueryArgProfiles";
  $fault: "client";
  Message?: string;
}

export namespace TooManyFieldLevelEncryptionQueryArgProfiles {
  export function isa(
    o: any
  ): o is TooManyFieldLevelEncryptionQueryArgProfiles {
    return _smithy.isa(o, "TooManyFieldLevelEncryptionQueryArgProfiles");
  }
}

/**
 * <p>Your request contains too many headers in forwarded values.</p>
 */
export interface TooManyHeadersInForwardedValues
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyHeadersInForwardedValues";
  $fault: "client";
  Message?: string;
}

export namespace TooManyHeadersInForwardedValues {
  export function isa(o: any): o is TooManyHeadersInForwardedValues {
    return _smithy.isa(o, "TooManyHeadersInForwardedValues");
  }
}

/**
 * <p>You have exceeded the maximum number of allowable InProgress invalidation batch requests, or invalidation objects.</p>
 */
export interface TooManyInvalidationsInProgress
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyInvalidationsInProgress";
  $fault: "client";
  Message?: string;
}

export namespace TooManyInvalidationsInProgress {
  export function isa(o: any): o is TooManyInvalidationsInProgress {
    return _smithy.isa(o, "TooManyInvalidationsInProgress");
  }
}

/**
 * <p>Your request contains more Lambda function associations than are allowed per distribution.</p>
 */
export interface TooManyLambdaFunctionAssociations
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyLambdaFunctionAssociations";
  $fault: "client";
  Message?: string;
}

export namespace TooManyLambdaFunctionAssociations {
  export function isa(o: any): o is TooManyLambdaFunctionAssociations {
    return _smithy.isa(o, "TooManyLambdaFunctionAssociations");
  }
}

/**
 * <p>Your request contains too many origin custom headers.</p>
 */
export interface TooManyOriginCustomHeaders
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyOriginCustomHeaders";
  $fault: "client";
  Message?: string;
}

export namespace TooManyOriginCustomHeaders {
  export function isa(o: any): o is TooManyOriginCustomHeaders {
    return _smithy.isa(o, "TooManyOriginCustomHeaders");
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of origin groups allowed.</p>
 */
export interface TooManyOriginGroupsPerDistribution
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyOriginGroupsPerDistribution";
  $fault: "client";
  Message?: string;
}

export namespace TooManyOriginGroupsPerDistribution {
  export function isa(o: any): o is TooManyOriginGroupsPerDistribution {
    return _smithy.isa(o, "TooManyOriginGroupsPerDistribution");
  }
}

/**
 * <p>You cannot create more origins for the distribution.</p>
 */
export interface TooManyOrigins
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyOrigins";
  $fault: "client";
  Message?: string;
}

export namespace TooManyOrigins {
  export function isa(o: any): o is TooManyOrigins {
    return _smithy.isa(o, "TooManyOrigins");
  }
}

/**
 * <p>The maximum number of public keys for field-level encryption have been created. To create a new public key, delete one of the existing keys.</p>
 */
export interface TooManyPublicKeys
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyPublicKeys";
  $fault: "client";
  Message?: string;
}

export namespace TooManyPublicKeys {
  export function isa(o: any): o is TooManyPublicKeys {
    return _smithy.isa(o, "TooManyPublicKeys");
  }
}

/**
 * <p>Your request contains too many query string parameters.</p>
 */
export interface TooManyQueryStringParameters
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyQueryStringParameters";
  $fault: "client";
  Message?: string;
}

export namespace TooManyQueryStringParameters {
  export function isa(o: any): o is TooManyQueryStringParameters {
    return _smithy.isa(o, "TooManyQueryStringParameters");
  }
}

/**
 * <p>Your request contains more CNAMEs than are allowed per distribution.</p>
 */
export interface TooManyStreamingDistributionCNAMEs
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyStreamingDistributionCNAMEs";
  $fault: "client";
  Message?: string;
}

export namespace TooManyStreamingDistributionCNAMEs {
  export function isa(o: any): o is TooManyStreamingDistributionCNAMEs {
    return _smithy.isa(o, "TooManyStreamingDistributionCNAMEs");
  }
}

/**
 * <p>Processing your request would cause you to exceed the maximum number of streaming distributions allowed.</p>
 */
export interface TooManyStreamingDistributions
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyStreamingDistributions";
  $fault: "client";
  Message?: string;
}

export namespace TooManyStreamingDistributions {
  export function isa(o: any): o is TooManyStreamingDistributions {
    return _smithy.isa(o, "TooManyStreamingDistributions");
  }
}

/**
 * <p>Your request contains more trusted signers than are allowed per distribution.</p>
 */
export interface TooManyTrustedSigners
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TooManyTrustedSigners";
  $fault: "client";
  Message?: string;
}

export namespace TooManyTrustedSigners {
  export function isa(o: any): o is TooManyTrustedSigners {
    return _smithy.isa(o, "TooManyTrustedSigners");
  }
}

/**
 * <p>One or more of your trusted signers don't exist.</p>
 */
export interface TrustedSignerDoesNotExist
  extends _smithy.SmithyException,
    $MetadataBearer {
  name: "TrustedSignerDoesNotExist";
  $fault: "client";
  Message?: string;
}

export namespace TrustedSignerDoesNotExist {
  export function isa(o: any): o is TrustedSignerDoesNotExist {
    return _smithy.isa(o, "TrustedSignerDoesNotExist");
  }
}