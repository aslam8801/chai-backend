// require('dotenv').config({path:/('./env')})
import dotenv from "dotenv";

import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

import express from "express"

dotenv.config({
    path: './env'
})

const app = express()

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`app Listening at Port: ${process.env.PORT || 8000}`);
        
    })
})
.catch((err) =>{
    console.log("mongodb connection failed : ",err);
})






/*
;(async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("Error : ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`App listening at Port : ${process.env.PORT}`);
        })

    } catch (error) {
        console.log(error);
    }
})()

*/