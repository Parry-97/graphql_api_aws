/**
 * This function handles an incoming request, then converts it into a request
 * object for the selected data source operation.
 * You can find more code samples here: https://github.com/aws-samples/aws-appsync-resolver-samples.
 * @param ctx - Contextual information for your resolver invocation.
 * @returns - A data source request object.
 */
export function request(ctx) {
  return {
    operation: "Invoke",
    payload: {
      id: ctx.args.id,
    },
  };
}

/**
 * This function handles the response from the data source.
 * You can find more code samples here: https://github.com/aws-samples/aws-appsync-resolver-samples.
 * @param ctx - Contextual information for your resolver invocation.
 * @returns - A result that is passed to the next function, or the response handler of the pipeline resolver.
 */
export function response(ctx) {
  let prev_response = ctx.prev.result;
  prev_response.reviews = ctx.result;
  return prev_response;
}
