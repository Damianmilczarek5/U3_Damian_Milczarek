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

// function that renders students total credits 
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

//creates the courses for students
function renderCourses (student){
    let courseData = DATABASE.courses
    let courses = []
    for ( let i = 0; i < student.courses.length; i++){
        let id = student.courses[i].courseId
        courses.push(courseData[id])   
    }
    let courseDiv = []
    for (let i= 0; i < courses.length; i++){

        let div = document.createElement("div")
        let studentCourse = student.courses[i]
        let courseDataId = courseData[courses[i].courseId]

        //if someone passes the course with all point the course get class done...
        if (studentCourse.passedCredits == courseDataId.totalCredits){

            let text = div.innerHTML =
            `<div class="done"><h4>${courses[i].title}</h4>
            <p>${studentCourse.started.semester} ${studentCourse.started.year} (${studentCourse.passedCredits} 0f ${courseDataId.totalCredits} credits)</p></div>`
            courseDiv.push(text)}
            //... otherwise it get this div that shows that the student did not pass the course 
        else{
            let text = div.innerHTML =
            `<div class="notDone"><h4>${courses[i].title}</h4>
            <p>${studentCourse.started.semester} ${studentCourse.started.year} (${studentCourse.passedCredits} 0f ${courseDataId.totalCredits} credits)</p></div>`
            courseDiv.push(text)}

    }
    return courseDiv.toString().split(",").join(" ");
}

// function for when user types in search box it filters trought possible hits
function studentLastname (){
    let studentsArray = []
    for ( let i = 0; i < allStudents.length; i++){
        document.querySelector("#wrapper").innerHTML = ""
        if ("" == searchWord()){
            document.querySelector("#wrapper").innerHTML = ""
        } else if (allStudents[i].lastName.toLocaleLowerCase().includes(searchWord())) {
            studentsArray.push(allStudents[i]);
        } 

    }
    renderStudents(studentsArray)
}
// function for seeing the value of letter in the search box 
function searchWord (){
    let search = document.getElementById("lastname")
    return search.value
}
// eventlistener that indicates which key user presses on his keyboard
document.getElementById("lastname").addEventListener("keyup", studentLastname)
