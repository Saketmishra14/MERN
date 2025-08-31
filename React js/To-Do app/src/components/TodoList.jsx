import { TodoCard } from "./TodoCard";

export function TodoList(props){
    const {todos}=props
    const tab='All'

    const FilterTodoList=tab==='All'?
    todos:
    tab==='Completed'?
    todos.filter(val=>val.complete):
    todos.filter(val=> !val.complete)
    return (
        <>
        {FilterTodoList.map((todo,todoindex)=>{
            return (
                <TodoCard key={todoindex} todoindex={todoindex} {...props}/>
            )
        })

        }
           
        </>
    )
}