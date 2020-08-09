const mongoose = require('mongoose')

mongoose.connect(process.env.MG_PATH, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})