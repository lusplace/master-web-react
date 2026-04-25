import {useEffect, useState} from 'react';
import {ITask} from "../@types/Task";
import {useTaskContext} from "../contexts/TaskContext";
import TaskList from "./TaskList";

enum FILTER_STATE {
    NO_FILTER = -1,
    ONLY_PENDING = 0,
    ONLY_COMPLETED = 1
}
// todo filtrar por más cosas: no se va a hacer
interface IFilterTask {
    id: number | null,
    filterId: boolean,
    title: string,
    desc: string,
    status: FILTER_STATE,
}

export default function FilteredTask(){

    const {taskList} = useTaskContext();
    const [filteredTasks, setFilteredTasks] = useState(taskList);
    const [filterTask, setFilter] = useState({
        filterId: false,
        id: 0,
        filterStatus: FILTER_STATE.NO_FILTER,
        title: "",
        desc: ""
    });
    useEffect((): void => {
        setFilteredTasks(filterTask.filterStatus == FILTER_STATE.NO_FILTER? taskList:
            taskList.filter((item :ITask) =>
            item.status === Boolean(Number(filterTask.filterStatus))
        ))
    }, [filterTask, taskList]);

    const handleChange = (event) => {
        console.log({"new value filter": event.target.value});
        setFilter({...filterTask, filterStatus: event.target.value})
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
            <TaskList taskList={filteredTasks}></TaskList>
        </>
    )
}