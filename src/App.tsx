
import './App.css'
import HeaderComponent from "./components/HeaderComponent";
import {TaskProvider} from "./contexts/TaskContext";
import type { TaskContextType }  from "./@types/Task";
import {useTasks} from "./hooks/UseTasks";

import {TaskList} from "./components/TaskList";
import { Suspense, lazy} from 'react';

const FilterButtons = lazy(() => import ("./components/FilterButtons"));
const TaskForm = lazy(() => import ("./components/TaskForm"));


function App() {
    const {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks} = useTasks('defaultKey');
    const taskContext: TaskContextType = {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks}

      return (
        <>
            <HeaderComponent></HeaderComponent>
            <TaskProvider value = {taskContext}>
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
