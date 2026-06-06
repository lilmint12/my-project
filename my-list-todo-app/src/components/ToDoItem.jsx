import React from "react";

function ToDoItem ({ todo, onDeleteToDo }){
    // Hàm này dùng cho Priority (có màu)
    const getPriorityColor = (priority) => {
        switch(priority) {
            case "High": return "text-danger";
            case "Medium": return "text-warning";
            case "Low": return "text-success";
            default: return "text-secondary";
        }
    };

    return(
        <div className="list-group-item bg-white p-3 d-flex justify-content-between align-items-center">
            <div style={{ flex: 2 }} className="text-start">
                <small className="text-muted d-block text-uppercase" style={{ fontSize: "0.7rem" }}>Task</small>
                <span className="fw-bold">{todo.task}</span>
            </div>
            
            <div style={{ flex: 1 }}>
                <small className="text-muted d-block text-uppercase" style={{ fontSize: "0.7rem" }}>Priority</small>
                {/* Priority có màu */}
                <span className={`fw-semibold ${getPriorityColor(todo.priority)}`}>
                    {todo.priority}
                </span>
            </div>
            
            <div style={{ flex: 1 }}>
                <small className="text-muted d-block text-uppercase" style={{ fontSize: "0.7rem" }}>Status</small>
                {/* Status trở về như cũ (bg-secondary) */}
                <span className="badge bg-secondary">
                    {todo.status}
                </span>
            </div>
            
            <div className="circular-progress mx-4" style={{ "--value": todo.progress }}></div>
            
            <div className="d-flex gap-3 mx-4">
                <i className="bi bi-pencil-square text-primary" style={{ cursor: "pointer" }}></i>
                <i className="bi bi-trash text-danger" style={{ cursor: "pointer" }} onClick={onDeleteToDo}></i>
            </div>
        </div>    
    )
}
export default ToDoItem;