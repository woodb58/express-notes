const router = require("express").Router();
const path = require("path");

// set path to notes.html
router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});
// set path to landing page
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../../index.html"));
});

module.exports = router;
