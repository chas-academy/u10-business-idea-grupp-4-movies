const mongoose = require('mongoose')
const validator = require('validator')

const Movie = mongoose.model('Movie', {
    //
    title: {
        //
        type: String,
        required: true,
        trim: true
    },
    director: {
        //
        type: String,
        required: true,
        trim: true
    },
    writer: {
        //
        type: String,
        required: true,
        trim: true
    },
    rating: {
        //
        type: Number,
        default: 0,
        validate(value) {
            //
            if (value > 5) {
                //
                throw new Error('Your number must be less than 5')
            }
        }
    }
    
})

module.exports = Movie