const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger");

router.get("/", function (req, res) {
  burger.all(function (data) {
      console.log("Burger All in conrroller")
    console.log(data);

    const hbsexp = {
      burgers: data,
    };

    for (let i = 0; i < hbsexp.length; i++) {
      const element = hbsexp.burger[i];
    }

    res.render("index", hbsexp);
  });
});

router.post("/", function (req, res) {
    const new_burger = req.body.burger;
    console.log(new_burger);

    burger.create("burger_name =", new_burger  ,function (data) {
        //console.log("This is my data: ", data);
        res.redirect("/");
    });
});



module.exports = router;
