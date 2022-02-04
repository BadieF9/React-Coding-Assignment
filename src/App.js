import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTasks from './screens/AddTasks';
import Tasks from './screens/Tasks';
import { useEffect } from 'react';
import tasksStorage from './sessions/tasksStorage';

function App() {

  useEffect(() => {
    const tasks = tasksStorage().getTasks();
    if(!tasks) tasksStorage().setTasks([])
  })
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Tasks/>} exact />
          <Route path="/add-tasks" element={<AddTasks/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
