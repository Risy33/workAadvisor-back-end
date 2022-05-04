const { Router } = require("express");
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
    const { id } = req.user;

    const newExperience = await Experiences.create({
      title,
      description,
      image,
      status,
      userId: id,
      workPlaceId,
      useful,
    });

    console.log(newExperience);

    res.send(newExperience);
  } catch (error) {
    console.log(error.message);
  }
});

router.patch("/edit/:id", authMiddleware, async (req, res, next) => {
  try {
    // const { id } = req.params;
    const { title, description, image } = req.body;
    const expereinceToUpdate = await Experiences.findByPk(req.params.id);

    if (!expereinceToUpdate) {
      res.status(404).send("Experience not found");
    } else {
      await expereinceToUpdate.update({
        title,
        description,
        image,
      });
      return res.status(200).send(expereinceToUpdate);
    }
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", authMiddleware, async (req, res, next) => {
  try {
    const { id } = req.params;

    const experience = await Experiences.findByPk(id);

    console.log("experience", experience);

    if (!experience) {
      return res.status(404).send("Experience not found");
    }
    if (experience.userId !== req.user.id)
      return res
        .status(401)
        .send("user is not authorized to delete this experience");

    const deleted = await Experiences.destroy({ where: { id } });
    res.status(202).send({ message: JSON.stringify(deleted) });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
