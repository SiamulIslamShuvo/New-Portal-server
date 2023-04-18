const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const categories = require("./data/categories.json");

app.use(cors());

app.get("/", (req, res) => {
    res.send("dragon is running on port 5000");
});

app.get("/categories", (req, res) => {
    console.log(categories);
    res.send(categories);
});

app.listen(port, () => {
    console.log(`dragon api is running on ${port}`);
});
