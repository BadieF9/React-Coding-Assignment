import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Dropdown } from 'react-bootstrap';

const Tasks = () => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')))
  useEffect(() => {
    console.log(tasks);
  }, [tasks])
  return (
    <>
      <Header>
        <p>Tasks</p>
      </Header>
      <div className='container tasks-container'>
        <div className='cards'>
          {/* {tasks.map((task, index) => {
            <div className='card'>
            <div className='car-body'>
              <h4 className='card-title'>Title</h4>
              <p className='card-desc'>hello world this is a description</p>
            </div>
            <div className='card-footer'>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
          })} */}
        </div>
        
      </div>
    </>
  );
};

export default Tasks;
