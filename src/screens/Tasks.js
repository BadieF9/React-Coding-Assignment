import React, { useState } from 'react';
import Header from '../components/Header';
import tasksStorage from '../sessions/tasksStorage';
import editLogo from '../img/edit-solid.svg';
import { useNavigate } from 'react-router-dom';
const Tasks = () => {
  const [tasks, setTasks] = useState(tasksStorage().getTasks())
  const navigate = useNavigate()

  const taskStatusChaneHandler = (e, index) => {
    setTasks((prevTask) => {
      prevTask[index].group = e.target.value.toLowerCase()
      tasksStorage().setTasks(prevTask)
      return prevTask
    })
  }

  const editTask = (index) => {
    navigate('/add-tasks', {state: {
      index: index
    }})
  }

  return (
    <>
      <Header>
        <p>Tasks</p>
      </Header>
      <div className='container tasks-container'>
        <div className='cards'>
          {console.log(tasks)}
          {tasks !== null && tasks.map((task, index) => (
            <div className='card' key={index}>
              <div className='car-body'>
                <h4 className='card-title'>{task.title}</h4>
                <p className='card-desc'>{task.description}</p>
              </div>

              <div className='card-footer d-flex justify-content-between'>
                <select className='select' onChange={(e) => taskStatusChaneHandler(e, index)}>
                  <option selected={task.group === 'todo'}>ToDo</option>
                  <option selected={task.group === 'inprogress'}>InProgress</option>
                  <option selected={task.group === 'inqa'}>InQA</option>
                  <option selected={task.group === 'done'}>Done</option>
                </select>
                <img src={editLogo} className='logo-edit' onClick={() => editTask(index)}/>
              </div>
                  <i className='fas fa-edit'></i>
            </div>
          ))}
        </div>
        
      </div>
    </>
  );
};

export default Tasks;
