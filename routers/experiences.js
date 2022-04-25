const { Router } = require("express");
const User = require("../models/").user;
const Experiences = require("../models").experience;
const WorkPlaces = require("../models").workPlace;
const router = new Router();
const authMiddleware = require("../auth/middleware");

router.get("/", async (req, res, next) => {
  try {
    const experiences = await Experiences.findAll({
      include: WorkPlaces,
      order: [["createdAt", "DESC"]],
    });
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

router.post("/newExperience", authMiddleware, async (req, res, next) => {
  try {
    const { title, description, image, workPlaceId, useful, status } = req.body;
    const userId = req.user.id;

    const newExperience = await Experiences.create({
      title,
      description,
      image,
      status,
      userId: userId,
      workPlaceId,
      useful,
    });

    console.log(newExperience);

    res.send(newExperience);
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
