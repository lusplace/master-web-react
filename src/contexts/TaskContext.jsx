import {createContext, Provider, useContext} from "react"

const TaskContext = createContext(null);

const TaskProvider = TaskContext.Provider;

const useTaskContext = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTaskContext must be used inside the TaskProvider');
    }

    return context;
};

export { TaskContext, TaskProvider, useTaskContext};
