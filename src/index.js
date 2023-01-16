const express = require("express");
const { initializeMiddleware, errorHandler } = require("./middleware");
const { PORT } = require("./configs");
const sightingsRouter = require("./routers/sightingsRouter");
const commentsRouter = require("./routers/commentsRouter");
const likesRouter = require("./routers/likesRouter");
const app = express();

initializeMiddleware(app);

app.use("/sightings", sightingsRouter);
app.use("/comments", commentsRouter);
app.use("/likes", likesRouter);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
