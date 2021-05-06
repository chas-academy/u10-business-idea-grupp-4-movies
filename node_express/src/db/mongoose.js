const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/m_matcher-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})

