const exp = require("express");
const mongoose = require("mongoose");

const user = require("./routes/api/user");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/post");

const app = exp();

//DB connection
const db_con = require("./config/key").mongoURL;

//Connecting to DB
mongoose
  .connect(db_con)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello Melvin Mathew"));

app.use("/api/user", user);
app.use("/api/profile", profile);
app.use("/api/post", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
