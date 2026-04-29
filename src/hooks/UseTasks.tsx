import {useEffect, useState} from 'react';
import {compareTaskReverse, FILTER_STATE} from "../@types/Task";
import type {ITask} from "../@types/Task";


const isValidKey = (key:string ) : boolean =>
    key !== null && key !== undefined && typeof(key) === "string" && key.length > 1;

function useTasks(key: string = '') {
    const useKey  = (typeof window !== 'undefined' && isValidKey(key));

    const [taskList, setTaskList]= useState(useKey? JSON.parse(localStorage.getItem(key) as string): []);

    const [filteredTasks, setFilteredTasks] = useState(taskList);

    useEffect(() => {
        if(useKey)
            localStorage.setItem(key, JSON.stringify(taskList));
    }, [key, useKey, taskList]);

    const [filterTask, setFilter] = useState({
        filterId: false,
        id: 0,
        status: FILTER_STATE.NO_FILTER,
        title: "",
        desc: ""
    });

    useEffect(() => {
        setFilteredTasks(filterTask.status == FILTER_STATE.NO_FILTER? taskList:
            taskList.filter((item :ITask) =>
                item.status === Boolean(Number(filterTask.status))
            ))
        console.log({postFilteredTasks: filteredTasks});
    }, [filterTask]);

    const addTask = (task : ITask)=> {
        setTaskList([task, ...taskList].sort(compareTaskReverse));
        setFilteredTasks([task, ...filteredTasks]);
    };
    const deleteTask = (id:number)=> {
        setTaskList((taskList: ITask[]) => taskList.filter((task) => task.id !== id).sort(compareTaskReverse));
        setFilteredTasks((filteredTasks: ITask[]) => filteredTasks.filter((task) => task.id !== id));
    };
    const updateTask: (id: number, task: ITask) => void = (id: number, task: ITask):void => {
        setTaskList((taskList: ITask[]) :ITask[] => taskList.map((item:ITask):ITask => item.id === id ? task : item).sort(compareTaskReverse));
    };
    const toggleTask : (id: number) => void = (id: number) : void => {
        console.log({updating: id});
        setTaskList((taskList: ITask[]) => taskList.map((task: ITask): ITask => task.id === id ? { ...task, status: !task.status } : task).sort(compareTaskReverse));
    };

    return {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks}
}

export {useTasks};
