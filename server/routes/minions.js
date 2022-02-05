const express = require("express");
const {
  getAllMinions,
  getMinionById,
  updateMinion,
  createMinion,
  deleteMinion,
} = require("../controllers/minions");

const minionsRouter = express.Router();

// Get all minions
minionsRouter.get("/", getAllMinions);

// Create minion
minionsRouter.post("/", createMinion);

// Get a single minion
minionsRouter.get("/:minionId", getMinionById);

// Update minion
minionsRouter.put("/:minionId", updateMinion);

// Delete minion
minionsRouter.delete("/:minionId", deleteMinion);

module.exports = minionsRouter;
