import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import tasksStorage from '../sessions/tasksStorage';

const AddTasks = () => {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [defaultText, setDefaultText] = useState(false)
  const { state } = useLocation()
  const navigate = useNavigate()
  const tasks = tasksStorage().getTasks()


  useEffect(() => {
    if(state && !defaultText) {
      const { index } = state
      setTitle(tasks[index].title)
      setDescription(tasks[index].description)
      setDefaultText(true)
    }
  }, [state, defaultText, tasksStorage, setTitle])

  const changeHandler = (e, setter) => {
    setter(e.target.value)
  }

  const addTask = () => {
    if(!state) {
      let tasks = tasksStorage().getTasks()
      tasks.push({title: title, description: description, group: "ToDo"})
      tasksStorage().setTasks(tasks)
    } else {
      const { index } = state
      tasks[index].title = title
      tasks[index].description = description
      tasksStorage().setTasks(tasks)
      navigate('/')
    }
  }

  return (
    <>
      <Header>
        <p><Link to="/">Task Management &gt;</Link> Home</p>
      </Header>
      <div className='container'>
        <h4 className='add-tasks-title'>Add new Task</h4>
        <input className='input' name='title' value={title} placeholder='Title' onChange={(e) => changeHandler(e, setTitle)}/>
        <textarea rows={10} col className='text-area' name='desc' value={description} placeholder='Description' onChange={(e) => changeHandler(e, setDescription)}/>
        <button className='btn submit' onClick={() => addTask()} >+ Add</button>
      </div>
    </>
  )
};
// 149,300
export default AddTasks;
