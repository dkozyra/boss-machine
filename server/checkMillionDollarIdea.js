const checkMillionDollarIdea = (req, res, next) => {
  const numWeeks = req.body.numWeeks;
  const weeklyRevenue = req.body.weeklyRevenue;
  const ideaValue = Number(weeklyRevenue) * Number(numWeeks);
  ideaValue >= 1000000 ? next() : res.status(400).send();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
