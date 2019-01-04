const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
    .connect(
        "mongodb://localhost/sampleauth",
        { useNewUrlParser: true }
    )
    .then(() => console.log("mongoDB connected"))
    .catch(err => console.log(err));