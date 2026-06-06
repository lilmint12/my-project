// Hàm render dữ liệu ra màn hình, khớp với HTML của bạn
function getStatus(priority) {
    if (priority === 'High') return 'To Do';
    if (priority === 'Medium') return 'In Process';
    return 'Done'; // Cho Low
}
function renderTasks(dataList) {
    const listContainer = document.getElementById('taskList');
    listContainer.innerHTML = ""; // Xóa dữ liệu cũ

    dataList.forEach(item => {
        // Xác định màu sắc dựa trên priority
        const priorityColor = item.priority === 'High' ? 'danger' : (item.priority === 'Medium' ? 'warning' : 'success');

        const itemHTML = `
            <div class="list-group-item bg-white p-3 d-flex justify-content-between align-items-center">
                <div style="flex: 2;">
                    <small class="text-muted d-block text-uppercase" style="font-size: 0.7rem;">Task</small>
                    <span class="fw-bold">${item.task}</span>
                </div>
                <div style="flex: 1;">
                    <small class="text-muted d-block text-uppercase" style="font-size: 0.7rem;">Priority</small>
                    <span class="text-${priorityColor} fw-semibold">${item.priority}</span>
                </div>
                <div style="flex: 1;">
                    <span class="badge bg-secondary">${getStatus(item.priority)}</span>
                </div>
                <div class="d-flex gap-3">
                    <i class="bi bi-pencil-square text-primary" style="cursor: pointer;"></i>
                    <i class="bi bi-trash text-danger" style="cursor: pointer;"></i>
                </div>
            </div>
        `;
        listContainer.innerHTML += itemHTML;
    });
}
let tasks =[]
async function loadTasks() {
    try {
        // 1. Fetch tới file JSON
        const response = await fetch('data.json');
        
        // 2. Kiểm tra nếu file không tồn tại hoặc lỗi
        if (!response.ok) throw new Error("Không thể đọc file data.json");

        // 3. Chuyển đổi phản hồi sang định dạng JSON
        tasks = await response.json();
        // 4. Xử lý hiển thị
        renderTasks(tasks);
    } catch (error) {
        console.error("Lỗi rồi:", error);
    }
}
loadTasks();
async function addTask(newTask) {
    tasks.push(newTask);
    localStorage.setItem('myTasks', JSON.stringify(tasks));
    renderTasks(tasks);
    console.log("Đã thêm task vào mảng giả lập!");
}
document.getElementById('closeBtn').addEventListener('click', () => {
    // 1. Ẩn modal
    let modalEl = document.getElementById('addTaskModal');
    let modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
    // 2. TRẢ FOCUS về nút mở modal
    let triggerBtn = document.querySelector('header .btn-primary');
    if (triggerBtn) {
        triggerBtn.focus();
    }
    // 3. Reset input
    let taskInput = document.getElementById('taskInput');
    taskInput.value = "";
});

document.getElementById('addBtn').addEventListener('click',async () => {
    let taskInput = document.getElementById('taskInput');
    let taskValue = taskInput.value.trim();
    // Kiểm tra rỗng
    if (taskValue === "") {
        alert("Bạn chưa nhập tên công việc!");
        return; 
    }
    // Kiểm tra độ dài tối đa 100 ký tự
    if (taskValue.length > 100) {
        alert("Tên công việc quá dài! Chỉ được nhập tối đa 100 ký tự. (Bạn đang nhập: " + taskValue.length + ")");
        return; 
    }
    // Xử lý lấy dữ liệu
    let selectedPriority = document.querySelector('input[name="priority"]:checked').value;
    // Giả sử 'sel' ở đây là phần tử select trạng thái, mình đặt tên là statusSelect
    await addTask({task: taskValue, priority: selectedPriority})
    // 1. Ẩn modal
    let modalEl = document.getElementById('addTaskModal');
    let modal = bootstrap.Modal.getInstance(modalEl);
    modal.hide();
    // 2. TRẢ FOCUS về nút mở modal
    let triggerBtn = document.querySelector('header .btn-primary');
    if (triggerBtn) {
        triggerBtn.focus();
    }
    // 3. Reset input
    taskInput.value = "";
});