const https = require("https");
const Server = https.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, world!");
});

const port = 3000;
Server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
