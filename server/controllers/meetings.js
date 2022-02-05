const {
  getAllFromDatabase,
  addToDatabase,
  createMeeting,
  deleteAllFromDatabase,
} = require("../db");

// Get all meetings
const getAllMeetings = (req, res, next) => {
  const meetings = getAllFromDatabase("meetings");
  if (meetings) {
    res.status(200).send(meetings);
  } else {
    res.status(404).send();
  }
};

// Create meeting
const makeMeeting = (req, res, next) => {
  const createdMeeting = addToDatabase("meetings", createMeeting());
  if (createdMeeting) {
    res.status(201).send(createdMeeting);
  } else {
    res.status(400).send();
  }
};

// Delete all meetings
const deleteAllMeetings = (req, res, next) => {
  const deletedMeetings = deleteAllFromDatabase("meetings");
  if (deletedMeetings) {
    res.status(204).send();
  } else {
    res.status(404).send();
  }
};

module.exports = {
  getAllMeetings,
  makeMeeting,
  deleteAllMeetings,
};
