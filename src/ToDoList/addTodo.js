import React, { useState } from "react";
import "./addToDo.css";
const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(0)

  const submitHandler = (e) => {
    e.preventDefault();

    if(editId){
        const editTodo = todos.find((eid) => eid.id === editId );

        const updateTodos = todos.map((updateId) =>
        updateId.id === editTodo.id ?
        (updateId = {id: updateId.id, todo}) : {id: updateId.id, todo: updateId.id}
        );
        setTodos(updateTodos);
        setEditId(0);
        setTodo("");
        return
    }

    if (todo !== "") {
      setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos]);
      setTodo('')
    }
  };

  const handleDelete = (id) => {
    const deleteTodo = todos.filter((del) => del.id !== id);
    setTodos([...deleteTodo]);
  };

  const handleEdit = (id) => {
   const editTodo = todos.find((edt) => edt.id === id);
   setTodo(editTodo.todo);
   setEditId(id);
  }

  return (
    <>
      <div className="main">
        <h3>Add Todo</h3>
        <div className="add">
          <div className="add_to_do">
            <form onSubmit={submitHandler}>
              <input
                type="text"
                name="name"
                value={todo}
                className="input"
                onChange={(e) => setTodo(e.target.value)}
              />
              <button className="button" type="submit">
                {editId ? 'Edit' : 'Add Todo'}
              </button>
            </form>
          </div>
          {/* <div className="edit_to_do"> */}
          <>
            {todos.map((to) => {
              return (
                
                <div className="edit_to_do">
                  <span name="name" className="input" key={to.id}>
                    {to.todo}
                  </span>
                  <button 
                  className="edit_button"
                  onClick={() => handleEdit(to.id)}
                  >Edit</button>
                  <button
                    className="delete_button"
                    onClick={() => handleDelete(to.id)}
                  >
                    Delete
                  </button>
                  </div>
                
              );
            })}
            </>
          </div>
          
        </div>
      {/* </div> */}
    </>
  );
};
export default AddTodo;
