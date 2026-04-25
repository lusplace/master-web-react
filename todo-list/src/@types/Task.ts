class Task implements ITask{
    static idAutoIncrement = 0;
    id: number;
    title: string;
    desc: string;
    status: boolean;

    constructor(title: string, desc: string | null) {
        this.id = Date.now() + Task.idAutoIncrement++;
        this.title = title;
        this.desc = desc;
        this.status = false;
    }
}

interface ITask {
    id: number;
    title: string;
    desc: string;
    status: boolean;
}

type TaskContextType = {
    taskList: ITask[];
    addTask: (task: ITask) => void;
    updateTask: (id: number, task: ITask) => void;
    deleteTask: (id: number) => void;
    toggleTask: (id: number) => void;
};

function compareTask (a:ITask, b:ITask) : number
{
    let comparison = a.title.localeCompare(b.title) ;
    if(comparison !== 0) return comparison;
    comparison = a.desc.localeCompare(b.desc);
    if(comparison !== 0) return comparison;
    return a.id - b.id;
}

export {ITask, Task, TaskContextType, compareTask}