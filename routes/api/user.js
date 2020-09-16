const exp = require("express");
const router = exp.Router();

// @route GET api/user/test
// @desc Tests users route
// @access Public
router.get("/test", (req, res) => res.json({ msg: "User works!" }));

module.exports = router;
