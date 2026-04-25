
import './App.css'
import TaskForm from "./components/TaskForm.js";
import HeaderComponent from "./components/HeaderComponent.js";
import {TaskProvider} from "./contexts/TaskContext";
import {compareTask, ITask, Task, TaskContextType} from "./@types/Task";
import {useTasks} from "./hooks/UseTasks";
import FilteredTask from "./components/FilterButtons";

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
                <FilteredTask />
                <TaskForm/>
            </TaskProvider>
        </>
      )
}

export default App
