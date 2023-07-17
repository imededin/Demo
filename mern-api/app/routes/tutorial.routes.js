
  const tutorials = require("../controllers/account-controller.js");
  const express = require("express");
  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/register", tutorials.register);
  router.post("/login", tutorials.login);
  router.post("/userData", tutorials.userData);

  // Retrieve all Tutorials
  router.get("/", tutorials.hello);

  // Retrieve all published Tutorials
  

  module.exports = router;

