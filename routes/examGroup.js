

// GET / (this now correctly maps to /exams)
router.get("/", (req, res) => {
    res.json(exams);
    });