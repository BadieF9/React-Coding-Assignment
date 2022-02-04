import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import tasksStorage from '../sessions/tasksStorage';

const AddTasks = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // useEffect(() => {
  //   console.log(title, description);
  // }, [title, description])

  const changeHandler = (e, setter) => {
    setter(e.target.value)
  }

  const addTask = () => {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = [...tasks, {title: title, description: description, group: "ToDo"}]
    localStorage.setItem('tasks', tasks)
    console.log(JSON.parse(localStorage.getItem('tasks')));
  }

  return (
    <>
      <Header>
        <p><Link to="/">Task Management &gt;</Link> Home</p>
      </Header>
      <div className='container'>
        <h4 className='add-tasks-title'>Add new Task</h4>
        <input className='input' name='title' placeholder='Title' onChange={(e) => changeHandler(e, setTitle)}/>
        <textarea rows={10} col className='text-area' name='desc' placeholder='Description' onChange={(e) => changeHandler(e, setDescription)}/>
        <button className='btn submit' onClick={() => addTask()} >+ Add</button>
      </div>
    </>
  )
};
// 149,300
export default AddTasks;
