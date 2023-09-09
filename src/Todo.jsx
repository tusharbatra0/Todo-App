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
  setInputValue("")
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

{/* Main Container */}
<div className="flex gap-4 flex-col justify-center items-center mt-8">

{/* input and button container */}
<div className="flex flex-col gap-8 items-center ">

<h2 className="text-white text-4xl">Note App by Tushar Batra</h2>

<div className="flex  gap-4">
<input type="text"
 value={inputValue}
 className=" mr-2 p-4 rounded-2xl"   placeholder="Enter Your Todo"
onChange={handleChange}
/>

{isEdit.status === false ? (
<button className="rounded-2xl" 
onClick={() => addTodo(inputValue)}>Add todo ➕ </button>
) : 
(
<button className="bg-[#2569f6] rounded-2xl"
 onClick={() => updateTodo(inputValue)}>Update todo ➕</button>
)}
</div>
</div>


{/* TODO CONTAINER */}


<div className="bg-white mt-2 flex justify-center rounded-2xl gap-2 ">

<ul className=" bg-[#bee5fd] flex flex-col gap-2 justify-between  ">

{todos.map((item, index) => {
 return (
<li className="p-4 text-2xl pl-2 p-2 flex item-center justify-between"
 
 key={index}>
{item.todo}
<div className="pl-12">
<span className="cursor-pointer " onClick={() => EditTodo(index)}>✏️</span>

<span className="cursor-pointer" onClick={() => DeleteTodo(index)}>🗑️</span>
</div>
</li>

);
})}
</ul>

</div>
<button className="rounded-2xl mt-2 w-full text-xl"
 onClick={()=>{setTodos([])}}>Clear All❌</button>
</div>
  </>
)
}

export default Todo