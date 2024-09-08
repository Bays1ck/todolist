const mongoose = require("mongoose")
const todos = require("../models/todoModel")


const getTodo = async(req,res)=>{
    const inputTodo = req.body;
    try{
        const allTodos = await todos.find({}).sort({createdAt: -1})
        
        res.status(200).send(allTodos);
    } catch(error){
        res.status(400).send(error.message);
    }


};

const createTodo = async(req,res)=>{
    const inputTodo = req.body;
    try{
        const newTodo = await todos.create(inputTodo)
        //change .json to .send after using postman
        res.status(201).json(newTodo);
    } catch(error){
        res.status(500).send(error.message);
    }


};


const updateTodo = async(req,res)=>{
    const {id} = req.params;
    try{

        if(!mongoose.Types.ObjectId.isValid(id))
            {
            return res.status(404).send(`there is no todo with this id : ${id}`)
        }

        const todoID = {_id : id}
        const update = {completed:true}
        
        const updatedTodo = await todos.findOneAndUpdate(todoID,update)

        if (!updatedTodo) {
            return res.status(404).send(`there is no todo with this id : ${id}`);
        }
        res.status(200).send(updatedTodo);
    } catch(error){
        res.status(500).send(error.message);
    }


};

const deleteTodo = async(req,res)=>{
    const {id} = req.params;
    try{

        if(!mongoose.Types.ObjectId.isValid(id))
            {
            return res.status(404).send(`there is no todo with this id : ${id}`)
        }      
        const deletedTodo = await todos.findByIdAndDelete({_id : id});

        res.status(200).send(deletedTodo);
    } catch(error){
        res.status(500).send(error.message);
    }


};










module.exports = {
    createTodo,
    getTodo,
    updateTodo,
    deleteTodo
};
