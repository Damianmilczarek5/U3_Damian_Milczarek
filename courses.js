"use strict";

let allCourses = DATABASE.courses
let allTeachers = DATABASE.teachers
let allStudents = DATABASE.students

//renders a course by its id 
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
<<<<<<< Updated upstream

=======
// renders all the courses in database 
function renderCourses (students){
    let coursesElement = document.getElementById("wrapper")
    for ( let course of students){
        let courseElement = renderCourse(course.courseId)
        coursesElement.appendChild(courseElement)
    }
}
// pulls out titles of course in database
>>>>>>> Stashed changes
function courseTitle (id){
    let course = DATABASE.courses[id]
    return course.title
}

//pulls out total credits the course has 
function courseTotalCredits (id) {
    let course = DATABASE.courses[id]
    return course.totalCredits
}

// pulls out ressponible person for the course 
function courseResponsible (id) {
    let course = DATABASE.courses[id]
    // map creates a new array for course responsible 
    let teachersNames = allTeachers.map((teacher) => teacher.firstName + " " + teacher.lastName + " " + `(${teacher.post})`)

    let responsible = course.courseResponsible
    return teachersNames[responsible]
}

// pulls out teachers in the course 
function allCourseTeachers(id){
    let course = DATABASE.courses[id]
    let teachersNames = allTeachers.map((teacher) => teacher.firstName + " " + teacher.lastName + " " + `(${teacher.post})`)
    let teachers = []
    for ( let i = 0; i < teachersNames.length; i++){
        if (course.teachers.some((value) => value == i)){
        let div = document.createElement("div")
        let content = div.innerHTML = `<p>${teachersNames[i]}</p>`
        teachers.push(content)
        }
    }
// returns the teachers array without , and with space in between
    return teachers.toString().split(",").join(" ");
}

// renders the students that have taken the specific course 
function allCourseStudents (id){
<<<<<<< Updated upstream
    let courseId = DATABASE.courses[id]
    let students = []
    for (let student of allStudents){
        for (let courses of student.courses){
            for (let i = 0; i < courses.length; i++){
                if (courses[i].id == courseId){
                    students.push(student.map((student) => student.firstName + " " + student.lastName + " " + `(${student.courses[i].passedCredits})`))
                }
            }
        }
    }
    return students.toString().split(",").join(" ");
}

=======
    let studentsDiv = []
    let courseId = DATABASE.courses[id].courseId
    let students = allStudents.filter((student) => student.courses.some((course) => course.courseId == courseId))
        for (let student of students){
            let courseById = student.courses.filter((course) => course.courseId == courseId)
            for (let i = 0; i < courseById.length; i++){
                if (passedCredits(courseById[i], student)[i] == DATABASE.courses[id].totalCredits){
                    let div = document.createElement("div")
                    let content = div.innerHTML = `<div class="done">
                    <p>${student.firstName} ${student.lastName} (${passedCredits(courseById[i], student)[i]} credits)</p>
                    <h5>${courseStarted(courseById[i], student)[i]}</h5>
                    </div>`
                    studentsDiv.push(content)
                } else{
                    let div = document.createElement("div")
                    let content = div.innerHTML = `<div class="notDone">
                    <p>${student.firstName} ${student.lastName} (${passedCredits(courseById[i], student)[i]} credits)</p>
                    <h5>${courseStarted(courseById[i], student)[i]}</h5>
                    </div>`
                    studentsDiv.push(content)
                }
            }
        }
    return studentsDiv.toString().split(",").join(" ");
}

// function that filters for a students passedcredits 
function passedCredits (takenCourse, student){
    let passedCredit = student.courses.filter((course) => course.courseId == takenCourse.courseId).map((course) => course.passedCredits)
    return passedCredit
}
// filter when a student started the course
function courseStarted (takenCourse, student){
    let courseStart = student.courses.filter((course) => course.courseId == takenCourse.courseId).map((course) => `${course.started.semester} ${course.started.year}`)
    return courseStart
}

// function for when user types in search box it filters trought possible hits
function courseSearch (){
    let coursesArray = []
    for ( let i = 0; i < allCourses.length; i++){
        document.querySelector("#wrapper").innerHTML = ""
        if ("" == searchWord()){
            document.querySelector("#wrapper").innerHTML = ""
        } else if (allCourses[i].title.toLocaleLowerCase().includes(searchWord())) {
            coursesArray.push(allCourses[i]);
        } 

    }
    renderCourses(coursesArray)
}
// function for seeing the value of letter in the search box 
function searchWord (){
    let search = document.getElementById("course-title")
    return search.value
}
// eventlistener that indicates which key user presses on his keyboard
document.getElementById("course-title").addEventListener("keyup", courseSearch)
>>>>>>> Stashed changes
