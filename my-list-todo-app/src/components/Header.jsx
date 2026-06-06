import React from "react";
function Header () {
    return(
        <div className="container d-flex justify-content-between align-items-center">
            <h1 className="h3 text-dark">Task List</h1>
            <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addTaskModal">
                <i className="bi bi-plus"></i> Add Task
            </button>
        </div>
    )
}
export default Header