import {useTaskContext} from "../contexts/TaskContext";

export default function TaskItem({task}){
    const {deleteTask, toggleTask} = useTaskContext()
    return (
        <li className="task-item">
            <h3>{task?.title?? "Nombre de Tarea"}</h3>
            <input type="checkbox" onChange={() => toggleTask(task.id)}
                   defaultChecked={task.status} value={'"' + task.status + '"'}>
            </input>
            {task?.desc && task.desc.length > 0 && <p>{task.desc}</p>}
            <button onClick={() => deleteTask(task.id)}>
                X
            </button>
        </li>
    );
}