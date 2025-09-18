import { useState } from "react"
import {v4 as uuidv4} from "uuid"


export default function TodoList(){
    const [Todo,setTodo]=useState([{task:"sample Task",id:uuidv4(),isDone:false}]);
    const [newTodo,setNewTodo]=useState([]);
    let addNewTask=()=>{
        setTodo((prevTodo)=>{
           return [...prevTodo,{task:newTodo,id:uuidv4(),isDone:false}]
        });
        setNewTodo("");
    }
    let updateTodoValue=(event)=>{
        setNewTodo(event.target.value)
    }
    let deleteTodo=(id)=>{
        setTodo((prevTodo)=>Todo.filter((prevTodo)=>prevTodo.id!=id));

    }
    let upperCaseAll=()=>{
        setTodo((todos)=>(
            todos.map((prevTodo)=>{
            return{
                ...prevTodo,
                task:prevTodo.task.toUpperCase(),
            };
        }))
    ); 
    }
    let upperCaseOne=(id)=>{
        setTodo((todos)=>(
            todos.map((prevTodo)=>{
                if(prevTodo.id==id){
                    return{
                        ...prevTodo,
                        task:prevTodo.task.toUpperCase(),
                    }
                }
                else{
                    return prevTodo;
                }
            })
        ))
    }
    let markAsDone=(id)=>{
        setTodo((todos)=>(
            todos.map((prevTodo)=>{
                if(prevTodo.id===id){
                    return{
                        ...prevTodo,
                        isDone:true,
                    }
                }
                else{
                    return prevTodo;
                }
            })
        )
        )
    }

    return(
        <div>
            <input type="text"  placeholder="add a task" value={newTodo} onChange={updateTodoValue}/><br /><br />
            <button onClick={addNewTask}>Add</button>
            <br /><br /><br />
            <hr />
            <h3>Tasks-Todo</h3>
            {/* print task here */}
            <ul>
                {
                    Todo.map((todo)=>(
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.isDone ? 'line-through' : 'none' }}>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <button onClick={()=>upperCaseOne(todo.id)}>upperCaseOne</button>
                            <button onClick={()=>markAsDone(todo.id)}  >MarkDone</button>
                        </li>
                        
                    ))
                }
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>Update All</button>
        </div>
    )

}