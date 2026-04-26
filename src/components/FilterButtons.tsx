import {useEffect, useState} from 'react';
import {FILTER_STATE, ITask, IFilterTask} from "../@types/Task";
import {useTaskContext} from "../contexts/TaskContext";
import TaskList from "./TaskList";


// todo filtrar por más cosas: no se va a hacer


export default function FilterButtons(){

    const {taskList, filteredTasks, setFilter, filterTask} = useTaskContext();


    const handleChange = (event) => {
        console.log({"new value filter": event.target.value});
        setFilter({...filterTask, status: event.target.value})
    }

    return (
        <>
            <label>
                <select onChange={handleChange} defaultValue={FILTER_STATE.NO_FILTER}>
                    <option value={FILTER_STATE.NO_FILTER}>Show All</option>
                    <option value={FILTER_STATE.ONLY_COMPLETED}>Only Completed</option>
                    <option value={FILTER_STATE.ONLY_PENDING}>Only Pending</option>
                </select>
            </label>
        </>
    )
}