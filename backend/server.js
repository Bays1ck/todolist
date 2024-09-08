const express = require("express");
const mongoose = require("mongoose")
const cors = require("cors")



require('dotenv').config()

const todo = require("./models/todoModel") 

const app = express();

app.use(cors());

app.use(express.json());
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>console.log('connected to MONGO DB'))
    .catch((err)=>console.log(err))



const {
createTodo,
getTodo,
updateTodo,
deleteTodo
}=require('./controllers/todoControllers')


//Get all todos

app.get("/todos",getTodo)

//Create a todo
app.post("/todos",createTodo)

//update todo

app.put("/todos/:id",updateTodo)

//delete todo

app.delete("/todos/:id",deleteTodo)







app.get("/",(req,res)=>{
    res.send('api running');
})






app.listen(process.env.PORT,()=>{
    console.log(`listening on port ${process.env.PORT}`)
});