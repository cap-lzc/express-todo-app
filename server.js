const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

let tasks = [];

// Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/addtask', (req, res) => {
  let newTask = req.body.newtask;
  tasks.push(newTask);
  res.redirect('/');
});

app.post('/removetask', (req, res) => {
  let taskToRemove = req.body.check;
  tasks = tasks.filter(task => task !== taskToRemove);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});