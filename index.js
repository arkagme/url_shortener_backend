require("dotenv").config();
const express = require("express");
const app = require("./app");
app.use(express.json());
const PORT = process.env.PORT || 3000;
const routes = require("./routes");
app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}.`);
});

app.get('/', (req, res) => {
  res.json({
    message: 'URL Shortener API', 
    version: '1.0.0'
  });
});
