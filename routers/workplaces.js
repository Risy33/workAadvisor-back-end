const { Router } = require("express");
const Experiences = require("../models").experience;
const WorkPlace = require("../models").workPlace;
const router = new Router();

router.get("/", async (req, res, next) => {
  try {
    const workplaces = await WorkPlace.findAll({ include: Experiences });
    if (!workplaces || workplaces === 0) {
      return res.status(404).send({ message: "workplace not found" });
    }
    res.status(200).send({ workplaces });
  } catch (e) {
    console.log(e.message);
    next(e);
  }
});

module.exports = router;
