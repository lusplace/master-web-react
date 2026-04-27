import TaskItem from "./TaskItem.jsx";
import './TaskItem.css'
import React from "react";

// @ts-ignore
export function TaskList({taskList}) {

    return (
        <ul className="task-list">
            {taskList && taskList.length !== 0 ? (
                taskList.map((task) =>
                    <TaskItem task={task} key={task.id}/>)
            ) : (
                <h4>TaskLess</h4>
            )
            }
        </ul>)
}
