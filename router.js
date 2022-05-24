const controller = require("./controllers");
const { routes } = require("./config");
console.log(routes);
module.exports = function router(req, res) {
  switch (req.url) {
    case "/":
      controller.main(req, res);
      break;
    case "/distance":
      controller.distanceapi(req, res);
      break;
    default:
      controller.notfound(req, res);
      break;
  }
};
