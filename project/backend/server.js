const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const videoRoutes = require("./routes/videoRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Add routes
app.use("/api/videos", videoRoutes);

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
