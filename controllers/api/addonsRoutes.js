const router = require("express").Router();
const {Addons} = require("../../models");

router.get("/", (req,res) => {
  
})

const addonsData = [
    {
      addon_name: "standard",
      addon_type: "pizza",
      price: 9,
      calories: 100,
    },

];