const allowedHosts = require("./config.json").allowedHosts;
const Template = require("./templates");
module.exports = {
  main,
  distanceapi,
  notfound
};

function main(req, res) {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  res.write(Template.MainTempate());
  res.end();
}

async function distanceapi(req, res) {
  const distance = require("./distance");
  allowedHosts.includes(req.headers.origin) &&
    res.setHeader("Access-Control-Allow-Origin", req.headers.origin);
  res.setHeader("Content-Type", "application/json");
  let data = "{}";
  if (req.method === "POST") {
    const buffers = [];
    for await (const chunk of req) {
      buffers.push(chunk);
    }
    data = Buffer.concat(buffers).toString();
  }
  console.log(data);
  res.write(
    JSON.stringify({
      distance: 0,
      YourRequest: JSON.parse(data)
    })
  );
  res.end();
}

function notfound(req, res) {
  res.writeHead(404, { "Content-Type": "text/html" });
  res.write("PANGE NOT FOUND...");
  res.end();
}
