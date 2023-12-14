const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files from the public directory
app.use(express.static('public'));

// Render login page
app.get('/', (req, res) => {
  res.render('login_working.ejs');
});

//ui folder
app.get('/home', (req, res) => {
    res.render('home.ejs');
});

app.get('/login', (req, res) => {
    res.render('login.ejs');
});

app.get('/clubs', (req, res) => {
    res.render('clubs.ejs');
});

app.get('/events', (req, res) => {
    res.render('events.ejs');
});

app.get('/eventspace', (req, res) => {
    res.render('eventspace.ejs');
});

app.get('/youngalumni', (req, res) => {
    res.render('youngalumni.ejs');
});


// Handle login form submission
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // You'd typically validate credentials and authenticate users here
  // For demo purposes, just displaying entered credentials
  res.send(`Username: ${username}, Password: ${password}`);
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
