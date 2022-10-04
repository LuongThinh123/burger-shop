const Course = require("../model/Courses");

const SiteController = {
  // [GET] /
  index: (req, res, next) => {
    res.send("Home");
  },

  //[GET] /search
  search: (req, res) => {
    res.send("SEARCH");
  },
};

module.exports = SiteController;
