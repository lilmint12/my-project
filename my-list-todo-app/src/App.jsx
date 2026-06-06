import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import header from './components/Header'
import Header from './components/Header'
import AddToDo from './components/AddToDo'
function App() {
  const [count, setCount] = useState(0)
  const handleAdd = () => {
    console.log("Task đang được thêm...");
    // Sau này bạn sẽ quản lý state 'tasks' tại đây
  };
  return (
    <>
    <header className="py-4">
      <Header/>
    </header>
    {/* <main className="container">

    </main> */}
    <AddToDo onAddTask={handleAdd} />    
    </>
  )
}

export default App
