const router = require("express").Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
let database = require("../../db/db.json");

router.get("/notes", (req, res) => {
  database = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));
  res.json(database);
});

router.post("/notes", (req, res) => {
  let note = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  database.push(note);
  fs.writeFileSync("./db/db.json", JSON.stringify(database));

  res.json(database);
});
module.exports = router;
