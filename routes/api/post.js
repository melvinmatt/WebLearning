const exp = require("express");
const router = exp.Router();

// @route GET api/post/test
// @desc Tests posts route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "Posts works!" }));

module.exports = router;
