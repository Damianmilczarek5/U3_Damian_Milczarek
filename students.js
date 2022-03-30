"use strict";
// created a variable to pull out all students
let allStudents = DATABASE.students

//function that renders a student
function renderStudent(id) {
let div = document.createElement("div");
let student = DATABASE.students[id];
//makes a container for the student
div.id = "container"
// html of the students container
div.innerHTML = `
<header>${student.firstName} ${student.lastName} (total: ${credits(student)} credits)</header>
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
// render students 
function renderStudents (students){
    let studentsElement = document.getElementById("wrapper")
    for ( let student of students){
        let studentElement = renderStudent(student.studentID)
        studentsElement.appendChild(studentElement)
    }
}

// function that renders stutends total credits 
function credits (student){
    let credits = []
    for (let course of student.courses){
        credits.push(course.passedCredits)
    }
    let creditsSum = 0
    for (let i = 0; i < credits.length; i++){
        creditsSum += credits[i]
    }
    return creditsSum
}



