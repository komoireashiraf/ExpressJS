const myDb = require("../Models/my_db");

// Function getting all students
const getStudents = () => {
    console.log('Getting Here: ',myDb);
    return myDb.students;
}

// This function is getting student by ID

const getStudentById = () =>{

    for(i = 1; i < 5; i++){

        if(request.params.studentId ==  myDb.students[i].Id){

            return students[i];
        }
        console.log(student[i])
    }

    return "FOUND NOTHING";
};


module.exports = {getStudents,getStudentById};