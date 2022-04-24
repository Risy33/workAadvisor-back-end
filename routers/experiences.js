const { Router } = require("express");
const User = require("../models/").user;
const Experiences = require("../models").experience;
const WorkPlaces = require("../models").workPlace;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const experiences = await Experiences.findAll({ include: WorkPlaces });
    if (!experiences || experiences === 0) {
      return res.status(404).send({ message: "experience not found" });
    }
    res.status(200).send({
      experiences,
    });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

router.patch("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const experiences = await Experiences.findByPk(id);
    const useful = await experiences.update({ useful: experiences.useful + 1 });
    console.log(useful);
    res.send(useful);
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});
module.exports = router;
