
import './App.css';
import Header from './MyComponents/Header';
import Footer from './MyComponents/Footer';
import TodoItem from './MyComponents/TodoItem';
import Todos from './MyComponents/Todos';
import { useState,useEffect} from 'react';
import AddTodo from './MyComponents/AddTodo';


function App() {

  let intiTodo;
  if(localStorage.getItem("todos")===null){
    intiTodo=[];
  }
else{
  intiTodo = JSON.parse(localStorage.getItem("todos"));
}

  const onDelete = (todo) =>
  {
   console.log("Delete successfully",todo)
  
   setTodos(todos.filter((e)=>{
      return e!==todo;
        }));
  localStorage.setItem("todos",JSON.stringify(todos));
      }

  const addTodo = (title,desc) => {
    let sno;
    console.log(title,desc)

    if (todos.length === 0){
      sno = 0;
    }
    else sno = todos[todos.length-1].sno + 1;

   
    const myTodo = {
      sno: sno,
      title:title,
      desc:desc,
    }

    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  



const [todos, setTodos] = useState(intiTodo);

// Applying use effect here 
useEffect(()=> {
  localStorage.setItem("todos",JSON.stringify(todos));
},[todos])

  return (
    <div>
    {/* <TodoItem /> */}
    <Header title="ToDoList" searchBar={true}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/> 
    <Footer />
    </div>
  );
}

export default App;
