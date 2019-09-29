const express = require("express");
const next = require("next");
const { join } = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const redirects = [
  { from: "http://www.abhb.com.cn/", to: "http://www.hnabzm.com" }
];

app.prepare().then(() => {
  const server = express();

  redirects.forEach(({ from, to, type = 301, method = "get" }) => {
    server[method](from, (req, res) => {
      res.redirect(type, to);
    });
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(80, err => {
    if (err) throw err;
    console.log("> Ready on http://localhost:80");
  });
});
