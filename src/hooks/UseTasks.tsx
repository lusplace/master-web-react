import {useEffect, useState} from 'react';
import {compareTaskReverse, FILTER_STATE, ITask} from "../@types/Task";
import React from "react";

const defaultKey = 'tasks';

function useTasks(initialValue = [], customKey = null) {
    const key = customKey?? defaultKey;
    const data = typeof window !== 'undefined'? JSON.parse(localStorage.getItem(key) as string): initialValue;

    const [taskList, setTaskList]= useState(data);

    const [filteredTasks, setFilteredTasks] = useState(taskList);
    const [filterTask, setFilter] = useState({
        filterId: false,
        id: 0,
        status: FILTER_STATE.NO_FILTER,
        title: "",
        desc: ""
    });

    useEffect(() => {
        console.log({filterTask: filterTask});
        console.log({taskList: taskList});
        console.log({preFilteredTasks: filteredTasks});
        setFilteredTasks(filterTask.status == FILTER_STATE.NO_FILTER? taskList:
            taskList.filter((item :ITask) =>
                item.status === Boolean(Number(filterTask.status))
            ))
        console.log({postFilteredTasks: filteredTasks});
    }, [filterTask]);

    if(typeof window !== 'undefined')
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(taskList));
        }, [taskList]);

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
        setTaskList((taskList: ITask[]) => taskList.map((task: ITask): ITask => task.id === id ? { ...task, status: !task.status } : task).sort(compareTaskReverse));
    };

    return [taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks]
}

export {useTasks};
