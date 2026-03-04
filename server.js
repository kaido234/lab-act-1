const express = require('express');
const app = express();
const PORT = 3000;


const students = [
    { id: 1, firstname: "John", lastname: "Lustre", course: "BSIT", year_level: "3", section: "A", gender: "Male" },
    { id: 2, firstname: "Mery", lastname: "Rose", course: "BSCS", year_level: "2", section: "B", gender: "Female" },
    { id: 3, firstname: "Dave", lastname: "Isip", course: "BSIS", year_level: "4", section: "C", gender: "Non-binary" }
];


app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] ${req.method} request to ${req.url}`);
    next(); 
});


app.get('/api/students', (req, res) => {
    res.json(students);
});


app.get('/api/students/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);

    if (student) {
        res.json(student);
    } else {
        
        res.status(404).json({ message: "Student not found" });
    }
});


app.use((req, res) => {
    res.status(404).send("Route not found");
});


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});