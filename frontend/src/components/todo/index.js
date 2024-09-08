import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import Form from '../form';
import axios from '../../axios'
import TodoList from '../todoList';


function Todo() {
  const [input,setInput] = useState('');
  const [todos,setTodos] = useState([]);


  const fetchData = async () => {

    try {
      const response = await axios.get('/todos')
      setTodos(response.data);


    } catch (err) {
      console.log(err.message)
      
    }
    
  }

useEffect(()=>{
  fetchData()
},[])

const addTodo = async (e) => {
  e.preventDefault();
  if (input.length===0) {
    return null
  }
  await axios.post('/todos',[{
    ...todos,
    text : input,
    completed : false
  }])
  fetchData()
  setInput('')
  
}




  return (<Container>
    <h2>Todos</h2>
    <Form input={input} setInput={setInput} addTodo={addTodo}/>
    <TodoList todos={todos} fetchData={fetchData}/>

  
  
  
  
  </Container>
  



  );
}

export default Todo