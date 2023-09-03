import { useState } from "react";

function Todo(){
   const [inputValue , setInputValue] = useState("")
   const [todos, setTodos] = useState([]);
   const [isEdit, setIsEdit] = useState({
    id: null,
    status: false,
  });
   console.log(todos)

// Input Change
   function handleChange(e){
    setInputValue(e.target.value)
   }

//    ADD TODO
function addTodo(value) {
    if(inputValue!="")
   { setTodos((prev) => {
      return [
        ...prev,
        {
          todo: value,
          id: prev.length + 1,
        },
      ];
    });
    setInputValue("")}
  }
  
//   Delete Todo
  function DeleteTodo(index) {
   

    const newArray = [...todos];
    
    newArray.splice(index, 1);
    console.log(newArray);
    setTodos(newArray);
  }

// Update Todo
 function updateTodo(){
 const value = todos.find((item)=> item.id === isEdit.id);
 const index = todos.indexOf(value);
 const newArray = [...todos];
 newArray[index].todo = inputValue  ;
 setTodos(newArray);
 setIsEdit({
    id: null,
    status: false,
  })

 }



// Edit Todo
  function EditTodo(index) {
    console.log(todos[index]);
    setInputValue(todos[index].todo);
    setIsEdit({
      id: todos[index].id,
      status: true,
    });
  }




    return (
        <>


<div className="flex gap-2 ">


<input type="text"
 value={inputValue}
className="border-2 border-black mr-2"   placeholder="Enter Your Todo"
onChange={handleChange}
/>

{isEdit.status === false ? (
<button onClick={() => addTodo(inputValue)}>Add todo </button>
) : 
(
<button onClick={() => updateTodo(inputValue)}>Update todo </button>
)}
</div>

<ul className="list-decimal">

{todos.map((item, index) => {
 return (
<li key={index}>
 {item.todo} 

 
             
<span onClick={() => EditTodo(index)}>✏️</span>
<span className="cursor-pointer" onClick={() => DeleteTodo(index)}>🗑️</span>
</li>

);
})}
</ul>
  </>
)
}

export default Todo