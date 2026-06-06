import React from "react";
import ToDoItem from "./ToDoItem";
function ToDoList({ todos, onDeleteToDo }) {
    return (
        <ul className="list-group shadow-sm">
            {todos.map(todo => (
            <ToDoItem 
                key={todo.id} 
                todo={todo} 
                onDeleteToDo={() => onDeleteToDo(todo.id)}
            />
            ))}
        </ul>
    );
}
export default ToDoList