const exp = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

const user = require("./routes/api/user");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/post");

const app = exp();
const port = process.env.PORT || 5000;

//Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB connection
const db_con = require("./config/key").mongoURL;

//Connecting to DB
mongoose
  .connect(db_con)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport Config
require("./config/passport")(passport);

// Use routes
app.use("/api/user", user);
app.use("/api/profile", profile);
app.use("/api/post", posts);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(exp.static("client/build"));
}

app.listen(port, () => console.log(`Server running on port ${port}`));
