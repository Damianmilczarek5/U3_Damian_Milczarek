"use strict";

let allCourses = DATABASE.courses
let allTeachers = DATABASE.teachers
let allStudents = DATABASE.students

function renderCourse(id){
    let div = document.createElement("div")
    div.id = "container"
    div.innerHTML =` 
    <div id="course">
    <header>${courseTitle(id)} (${courseTotalCredits(id)} credits)</header>
    <div id="faculty">
        <div id="responsible">
            <h3>Course responsible:</h3>
            <p>${courseResponsible(id)}</p>
        </div>
        <div id="teachers">
            <h3>Teachers:</h3>
            <div>
                ${allCourseTeachers(id)}
            </div>
        </div>
    </div>
    <h3>Students:</h3>
    <div id="students">
        ${allCourseStudents(id)}
    </div>
    </div>
    `
    document.querySelector("#wrapper").appendChild(div)
    return div
}

function courseTitle (id){
    let course = DATABASE.courses[id]
    return course.title
}

function courseTotalCredits (id) {
    let course = DATABASE.courses[id]
    return course.totalCredits
}

function courseResponsible (id) {
    let course = DATABASE.courses[id]
    let teachersNames = allTeachers.map((teacher) => teacher.firstName + " " + teacher.lastName + " " + `(${teacher.post})`)

    let responsible = course.courseResponsible
    return teachersNames[responsible]
}

