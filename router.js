const controller = require("./controllers");
const { routes } = require("./config");
module.exports = function router(req, res) {
  const actualController = getControllerBy(req.url);
  if (actualController) controller[actualController](req, res);
  else controller.notfound(req, res);
};

function getControllerBy(Route) {
  const route = routes.find((r) => r.route === Route);
  return route?.controller;
}
