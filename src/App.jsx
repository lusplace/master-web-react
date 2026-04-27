
import './App.css'
import HeaderComponent from "./components/HeaderComponent.jsx";
import {TaskProvider} from "./contexts/TaskContext.jsx";
import {compareTask, Task} from "./@types/Task";
import {useTasks} from "./hooks/UseTasks";

import {TaskList} from "./components/TaskList";
import React, { Suspense, lazy} from 'react';

const FilterButtons = lazy(() => import ("./components/FilterButtons.jsx"));
const TaskForm = lazy(() => import ("./components/TaskForm.jsx"));

function App() {
    const [taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks] = useTasks([]);
    // @ts-ignore
    const taskContext = {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks}

      return (<div><HeaderComponent/>
            <TaskProvider value={taskContext}>
                <Suspense fallback={<div>Loading Form...</div>}>
                    <TaskForm />
                </Suspense>
                <Suspense fallback={<div>Loading Filters...</div>}>
                    <FilterButtons />
                </Suspense>
                <TaskList taskList={filteredTasks}/>
            </TaskProvider></div>)
}

export default App
