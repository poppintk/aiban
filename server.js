const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("*", (req, res) => {
    if (req.get("host") == "www.abhb.com.cn") {
      res.status(301).redirect("http://www.hnabzm.com");
    }
    return handle(req, res);
  });

  server.listen(80, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:80");
  });
});
