const SiteController = {
  // [GET] /
  index: (req, res) => {
    res.send("Home");
  },

  //[GET] /search
  search: (req, res) => {
    res.send("SEARCH");
  },
};

module.exports = SiteController;
