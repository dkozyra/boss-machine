const express = require("express");
const {
  getAllMeetings,
  makeMeeting,
  deleteAllMeetings,
} = require("../controllers/meetings");

const meetingsRouter = express.Router();

// Get all meetings
meetingsRouter.get("/", getAllMeetings);

// Create meeting
meetingsRouter.post("/", makeMeeting);

// Delete all meetings
meetingsRouter.delete("/", deleteAllMeetings);

module.exports = meetingsRouter;
