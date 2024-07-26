const ENV = {
  DEVELOPMENT : 'development',
  STAGING     : 'staging',
  PRODUCTION  : 'production',
}
const ReqMethods = {
  GET    : 'get',
  POST   : 'post',
  PUT    : 'put',
  DELETE : 'delete',
  ALL    : 'all'
}

const ResponseStatus = {
  SUCCESS         : 200,
  BAD_REQUEST     : 400,
  UNAUTHORIZED    : 401,
  FORBIDDEN       : 403,
  NOT_FOUND       : 404,
  INTERNAL_ERROR  : 500,
}

const ResponseMessages = {
  INTERNAL_ERROR   : 'Internal server error',
  VALIDATION_ERROR : 'Invalid or missing field',
  AUTH_ERROR       : 'Access denied invalid credentials',
  FORBIDDEN        : 'Forbidden, you don\'t have permission to access',
}

const ConnectionTypes = {
  BRAND : 'brand'
}

const GHLAppStoreEvents = {
  PRODUCT_PURCHASE : 'product_purchase',
  GHL_INTEGRATE    : 'ghl_integrate',
  AGENCY_USER      : 'agency_user'
}

module.exports = {
  ENV,
  ReqMethods,
  ResponseStatus,
  ResponseMessages,
  ConnectionTypes,
  GHLAppStoreEvents,
  user : require('./user')
}