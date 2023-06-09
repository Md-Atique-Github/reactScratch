import React,{useState} from 'react';
// import useState from react;
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleCheck,faPen,faTrashCan} from '@fortawesome/free-solid-svg-icons'

import './App.css';

function App() {

  const [toDo, settoDo] = useState([
    {id:1 , title: 'task i' , status: false},
    {id:2 , title: 'task ii' , status: false}
  ]);

  const[newTask, setNewTask]= useState('');
  const[updateData, setUpdateData]= useState('');

  const addTask = () => {

  }

  const deleteTask = (id) => {
    
  }

  const markDone = (id) => {
    
  }

  const updateTask = () => {
    
  }

  const cancelUpdate = () => {
    
  }

  const changeTask = (e) => {
    
  }


  return (

    <div className="ContainerApp">

    <br /><br />
    <h2>To Do List App (ReactJS)</h2>
    <br /><br />

      {/*Display Things*/}

    {toDo && toDo.length ? '' : 'No Task...'}

    </div>
  );
}

export default App;
