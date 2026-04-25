import TaskItem from "./TaskItem.js";
import {useTaskContext} from "../contexts/TaskContext";
import {ITask} from "../@types/Task";

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
