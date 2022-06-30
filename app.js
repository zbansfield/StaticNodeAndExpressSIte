/* Treehouse FSJS Techdegree
 * Project 6 - Static Node.js and Express Site
*/

// Setting up server, routes, and middleware

// Variables for the necessary dependencies
const express = require('express');
const { data } = require('data.json');

const app = express();

// Setting middleware
app.set('view engine', 'pug');
app.use('static', express.static('public'))

// Setting routes
app.get('/', (req, res) => {
    res.locals = data.projects
    res.render('project')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/project/:id', (req, res) => {

})

app.listen(3000, () => {
    console.log('The app is running on localhost:3000')
});