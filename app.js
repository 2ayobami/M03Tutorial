const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');


// Setting up express app
const app = express();

// Connect to mongodb
const dbURI = 'mongodb://127.0.0.1:27017/node-tuts';
mongoose.connect(dbURI)
    .then((result) => app.listen(2000))
    .catch((err) => console.log(err));

// Register view engine
app.set('view engine', 'ejs');

// Listen for requests
app.listen(3000);

// Middleware & Static files
app.use(express.static('public'));
app.use(morgan('dev'));

// Mongoose and Mongo sandbox routes
app.get('/add-blog', (req, res) => {
    const blog = new Blog({
        title: 'New Blog',
        snippet: 'About my new blog',
        body: 'More about my new blog'
    });

    blog.save()
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err);
        })
})

// Retrieving all the blogs
app.get('/all-blogs', (req, res) => {
    Blog.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err)
        })
})

// Retrieving a single blog using the blog's id
app.get('/single-blog', (req, res) => {
    Blog.findById('66f202829e4364fced0ccb3d')
        .then((result) => {
            res.send(result)
        })
        .catch((err) => {
            console.log(err)
        })
})


// Routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/blogs', (req,res) => {
    Blog.find().sort({ createdAt: -1})
        .then((result) => {
            res.render('index', { title: 'All Blogs', blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
})

// Redirects & 404 page
app.get('/blogs/create', (req, res) => {
    res.render('create', { title: 'Create a New Blog' });
});

// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});