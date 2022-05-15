const router = require("express").Router();
const path = require("path");

//returns notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

//returns index.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

module.exports = router;
