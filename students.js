"use strict";
// created a variable to pull out all students
let allStudents = DATABASE.students

function renderStudent(id) {
let div = document.createElement("div");
let student = DATABASE.students[id];
div.id = "container"
div.innerHTML = `
<header>${student.firstName} ${student.lastName} (total: ${completeCredits(student)} credits)</header>
<div>
        <div id="course">
            <h3>Courses:</h3>
            <div id="courses">
                ${renderCourses(student)}
            </div>
        </div>
    </div>`
    return div
}