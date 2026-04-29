import TaskItem from "./TaskItem.js";
import type {ITask} from "../@types/Task.js";
import './TaskItem.css'

export function TaskList({taskList} : {taskList: ITask[]}) {

    return (
        <ul className="task-list">
            {taskList && taskList.length !== 0 ? (
                taskList.map((task: ITask) =>
                    <TaskItem task={task} key={task.id}/>)
            ) : (
                <h4>TaskLess?</h4>
            )
            }
        </ul>)
}
