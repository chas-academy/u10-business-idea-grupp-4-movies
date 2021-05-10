//
const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Movie = require('./models/movie')
const { ReplSet } = require('mongodb')

const app   = express()
const port  = process.env.PORT || 3000

app.use(express.json())


//Create Users
app.post('/users', async (req, res) => {
    //
    const user = new User(req.body)

    try {
        //
        await user.save()
        res.status(201).send(user)
    } catch(e) {
        //
        res.status(400).send(e)
    }
})

//Show Users
app.get('/users', async (req, res) => {
    //
    try {
        //
        const users = await User.find({})
        res.send(users)
    } catch(e) {
        //
        res.status(500).send()
    }
})

//Show Users by ID
app.get('/users/:id', async (req, res) => {
    //
    const _id = req.params.id
    //
    try {
        //
        const user = await User.findById(_id)
        
        if(!user) {
            //
            return res.status(404).send()
        }
        res.send(user)

    } catch(e) {
        //
        res.status(500).send()
    }
})

//Update Users by ID
app.patch('/users/:id', async (req, res) => {
    //
    const updates = Object.keys(req.body)
    //All the types allowed to be edited
    const allowedUpdates = ['firstName', 'email', 'password', 'age']
    //
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if(!isValidOperation) {
            //
            return res.status(400).send({error: 'Invalid update'})
        }

    //
    try {
        //
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!user) {
            //
            return res.status(404).send()
        }
        res.send(user)

    } catch(e) {
        //
        res.status(400).send(e)
    }
})

//Create Movies
app.post('/movies', async (req, res) => {
    //
    const movie = new Movie(req.body)

    try {
        //
        await movie.save()
        res.status(201).send(movie)
    } catch(e) {
        //
        res.status(400).send(e)
    }
})

//Show Movies
app.get('/movies', async (req, res) => {
    //
    try {
        //
        const movie = await Movie.find({})
        res.send(movie)
    } catch(e) {
        //
        res.status(500).send()
    }
})

//Show Movies by ID
app.get('/movies/:id', async (req, res) => {
    //
    const _id = req.params.id
    //
    try {
        //
        const movie = await Movie.findById(_id)
        
        if(!movie) {
            //
            return res.status(404).send()
        }
        res.send(movie)

    } catch (e) {
        //
        res.status(500).send()
    }
})

//Update Movies by ID
app.patch('/movies/:id', async (req, res) => {
    //
    const updates = Object.keys(req.body)
    //All the types allowed to be edited
    const allowedUpdates = ['title', 'director', 'writer', 'rating', 'completed']
    //
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

        if(!isValidOperation) {
            //
            return res.status(400).send({error: 'Invalid update'})
        }

    //
    try {
        //
        const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
        if(!movie) {
            //
            return res.status(404).send()
        }
        res.send(movie)

    } catch(e) {
        //
        res.status(400).send(e)
    }
})

app.listen(port, () => {
    //
    console.log('Server online in port ' + port)
})