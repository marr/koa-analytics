import { makeInvoker } from '../middleware/invocation';

/**
 * Makes an object with the API endpoints.
 *
 * @param  {object} options.someService
 * The service.
 *
 * @return {object}
 * The API to be registered.
 */
const makeFunctionalApi = ({ analytics }) => {
  // Analytics tracking
  const trackEvent = async (ctx) => {
    const data = await analytics.trackEvent(ctx.request.body);

    // .ok comes from responseCalls.js middleware.
    return ctx.ok({ data });
  };

  return {
    trackEvent
  };
};


// The default export is the registration function.
// It gets passed the router, and the container
// which is used to create the API endpoints.
// `container.cradle` is passed in as that's how
// dependencies are resolved. For more info,
// visit the Awilix docs: https://github.com/jeffijoe/awilix
export default function (router, container) {
  // What's this?
  // This trick lets us construct an API for each request.
  // That means that it may store request-local state.
  const api = makeInvoker(makeFunctionalApi);
  // router is a KoaRouter.
  router
    .post('/event', api('trackEvent'));
}
