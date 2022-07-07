import mongoose from "mongoose";

mongoose.connect('mongodb://localhost:27017/supa-starter', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.log(err));