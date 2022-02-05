const express = require("express");
const apiRouter = express.Router();

// Import and mount the minionsRouter
const minionsRouter = require("./routes/minions");
apiRouter.use("/minions", minionsRouter);

// // Import and mount the ideasRouter
// const { ideasRouter } = require("./routes/ideas");
// apiRouter.use("/ideas", ideasRouter);

// // Import and mount the meetingsRouter
// const { meetingsRouter } = require("./routes/meetings");
// apiRouter.use("/meetings", meetingsRouter);

module.exports = apiRouter;
