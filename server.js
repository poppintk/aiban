const express = require("express");
const next = require("next");
const { join } = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const redirects = [
  { from: "/about", to: "http://www.hnabzm.com/about" },
  { from: "/case", to: "http://www.hnabzm.com/case" },
  { from: "/contact", to: "http://www.hnabzm.com/contact" },
  { from: "/coop", to: "http://www.hnabzm.com/coop" },
  { from: "/culture", to: "http://www.hnabzm.com/culture" },
  { from: "/honor", to: "http://www.hnabzm.com/honor" },
  { from: "/index", to: "http://www.hnabzm.com/index" },
  { from: "/", to: "http://www.hnabzm.com" },
  { from: "/news_1", to: "http://www.hnabzm.com/news_1" },
  { from: "/news_2", to: "http://www.hnabzm.com/news_2" },
  { from: "/news_3", to: "http://www.hnabzm.com/news_3" },
  { from: "/news_4", to: "http://www.hnabzm.com/news_4" },
  { from: "/news_5", to: "http://www.hnabzm.com/news_5" },
  { from: "/news_6", to: "http://www.hnabzm.com/news_6" },
  { from: "/news", to: "http://www.hnabzm.com/news" },
  { from: "/qa", to: "http://www.hnabzm.com/qa" },
  { from: "/service", to: "http://www.hnabzm.com/service" },
  { from: "/team", to: "http://www.hnabzm.com/team" },
  { from: "/tech", to: "http://www.hnabzm.com/tech" },
  { from: "/tech1", to: "http://www.hnabzm.com/tech1" },
  { from: "/tech2", to: "http://www.hnabzm.com/tech2" },
  { from: "/tech3", to: "http://www.hnabzm.com/tech3" },
  { from: "/tech4", to: "http://www.hnabzm.com/tech4" },
  { from: "/tech5", to: "http://www.hnabzm.com/tech5" },
  { from: "/tech6", to: "http://www.hnabzm.com/tech6" },
  { from: "/tech7", to: "http://www.hnabzm.com/tech7" },
  { from: "/tech8", to: "http://www.hnabzm.com/tech8" }
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
