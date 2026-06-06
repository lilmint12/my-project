import { useState, useEffect } from 'react'; // use effect
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Header from './components/Header'
import FormAddToDo from './components/FormAddToDo'
import ToDoList from './components/ToDoList'
import todosData from './data.json'// Sử dụng làm giá trị khởi tạo cho useState
function App() {
// Lấy dữ liệu từ localStorage trước, nếu không có thì lấy từ data.json
      const [todos, setTodos] = useState(() => {
        const saved = localStorage.getItem("myTodos");
        if (saved !== null) {
            // Nếu có, chuyển đổi chuỗi JSON thành mảng JavaScript
            const parsedData = JSON.parse(saved);
            return parsedData;
        } else {
            // 3. Nếu không có (lần đầu tiên vào trang), trả về dữ liệu mặc định từ file JSON
            return todosData;
        }
      });

      // Mỗi khi todos thay đổi, tự động lưu vào localStorage
      useEffect(() => {
        localStorage.setItem("myTodos", JSON.stringify(todos));
      }, [todos]);
      const addTodo =(newTodo)=>{
      setTodos([...todos, newTodo])
    }  
    const handleAdd = () => {
    console.log("Task đang được thêm...");
    // Sau này bạn sẽ quản lý state 'tasks' tại đây
  };
  return (
    <>
    <header className="py-4">
      <Header/>
    </header>
    <ToDoList todos={todos}/>
    <FormAddToDo addToDo={addTodo} />    
    </>
  )
}

export default App
