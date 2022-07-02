/* Treehouse FSJS Techdegree
 * Project 6 - Static Node.js and Express Site
*/

// ------------------------------------------
// Setting up server, routes, and middleware
// ------------------------------------------

// Variables for the necessary dependencies
const express = require('express');
const { projects } = require('./data.json');

const app = express();

// Setting middleware
app.set('view engine', 'pug');
app.use('/static', express.static('public'))

// Setting routes
app.get('/', (req, res) => {
    res.render('index', { projects })
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/project/:id', (req, res) => {
    const { id } = req.params;

    if (id < projects.length){
        const project = projects[id];
        res.render('project', { project });
    } else {
        res.redirect('/error')
    }
})

// ------------------------------------------
// Error handling
// ------------------------------------------

// 404- Page not found errors
app.use((req, res, next) => {
    const err = new Error('Not Found')
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status); 
    res.render('error');
})

// 500- general server errors
app.use((err, req, res, next) => {
    const error = {
        message: 'Internal Server Error',
        status: 500
    };
    res.status(err.status || 500);
    res.render('error', { error });
});

// ------------------------------------------
// Starting server to run on port 3000
// ------------------------------------------

app.listen(3000, () => {
    console.log('The app is running on localhost:3000')
});