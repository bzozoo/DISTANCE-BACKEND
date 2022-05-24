const http = require("http");
const router = require("./router");
const app = http.createServer(router);
app.listen(8080, () => console.log("Server started..."));
