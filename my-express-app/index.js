const express = require('express');

//service import
const my_business_logic = require('./Service/my_business.logic');

const app = express();
const port = 7000;


// GET 
app.get('/greetings',(request,response) => {
    return response.send({msg: "Hello,Komoire"});

});

// List of Friends

let students = [
    {"id": 1,"name":"Tabby"},
    {"id": 2,"name":"Tom"},
    {"id": 3,"name":"Jose"},
    {"id": 4,"name":"Lorna"},
    {"id": 5,"name":"simon"},]


app.get('/list-of-students-by-id',(request, response) => {
    console.log("Logging request params",request.params);
    
});

app.get('/list-of-students-by-id/:id',(request, response) => {
    return response.send(Friends);
});

app.get('/list-of-students-by-id/:StutdentId',(request, response) => {
    // console.log("Logging request params",request.params);

    // console.log("use value from front end", request,params.students)
    return response.status(200).send(my_business_logic.getStudentById(request));



app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');

});