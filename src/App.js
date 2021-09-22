import React from "react";
import "./styles.css";

import Navbar from "./components/Navbar/Navbar";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <div className="container">
          <TaskList title="Pendente"/>
          <TaskList title="Fazendo"/>
          <TaskList title="Concluído" />
        </div>
      </div>
    </div>
  );
}
