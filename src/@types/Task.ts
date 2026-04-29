
class Task implements ITask{
    static idAutoIncrement = 0;
    id: number;
    title: string;
    desc: string;
    status: boolean;

    constructor(title: string, desc: string = "") {
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
    filterTask: IFilterTask;
    setFilter: unknown,
    filteredTasks: ITask[];
};

function compareTask (a:ITask, b:ITask) : number
{
    let comparison = a.title.localeCompare(b.title) ;
    if(comparison !== 0) return comparison;
    comparison = a.desc.localeCompare(b.desc);
    if(comparison !== 0) return comparison;
    return a.id - b.id;
}

function compareTaskReverse (a:ITask, b:ITask) : number
{
    let comparison = b.title.localeCompare(a.title) ;
    if(comparison !== 0) return comparison;
    comparison = b.desc.localeCompare(a.desc);
    if(comparison !== 0) return comparison;
    return b.id - a.id;
}

interface IFilterTask {
    id: number | null,
    filterId: boolean,
    title: string,
    desc: string,
    status: FILTER_STATE,
}

// @ts-ignore
enum FILTER_STATE {
    NO_FILTER = -1,
    ONLY_PENDING = 0,
    ONLY_COMPLETED = 1
}

export {Task, compareTask, compareTaskReverse, FILTER_STATE};
export type { ITask, TaskContextType, IFilterTask, };
