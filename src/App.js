import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddTasks from './screens/AddTasks';
import Tasks from './screens/Tasks';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    if(!localStorage.getItem('tasks')) localStorage.setItem('tasks', '[{}]')
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
