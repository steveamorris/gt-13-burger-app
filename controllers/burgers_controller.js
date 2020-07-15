const express = require("express");

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require("../models/burger");

router.get("/", function (req, res) {
    burger.all(function (data) {
      console.log(data);

      const hbsexp = {
        burgers: data,
      };
        
        for (let i = 0; i < hbsexp.length; i++) {
          const element = hbsexp.burger[i];
          
        }
  
    //   const hbsexp = {
    //     burgers: data,
    //   };
      console.log(hbsexp);
      res.render("index", hbsexp);
    });
  });






module.exports = router;