import { useState } from "react";

function Todo(){
   const [inputValue , setinputValue] = useState("Tushar")
   const [todos, setTodos] = useState([]);
   console.log(todos)

// Input Change
   function handleChange(e){
    setinputValue(e.target.value)
   }

//    SetTodo
function addTodo(value) {
    setTodos((prev) => {
      return [
        ...prev,
        {
          todo: value,
          id: prev.length + 1,
        },
      ];
    });
  }
  
//   Delete Todo
function DeleteTodo(id) {
    const todo = todos.find((item) => item.id === id);
    console.log(todo);
    const index = todos.indexOf(todo);
    console.log(index);

    const newArray = [...todos];
    
    newArray.splice(index, 1);
    console.log(newArray);
    setTodos(newArray);
  }




    return (
        <>
        <div className="container">
         <input className="input" value={inputValue} onChange={handleChange} type="text" placeholder="Enter Your Todo"/>
         <button className="button" onClick={() => addTodo(inputValue)}>Add Todo🖊️</button>
         </div>

         <ol>
         {todos.map((item, index) => {
          return (
            <li key={index}>
              {item.todo} 

              {/* Delete todo left */}
              <span className="cursor-pointer" onClick={() => DeleteTodo(item.id)}>🗑️</span>
            </li>
          );
        })}
         </ol>
        </>
      )
}

export default Todo