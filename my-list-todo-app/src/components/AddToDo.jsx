import React from "react";
function AddToDo (){
    let task =""
    return(
            <div className="modal fade" id="addTaskModal" >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Add Task</h5>
                        <button type="button" className="btn-close" id="closeBtn" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body ">
                        <div className="mb-3 text-start" >
                            <label htmlFor="taskInput" className="form-label ">Task</label>
                            <input 
                            type="text" 
                            id="taskInput" 
                            className="form-control" 
                            value={task}
                            placeholder="Type your task here..."/>
                        </div>

                        <div className="mb-3 text-start">
                            <label className="form-label d-block">Priority</label>
                            <div className="d-flex gap-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="priority" id="pHigh" value="High" checked/>
                                    <label className="form-check-label text-danger" htmlFor="pHigh">High</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="priority" id="pMedium" value="Medium"/>
                                    <label className="form-check-label text-warning" htmlFor="pMedium">Medium</label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="priority" id="pLow" value="Low"/>
                                    <label className="form-check-label text-success" htmlFor="pLow">Low</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" id="addBtn">Add</button>
                    </div>
                </div>
            </div>
        </div>   
    )
}
export default AddToDo