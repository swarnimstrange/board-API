const express = require("express");
const router = express.Router();
const Board = require("../api_module");

router.get("/", async (req, res) => {
  try {
    const boards = await Board.find();
    res.json(boards);
  } catch (err) {
    res.send("Error " + err);
  }
});

router.post("/", async (req, res) => {
  const boards = await Board.find();
  const board = new Board({
    title: req.body.title,
    stage: req.body.stage,
  });
  try {
    const a1 = await board.save();
    res.status(201).json(a1);
  } catch (err) {
    res.status(400).send("Error");
  }
});

router.put("/:id", async (req, res) => {
  const board = await Board.findById(req.params.id);
  if (parseInt(req.body.stage) < 0) {
    res.status(400).send("wrong value");
    return;
  } else if (parseInt(req.body.stage) > 3) {
    res.status(400).send("wrong value");
    return;
  } else {
    try {
      board.stage = req.body.stage;
      const a1 = await board.save();
      res.json(a1);
    } catch (err) {
      res.send("Error");
    }
  }
});

module.exports = router;
