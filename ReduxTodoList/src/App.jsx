import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { useSelector} from 'react-redux'
import './App.css'

function App() {
  const todos = useSelector(state => state.todos)
  return (
    <>
      <TodoForm />
      {
        todos.map((todo)=>
          
          <TodoItem todo={todo}/>)
      }
    </>
  )
}

export default App
