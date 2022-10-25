const express = require('express');
const app = express()
require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000
const userRoutes = require ("./routes/user")
const workoutRoutes = require('./routes/workoutRoutes')

// ============= middleware =================>
app.use((req,res,next)=>{
    console.log(req.path , req.method);
    next()
})
app.use(cors())

// =========== routes ==========>

app.use("/api/user" , userRoutes )

app.use("/api/workouts", workoutRoutes)


//===== simple start route===============>

app.get("/",(req,res)=>{
    res.json( { mgs : "User Authentication Server"})
})



//connect to mongodb database ============>

mongoose.connect(process.env.DB_URL).then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running on ${port}`)
    })
})



