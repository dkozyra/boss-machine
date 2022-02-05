const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("../db");

// Get all ideas
const getAllIdeas = (req, res, next) => {
  const ideas = getAllFromDatabase("ideas");
  if (ideas) {
    res.status(200).send(ideas);
  } else {
    res.status(404).send();
  }
};

// Create idea
const createIdea = (req, res, next) => {
  const createdIdea = addToDatabase("ideas", req.body);
  if (createdIdea) {
    res.status(201).send(createdIdea);
  } else {
    res.status(400).send();
  }
};

// Get a single idea
const getIdeaById = (req, res, next) => {
  const foundIdea = getFromDatabaseById("ideas", req.params.ideaId.toString());
  if (foundIdea) {
    res.status(200).send(foundIdea);
  } else {
    res.status(404).send();
  }
};

// Update idea
const updateIdea = (req, res, next) => {
  const updatedIdea = updateInstanceInDatabase("ideas", req.body);
  if (updatedIdea) {
    res.status(200).send(updatedIdea);
  } else {
    res.status(404).send();
  }
};

// Delete idea
const deleteIdea = (req, res, next) => {
  const deletedIdea = deleteFromDatabasebyId(
    "ideas",
    req.params.ideaId.toString()
  );
  if (deletedIdea) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getAllIdeas,
  getIdeaById,
  updateIdea,
  createIdea,
  deleteIdea,
};
