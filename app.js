const express = require('express');

// Setting up express app
const app = express();

// Register view engine
app.set('view engine', 'ejs');


// Listen for requests
app.listen(3000);

// Respond to requests
app.get('/', (req, res) => {
    const blogs = [
        {title: "Yoshi finds eggs", snippet: "Lorem ipsum dolor sit amet consectetur."},
        {title: "Mari finds stars", snippet: "Lorem ipsum dolor sit amet consectetur."},
        {title: "How to defeat bowser", snippet: "Lorem ipsum dolor sit amet consectetur."}
    ];
    res.render('index', { title: 'Home', blogs });
});
app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// Redirects & 404 page
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a New Blog' });
});

app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});