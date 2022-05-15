const router = require("express").Router();
const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const dbPath = path.join(__dirname, "../../db/db.json");

let database = require("../../db/db.json");

// gets existing notes from db
router.get("/notes", (req, res) => {
  database = JSON.parse(fs.readFileSync("./db/db.json", "UTF-8"));
  res.json(database);
});

// post notes
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

router.delete("/notes/:id", (req, res) => {
  //saves data for identifying the note to delete
  let deleteByID = req.params.id;

  // search database array for deleted note index
  let removeNote = database.findIndex((n) => n.id === deleteByID);

  // removes note from array
  database.splice(removeNote, 1);

  //stringify the array
  content = JSON.stringify(database);

  //overwrites the database file with modified content
  fs.writeFile(dbPath, content, function (err) {
    if (err) throw err;
    console.log("Deleted!");
  });

  res.json(dbPath);
});

module.exports = router;
