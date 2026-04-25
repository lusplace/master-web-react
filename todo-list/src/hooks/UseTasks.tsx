import {useEffect, useState} from 'react';
import {compareTask, compareTaskReverse, FILTER_STATE, ITask} from "../@types/Task";

const key = 'tasks';



function useTasks(initialValue: ITask[] = []) {

    const [taskList, setTaskList] : [ITask[], any] = useState<ITask[]>(initialValue);

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
    }, [filterTask]);

    useEffect((): void => {
        // console.log("\t useEffecting a tasklist");
        // console.log(taskList);

        localStorage.setItem(key, JSON.stringify(taskList));
    }, [taskList]);

    const addTask : (task: ITask) => void = (task: ITask) :void => {
        setTaskList([task, ...taskList].sort(compareTaskReverse));
        setFilteredTasks([task, ...filteredTasks]);
    };
    const deleteTask : (id: number) => void = (id: number):void => {
        setTaskList((taskList: ITask[]) :ITask[] => taskList.filter((task: ITask):boolean => task.id !== id).sort(compareTaskReverse));
    };
    const updateTask: (id: number, task:ITask) => void = (id: number, task: ITask):void => {
        setTaskList((taskList: ITask[]) :ITask[] => taskList.map((item:ITask):ITask => item.id === id ? task : item).sort(compareTaskReverse));
    };
    const toggleTask : (id: number) => void = (id: number) : void => {
        setTaskList((taskList: ITask[]) => taskList.map((task: ITask): ITask => task.id === id ? { ...task, status: !task.status } : task).sort(compareTaskReverse));
    };

    return [taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks]
}

export {useTasks};
