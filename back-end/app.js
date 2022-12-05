const express = require('express')
const app = express()
const port = 8080
const knex = require('knex')(require('./knexfile.js')["development"])
const cors = require('cors')

app.use(express.json());
app.use(cors())


const movies = [
    {title: 'Mean Girls'},
    {title: 'Hackers'},
    {title: 'The Grey'},
    {title: 'Sunshine'},
    {title: 'Ex Machina'},
  ];

app.get('/', (req, res) => res.send('Hello World!'))


app.get('/movies', function(req, res) {
    knex
      .select('*')
      .from('movies_table')
      .then(data => res.status(200).json(data))
      .catch(err =>
        res.status(404).json({
          message: `The data you are looking for could not be found. Please try again`,
          error: err
        })
      );
  });

app.post('/movies', (req,res) => {
    knex('movies_table')
    .insert(req.body)
    .then(() => {
        knex('movies_table')
        .select('*')
        .then((movies) => {res.json(movies)})
    })
})

// app.delete('/movies', (req, res) => {
//     knex('movies_table')
//     .where('id', req.body)
//     .del()
//     .then(() => {
//         knex('movies_table')
//         .select('*')
//         .then((data) => {
//             res.json(data)
//         })
//     })
// }) 

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))