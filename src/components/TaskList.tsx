import TaskItem from "./TaskItem.js";
import {useTaskContext} from "../contexts/TaskContext.js";
import {ITask} from "../@types/Task.js";
import './TaskItem.css'

export default function TaskList({taskList}){

    return (
        <ul className="task-list">
        {taskList && taskList.length !== 0 ? (
            taskList.map((task: ITask) =>
                <TaskItem key={task.id} task={task}/>)
            ) : (
        <h4>TaskLess</h4>
        )
        }
    </ul>)
}
