const express = require("express");
const tasks = require("./routes/tasks");

const app = express();

app.get("/", (req, res) => {
  res.send("Task Manager App");
});

app.use("/api/v1/tasks", tasks);

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Server is listening on port ${PORT}`);
});
