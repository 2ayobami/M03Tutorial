const express = require('express');
const morgan = require('morgan');

// Setting up express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');


// Listen for requests
app.listen(3000);

// Middleware & Static files
app.use(express.static('public'));

// Using morgan middleware
app.use(morgan('dev'));

// Making a middleware to log information on the console
// app.use((req, res, next) => {
//     console.log('New request made:');
//     console.log('Host: ', req.hostname);
//     console.log('Path: ', req.path);
//     console.log('Method: ', req.method);
//     // Using next() to stop the middleware and move on to the next handler
//     next();
// });


// Respond to requests
app.get('/', (req, res) => {
    const blogs = [
        {title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur."},
        {title: "Mari finds stars", snippet: "Lorem ipsum dolor sit amet consectetur."},
        {title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur."}
    ];
    res.render('index', { title: 'Home', blogs });
});

// This middleware doesn't gets logged in the console as it is below the path we want to view
// app.use((req, res, next) => {
//     console.log('In the next middleware');
//     next();
// });

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Redirects & 404 page
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a New Blog' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});