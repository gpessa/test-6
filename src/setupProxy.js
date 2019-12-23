const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    "/feeds",
    proxy({
      target: "http://partnerapi.funda.nl",
      logLevel: "debug"
    })
  );
};
