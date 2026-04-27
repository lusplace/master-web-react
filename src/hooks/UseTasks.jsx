import {useEffect, useState} from 'react';
import {compareTaskReverse, FILTER_STATE} from "../@types/Task";
import React from "react";

const defaultKey = 'tasks';

function useTasks(initialValue = [], customKey = null) {
    const key = customKey?? defaultKey;
    const data = typeof window !== 'undefined'? JSON.parse(localStorage.getItem(key)): initialValue;

    console.log({
        initialValues: initialValue,
        newKey: customKey
    });
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
        setFilteredTasks(filterTask.status == FILTER_STATE.NO_FILTER? taskList:
            taskList.filter((item) =>
                item.status === Boolean(Number(filterTask.status))
            ))
    }, [filterTask]);

    if(typeof window !== 'undefined')
        useEffect(() => {
            localStorage.setItem(key, JSON.stringify(taskList));
        }, [taskList]);

    const addTask = (task)=> {
        setTaskList([task, ...taskList].sort(compareTaskReverse));
        setFilteredTasks([task, ...filteredTasks]);
    };
    const deleteTask = (id)=> {
        setTaskList((taskList) => taskList.filter((task) => task.id !== id).sort(compareTaskReverse));
        setFilteredTasks((filteredTasks) => filteredTasks.filter((task) => task.id !== id));
    };
    const updateTask = (id, task) => {
        setTaskList((taskList)=> taskList.map((item) => item.id === id ? task : item).sort(compareTaskReverse));
    };
    const toggleTask = (id) => {
        setTaskList((taskList) => taskList.map((task) => task.id === id ? { ...task, status: !task.status } : task).sort(compareTaskReverse));
    };

    return [taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks]
}

export {useTasks};
