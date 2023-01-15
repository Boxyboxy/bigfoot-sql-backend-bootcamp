const express = require("express");
const { initializeMiddleware, errorHandler } = require("./middleware");
const { PORT } = require("./configs");
const sightingsRouter = require("./routers/sightingsRouter");

const app = express();

initializeMiddleware(app);

app.use("/sightings", sightingsRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
