const express = require("express");
const {
  getAllIdeas,
  getIdeaById,
  updateIdea,
  createIdea,
  deleteIdea,
} = require("../controllers/ideas");
const checkMillionDollarIdea = require("../checkMillionDollarIdea");

const ideasRouter = express.Router();

// Get all ideas
ideasRouter.get("/", getAllIdeas);

// Create idea
ideasRouter.post("/", checkMillionDollarIdea, createIdea);

// Get a single idea
ideasRouter.get("/:ideaId", getIdeaById);

// Update idea
ideasRouter.put("/:ideaId", updateIdea);

// Delete idea
ideasRouter.delete("/:ideaId", deleteIdea);

module.exports = ideasRouter;
