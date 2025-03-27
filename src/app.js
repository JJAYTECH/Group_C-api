const express = require('express');
const router = express.Router();

let exams = [
    { id: 1, name: "Midterm Exam" },
    { id: 2, name: "Final Exam" }
];

    // PUT /exams/:id - Updates an exam
router.put('/:id', (req, res) => {
    const examId = parseInt(req.params.id);
    const exam = exams.find(ex => ex.id === examId);
    
    if (!exam) {
    return res.status(404).json({ message: "Exam not found" });
    }
    
    exam.name = req.body.name || exam.name;
    res.json({ message: "Exam updated", exam });
    });

module.exports = router;