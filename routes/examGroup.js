// POST / (this now correctly maps to /exams)
router.post("/", (req, res) => {
    const newExam = {
    id: exams.length + 1,
    subject: req.body.subject,
    date: req.body.date
    };
    exams.push(newExam);
    res.status(201).json(newExam);
    });