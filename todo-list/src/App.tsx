
import './App.css'
import HeaderComponent from "./components/HeaderComponent.js";
import {TaskProvider} from "./contexts/TaskContext";
import {compareTask, ITask, Task, TaskContextType} from "./@types/Task";
import {useTasks} from "./hooks/UseTasks";

import TaskList from "./components/TaskList";
import { Suspense, lazy} from 'react';

const FilterButtons = lazy(() => import ("./components/FilterButtons"));
const TaskForm = lazy(() => import ("./components/TaskForm"));

function App() {
    const startingData : ITask[] = ['code', 'depress', 'repeat'].map(item => new Task(item, "indescriptible"))
    const key = 'tasks';
    const [taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks] = useTasks(JSON.parse(localStorage.getItem(key)) ?? startingData.sort(compareTask));
    // @ts-ignore
    const taskContextType : TaskContextType = {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks}

      return (
        <>
            <HeaderComponent></HeaderComponent>
            <TaskProvider value = {taskContextType}>
                <Suspense fallback={<div>Loading Form...</div>}>
                    <TaskForm />
                </Suspense>
                <Suspense fallback={<div>Loading Filters...</div>}>
                    <FilterButtons />
                </Suspense>
                <TaskList taskList={filteredTasks}/>
            </TaskProvider>
        </>
      )
}

export default App
