import React from "react";
import "./tasklist.css";
import PropTypes from "prop-types";
import TaskItem from "../TaskItem/TaskItem";
import plusIcon from "../../img/plus-icon.svg";

export default function TaskList({ 
  title, 
  taskState, 
  onAddTask, 
  tasks, 
  onTaskUpdate,
  onDeleteTask,
  }) {
  
  const addTask = () => {
    onAddTask("Nova Tarefa", taskState);
  };
  
  return (
    <div className="tasklist">
      <div className="title">{title}
        <div className="content">
        { tasks.map((task) => (
          <TaskItem
          key={task.id}
          id={task.id}
          title={task.title}
          taskState={task.state}
          onTaskUpdate={onTaskUpdate}
          onDeleteTask={onDeleteTask} 
        />
        ))}
        {tasks.length === 0 && <div className="empty-list">Lista Vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar nova tarefa
        </button>
        </div>     
      </div> 
    </div>
  )
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
