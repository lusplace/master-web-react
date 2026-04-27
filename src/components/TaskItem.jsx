import React from 'react';
import {useTaskContext} from "../contexts/TaskContext.jsx";
import "./TaskItem.css";

export default function TaskItem({task}){
    const {deleteTask, toggleTask} = useTaskContext()
    return (
        <li className="task-item" key={task.id}>
            <h3 className="rock-salt-regular">
                {task?.title ?? "Nombre de Tarea"}
            </h3>

            <input type="checkbox" onChange={() => toggleTask(task.id)}
                   defaultChecked={task.status} value={'"' + task.status + '"'}>
            </input>

            <button className={"gloria-hallelujah-regular"} onClick={() => deleteTask(task.id)}>
                X
            </button>

            {task?.desc && task.desc.length > 0 && <p className="shadows-into-light-regular">{task.desc}</p>}

        </li>
);
}