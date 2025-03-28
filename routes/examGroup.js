// UPDATE /:id (this now correctly maps to /exams/:id)
router.put("/:id", (req, res) => {
    const examId = parseInt(req.params.id);
    let exam = exams.find(e => e.id === examId);
    
    if (!exam) return res.status(404).json({ message: "Exam not found" });
    
    exam.subject = req.body.subject || exam.subject;
    exam.date = req.body.date || exam.date;
    
    res.json(exam);
    });
    
    module.exports = router;