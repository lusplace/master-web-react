import {createContext, Provider, useContext} from "react"
import {TaskContextType} from "../@types/Task";

const TaskContext: React.Context<TaskContextType | null> = createContext<TaskContextType |null>(null)

const TaskProvider: Provider<TaskContextType> = TaskContext.Provider

const useTaskContext = () => {
    const context = useContext(TaskContext);

    if (!context) {
        throw new Error('useTaskContext must be used inside the TaskProvider');
    }

    return context;
};

export { TaskContext, TaskProvider, useTaskContext};
