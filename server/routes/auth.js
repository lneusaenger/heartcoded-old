import express from 'express';

const router = express.Router();

const {signup, signin, forgotPassword, resetPassword} = require("../controllers/auth");


router.get("/", (req, res) => {
    return res.json({
        data: "hello world from the API",
    });
});

router.post("/signup", signup);
router.post("/signin", signin);
// router.post("/personalprofile", personalprofile); // cannot add yet since it's not defined.
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

export default router;