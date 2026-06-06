import React, { useState } from "react";
function FormAddToDo ({addToDo}){
        const handleSubmit = (e) =>{
            e.preventDefault();
            let task = document.getElementById('taskInput').value.trim()
            if(task.length>100)
            {
                alert("task không được quá 100 kí tự")
                return;
            }
            let prior = document.querySelector('input[name="priority"]:checked').value
            // if(prior!="")
            //     alert("DDMM")
            let Progress = 0
            let Status = ""
            if(prior == "High")
            {
                Progress = 0
                Status = "To-Do"
            }
            if(prior == "Medium")
            {
                Progress = 50
                Status = "In-Progress"
            }
            if(prior == "Low")
            {
                Progress = 100
                Status = "Done"
            }
            const newToDo={
                id: Date.now(),
                task: task,
                priority: prior, 
                progress: Progress,    // 0: Todo
                status: Status 
            };
            addToDo(newToDo);
            document.getElementById('taskInput').value=""
        }
        const handleClick = (e, colorClass) => {
            // 1. Tìm container chứa các nút
            const parentContainer = e.currentTarget.parentElement;
            const allButtons = parentContainer.querySelectorAll('.btn');

            // 2. Reset tất cả các nút về trạng thái outline
            allButtons.forEach(btn => {
                // Xóa tất cả các class màu nền
                btn.classList.remove('bg-danger', 'text-white', 'bg-warning', 'bg-success');
                // Đảm bảo các nút có đúng class outline tương ứng của chúng
                // (Đây là logic đơn giản, nếu muốn chính xác hơn có thể lưu class vào data-attribute)
                if (btn.textContent.trim() === "High") btn.classList.add('btn-outline-danger');
                if (btn.textContent.trim() === "Medium") btn.classList.add('btn-outline-warning');
                if (btn.textContent.trim() === "Low") btn.classList.add('btn-outline-success');
            });

            // 3. Xóa class outline của nút vừa click và thêm màu nền
            e.currentTarget.classList.remove('btn-outline-danger', 'btn-outline-warning', 'btn-outline-success');
            e.currentTarget.classList.add(colorClass, 'text-white');
        };
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
                            placeholder="Type your task here..."
                            />
                        </div>

                        <div className="mb-3 text-start">
                            <label className="form-label d-block">Priority</label>
                        <div className="d-flex gap-3">
                            {/* High */}
                            <label className='btn btn-outline-danger ' onClick={(e) => handleClick(e, 'bg-danger')}>
                            <input 
                                className="d-none" 
                                type="radio" 
                                name="priority" 
                                value="High"
                            />
                            High
                            </label>

                            {/* Medium */}
                            <label className='btn btn-outline-warning ' onClick={(e) => handleClick(e, 'bg-warning')}>
                            <input 
                                className="d-none" 
                                type="radio" 
                                name="priority" 
                                value="Medium"
                            />
                            Medium
                            </label>

                            {/* Low */}
                            <label className='btn btn-outline-success ' onClick={(e) => handleClick(e, 'bg-success')}>
                            <input 
                                className="d-none" 
                                type="radio" 
                                name="priority" 
                                value="Low"
                            />
                            Low
                            </label>
                        </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" id="addBtn" onClick={handleSubmit}>Add</button>
                    </div>
                </div>
            </div>
        </div>   
    )
}
export default FormAddToDo