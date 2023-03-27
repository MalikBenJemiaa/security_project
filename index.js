const a = require("express");
const path = require("path");
const db = require("./model/getDataWithUsername");
const rout = a();
rout.use(a.urlencoded({ extended: true }));
// Configuration
rout.use(a.static(path.join(__dirname, "style")));
rout.set("view engine", "ejs");
rout.set("views", path.join(__dirname, "views"));
rout.get("/", (req, res) => {
  res.render("main.ejs", { name: "melek", lastName: "ben jemiaa" });
  // res.status(200).json({ msg: "hello" });
});
rout.post("/getinfo", (req, res) => {
  const username = req.body.username;
  db.get_info(username)
    .then((result) => {
      res.status(200).json({ msg: "hello", data: username, result });
    })
    .catch(() => {
      res.status(200).json({ msg: "hello", data: username });
    });
  // console.log("Username: " + username);
  // res.status(200).json({ msg: "hello", data: username });
});
rout.listen(3000, () => {
  console.log("server running");
});
