const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Movie = require('./models/movie')

const app   = express()
const port  = process.env.PORT || 3000

app.use(express.json())

app.get('/users', (req, res) => {
    //
    User.find({}).then((users) => {
        //
        res.send(users)
    }).catch((e) => {
        //
        res.status(500).send()
    })
})

app.get('/users/:id', (req, res) => {
    //
    const _id = req.params.id
    User.findById(_id).then((user) => {
        //
        if (!user) {
            //
            return res.status(404).send()
        }
        res.send(user)
    }).catch((e) => {
        //
        res.status(500).send()
    })
})

app.post('/users', (req, res) => {
    //
    const user = new User(req.body)

    user.save().then(() => {
        //
        res.send(user)
    }).catch((e) => {
        //
        res.status(400).send(e)
    })
})

app.post('/movies', (req, res) => {
    //
    const movie = new Movie(req.body)

    movie.save().then(() => {
        //
        res.send(movie)
    }).catch((e) => {
        //
        res.status(400).send(e)
    })
})

app.get('/movies', (req, res) => {
    //
    Movie.find({}).then((movie) => {
        //
        res.send(movie)
    }).catch((e) => {
        //
        res.status(500).send()
    })
})

app.get('/movies/:id', (req, res) => {
    //
    const _id = req.params.id

    Movie.findById(_id).then((movie) => {
        //
        if(!movie) {
            return res.status(404).send()
        }
        res.send(movie)
    }).catch((e) => {
        //
        res.status(500).send()
    })
})

app.listen(port, () => {
    //
    console.log('Server is up on port ' + port)
})