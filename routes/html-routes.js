// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/index.html"));
    res.render("index");
  });
  // cms route loads cms.html
  // app.get("/results", function(req, res) {
  //   res.sendFile(path.join(__dirname, "../public/results.html"));
  //   // res.render("results");
  // });
  // survey route loads survey handlebars
  app.get("/survey", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/survey.html"));
    res.render("survey");
  });
  // recBuild route loads recommendations handlebars
  app.get("/recBuild", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/recBuild.html"));
    res.render("recBuild");
  });
  // reviews route loads reviews handlebars
  app.get("/reviews", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/reviews.html"));
    res.render("reviews");
  });
  // signup route loads signup handlebars
  app.get("/signup", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.render("signup");
  });
  // survey login loads login handlebars
  app.get("/login", function(req, res) {
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.render("login");
  });
  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

};
