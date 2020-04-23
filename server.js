// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();
var pug = require('pug');

var todos = ['đi chợ','nấu cơm','rửa bát','học tại codersx'];
app.set('view engine', 'pug');
app.set('views','./views');

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.send('I love CodersX');
});
app.get('/todos',function(req,res){
  var q = req.query.q;
  if(q)
  var matchTodo = todos.filter(function(todo){
    return todo.toLowerCase().indexOf(q.toLowerCase())!==-1;
  })
  else
    matchTodo=todos;
  res.render('./todos.pug',{
    todos: matchTodo 
  })
})

// listen for requests :)
app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
