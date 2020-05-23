const express = require('express');
const mongoose = require('mongoose')

const app = express();

require('dotenv').config()

//import routes
const userRoutes = require('./routes/user')

/** Connect to DB */
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> console.log("DB Connected"));
//mongoose.connect(process.env.MDB_KEY);

//routes middleware
app.use("/api", userRoutes)

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})