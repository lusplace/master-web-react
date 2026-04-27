
class Task {
    static idAutoIncrement = 0;

    constructor(title, desc= "") {
        this.id = Date.now() + Task.idAutoIncrement++;
        this.title = title;
        this.desc = desc;
        this.status = false;
    }
}

function compareTask (a, b)
{
    let comparison = a.title.localeCompare(b.title) ;
    if(comparison !== 0) return comparison;
    comparison = a.desc.localeCompare(b.desc);
    if(comparison !== 0) return comparison;
    return a.id - b.id;
}

function compareTaskReverse (a, b)
{
    let comparison = b.title.localeCompare(a.title) ;
    if(comparison !== 0) return comparison;
    comparison = b.desc.localeCompare(a.desc);
    if(comparison !== 0) return comparison;
    return b.id - a.id;
}

const FILTER_STATE = {
    NO_FILTER : -1,
    ONLY_PENDING : 0,
    ONLY_COMPLETED : 1
}

export {Task, compareTask, compareTaskReverse, FILTER_STATE}