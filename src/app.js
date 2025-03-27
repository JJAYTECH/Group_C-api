const express = require("express");
const app = express();
const examGroupRoute = require("./routes/examGroup");

app.use("/api", examGroupRoute);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});