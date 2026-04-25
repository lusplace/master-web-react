
import './App.css'
import TaskList from "./components/TaskList.js";
import TaskForm from "./components/TaskForm.js";
import HeaderComponent from "./components/HeaderComponent.js";
import {useEffect} from "react";
import {TaskProvider} from "./contexts/TaskContext";
import {compareTask, ITask, Task, TaskContextType} from "./@types/Task";
import {useTasks} from "./hooks/UseTasks";

function App() {
    const startingData : ITask[] = ['code', 'depress', 'repeat'].map(item => new Task(item, "indescriptible"))
    const key = 'tasks';
    const [taskList, addTask, updateTask, deleteTask, toggleTask] = useTasks(JSON.parse(localStorage.getItem(key)) ?? startingData.sort(compareTask));
    // @ts-ignore
    const taskContextType : TaskContextType = {taskList, addTask, updateTask, deleteTask, toggleTask}

      return (
        <>
            <HeaderComponent></HeaderComponent>
            <TaskProvider value = {taskContextType}>
                <TaskList/>
                <TaskForm/>
            </TaskProvider>
        </>
      )
}

export default App
