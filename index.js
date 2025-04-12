require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});
