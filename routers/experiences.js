const { Router } = require("express");
const User = require("../models/").user;
const Experiences = require("../models").experience;
const WorkPlace = require("../models").workplace;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const experiences = await Experiences.findAll({ include: WorkPlace });
    if (!experiences || experiences === 0) {
      return res.status(404).send({ message: "exprience not found" });
    }
    res.status(200).send({
      experiences,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
module.exports = router;