const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require("../db");

// Get all minions
const getAllMinions = (req, res, next) => {
  const minions = getAllFromDatabase("minions");
  if (minions) {
    res.status(200).send(minions);
  } else {
    res.status(404).send();
  }
};

// Create minion
const createMinion = (req, res, next) => {
  const createdMinion = addToDatabase("minions", req.body);
  if (createdMinion) {
    res.status(201).send(createdMinion);
  } else {
    res.status(400).send();
  }
};

// Get a single minion
const getMinionById = (req, res, next) => {
  const foundMinion = getFromDatabaseById(
    "minions",
    req.params.minionId.toString()
  );
  if (foundMinion) {
    res.status(200).send(foundMinion);
  } else {
    res.status(404).send();
  }
};

// Update minion
const updateMinion = (req, res, next) => {
  const updatedMinion = updateInstanceInDatabase("minions", req.body);
  if (updatedMinion) {
    res.status(200).send(updatedMinion);
  } else {
    res.status(404).send();
  }
};

// Delete minion
const deleteMinion = (req, res, next) => {
  const deletedMinion = deleteFromDatabasebyId(
    "minions",
    req.params.minionId.toString()
  );
  if (deletedMinion) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getAllMinions,
  getMinionById,
  updateMinion,
  createMinion,
  deleteMinion,
};
