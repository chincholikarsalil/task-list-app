import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleEnterPressed = (event) => {
    if (event.key === "Enter") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const markTaskAsDone = (task) => {
    setTasks([...tasks].filter((tsk) => tsk !== task));
  };

  return (
    <div className="TaskList container">
      <div className="card">
        <div className="card-header">All Tasks</div>
        <ul className="list-group list-group-flush">
          {tasks.map((task, idx) => {
            return (
              <li key={idx} className="list-group-item col-12">
                <button
                  className="btn btn-sm btn-outline-success"
                  onClick={() => markTaskAsDone(task)}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                {task}
              </li>
            );
          })}
        </ul>
      </div>
      <br />
      <div className="form-group">
        <input
          id="newTaskInput"
          type="text"
          className="form-control"
          value={newTask}
          onChange={handleChange}
          onKeyDown={handleEnterPressed}
          placeholder={"New Task"}
        />
      </div>
    </div>
  );
}
