import TaskItem from "./TaskItem.js";
import {ITask} from "../@types/Task.js";
import './TaskItem.css'
import React = require("react");

// @ts-ignore
export function TaskList({taskList}) {

    return (
        <ul className="task-list">
            {taskList && taskList.length !== 0 ? (
                taskList.map((task: ITask) =>
                    <TaskItem task={task} key={task.id}/>)
            ) : (
                <h4>TaskLess</h4>
            )
            }
        </ul>)
}
