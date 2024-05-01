const router = express.Router();
const { User, Course } = require("../db");
const userMiddleware = require("../middleware/user");
const { default: mongoose } = require("mongoose");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    // check if a user with this username already exists
     await User.create({
        username,
        password,
    })
    res.json({
         message: 'User created successfully'
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({})
    res.json({
        courses: response
    })

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    const password = req.headers.password;
    await User.updateOne({
        username: username
    }, {
     $push: {
        purchasedCourses: courseId
     }
    })
    res.json({ 
        message: 'Course purchased successfully',
        courseId: "courseId"
     })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username: req.headers.username
    })
    const courses = await Course.find({
       _id: {
        "$in": user.purchasedCourses
       }
    })

    res.json({
        courses: courses
    })

});

module.exports = router