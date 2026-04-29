import {useTaskContext} from "../contexts/TaskContext";
import {FILTER_STATE} from "../@types/Task.ts";

export default function FilterButtons(){

    const {setFilter, filterTask} = useTaskContext();


    const handleChange = (event : any) => {
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