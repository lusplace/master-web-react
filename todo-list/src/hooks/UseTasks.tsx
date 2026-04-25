import {useEffect, useState} from 'react';
import {compareTask, ITask} from "../@types/Task";

const key = 'tasks';

function useTasks(initialValue: ITask[] = []) {

    const [taskList, setTaskList] : [ITask[], any] = useState<ITask[]>(initialValue);

    useEffect((): void => {
        console.log("\t useEffecting a tasklist");
        console.log(taskList);
        localStorage.setItem(key, JSON.stringify(taskList));
    }, [taskList]);

    const addTask : (task: ITask) => void = (task: ITask) :void => {
        setTaskList([task, ...taskList].sort(compareTask));
    };
    const deleteTask : (id: number) => void = (id: number):void => {
        setTaskList((taskList: ITask[]) :ITask[] => taskList.filter((task: ITask):boolean => task.id !== id).sort(compareTask));
    };
    const updateTask: (id: number, task:ITask) => void = (id: number, task: ITask):void => {
        setTaskList((taskList: ITask[]) :ITask[] => taskList.map((item:ITask):ITask => item.id === id ? task : item).sort(compareTask));
    };
    const toggleTask : (id: number) => void = (id: number) : void => {
        setTaskList((taskList: ITask[]) => taskList.map((task: ITask): ITask => task.id === id ? { ...task, filter_status: !task.status } : task).sort(compareTask));
    };

    return [taskList, addTask, updateTask, deleteTask, toggleTask]
}

export {useTasks};
