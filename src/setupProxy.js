const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    proxy({
      target: "http://partnerapi.funda.nl",
      logLevel: "debug",
      pathRewrite: {
        '^/api': '/'
      }
    })
  );
};