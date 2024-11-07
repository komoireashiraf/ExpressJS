const express = require('express');
const app = express();
const port = 7000;

// GET 

app.get('/greetings',(request,response) => {
    return response.send({msg: "Hello,Komoire"});

});

// List of Friends



app.get('/list-of-students-by-id',(request, response) => {
    console.log("Logging request params" request.params);
    
});

app.get('/list-of-students-by-id/:id',(request, response) => {
    return response.send(Friends);
});





app.listen(port, () => {
    console.log('Example app listening at http://localhost:${port}');

});