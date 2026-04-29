import { renderHook, act } from '@testing-library/react';
import ReactDOMClient from 'react-dom/client';

import {useTasks} from "../hooks/UseTasks.js";
import {Task} from "../@types/Task";
import TaskItem from "../components/TaskItem";


test('<Page />', () => {

    const container = document.createElement('div');
    document.body.appendChild(container);

    // ✅ Render the component inside act().
    act(() => {
        ReactDOMClient.createRoot(container).render(<TaskItem task={new Task("testTask", "testDesc")} />);
    });


/*
    const {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks} = useTasks('defaultKey');
    const taskContext: TaskContextType = {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks}
*/

/*    <TaskProvider value = {taskContext}>
        <TaskList taskList={filteredTasks}/>
    </TaskProvider>*/
})
