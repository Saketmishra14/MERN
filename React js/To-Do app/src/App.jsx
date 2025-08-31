import {Header} from "./components/Header"
import {Tabs} from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import {TodoList} from './components/TodoList'

function App() {
  const todos=[
    {input:'Hello! Add Your First Todo!',complete:true},
    {input:'Get the groceries!',complete:false},
    {input:'Learn how to web design',complete:false},
    {input:'Say hii to gran gran',complete:true}
  ]
  

  return (
    <>
    {/* props example  */}
    <Header todos={todos}/>
    <Tabs todos={todos}/>
    <TodoList todos={todos} />
    <TodoInput/>
    
    </>
  )
}

export default App
