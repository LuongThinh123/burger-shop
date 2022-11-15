const Course = require("../model/Courses");

const CoursesController = {
  //[GET] /courses/
  index: async (req, res, next) => {
    try {
      const courses = await Course.find({});
      res.status(200).json(courses);
    } catch (err) {
      res.status(404).json({ message: "Lỗi" });
    }
  },
  //[GET] /courses/:slug
  show: async (req, res, next) => {
    try {
      let course = await Course.findOne({ slug: req.params.slug });
      console.log(req.params.slug);
      console.log(course);
      res.status(200).res.json(course);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = CoursesController;
