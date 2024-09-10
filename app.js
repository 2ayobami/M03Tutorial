const express = require('express');

// Setting up express app
const app = express();


// Listen for requests
app.listen(3000);

// Respond to requests
app.get('/', (req, res) => {
    res.sendFile('./views/index.html', { root: __dirname });
});
app.get('/about', (req, res) => {
    res.sendFile('./views/about.html', { root: __dirname } )
});

// Redirects & 404 page
app.get('/about-us', (req, res) => {
    res.redirect('/about');
});

app.use(() => {
    res.status(404).sendFile('./views/404.html', { root: __dirname })
});