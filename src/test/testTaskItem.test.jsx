import {act, renderHook} from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import {Task} from "../@types/Task.js";
import {useTasks} from "../hooks/UseTasks.jsx";
import {TaskList} from "../components/TaskList.js";
import {Suspense, use, useContext} from 'react';
import ReactDOMClient from 'react-dom/client';

import {TaskContext, TaskProvider} from "../contexts/TaskContext.js";
import  {TaskContextType} from "../@types/Task.js";

const mockValues = [
    {title: "task1", desc: "desc1"},
    {title: "task2", desc: "desc2"},
    {title: "task3", desc: "desc3"}
].map(item => new Task(item.title, item.desc));

it('<Page />', () => {

    const container = document.createElement('div');
    document.body.appendChild(container);
    const {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks} = useTasks('defaultKey');
    const taskContext = {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks}

    // ✅ Render the component inside act().
    act(() => {
        ReactDOMClient.createRoot(container).render(
            <TaskContext.Provider value = {taskContext}>
                <TaskList taskList={filteredTasks}/>
            </TaskContext.Provider>);
        });



    })

it("renders loading state initially", async () => {
    render(<TaskList taskList={result.current.taskList} />);
});
