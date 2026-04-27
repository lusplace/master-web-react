import { renderHook, act } from '@testing-library/react';
import {Task} from "../@types/Task.js";
import {useTasks} from "../hooks/UseTasks.jsx";

const initialValues = [
    {title: "task1", desc: "desc1"},
    {title: "task2", desc: "desc2"},
    {title: "task3", desc: "desc3"}
].map(item => new Task(item.title, item.desc));

const key= 'testTasks';

beforeAll(
    () => {
        localStorage.removeItem(key)

    });

test('Should init successfully \'useTasks\' message', () => {
    const { result } = renderHook((initialValues) => useTasks(initialValues, key));
    //const [taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks] = useTasks(initialValues);
    console.log(result);
    expect(result.current.taskList.length).toBe(3);
});

describe("useTasks", () => {
    it("should return the initial values for data, error and loading", async () => {
        console.log({
            initialValues: initialValues,
            newKey: key
        });
        const result = renderHook((initialValues, key) => useTasks(initialValues, key));
        //const { taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks } = result.current;
        console.log(result);
        expect(taskList.length).toBe(3);

    });
});

test('Should add initialValues', () => {
    console.log(initialValues, key)
    const { result } = renderHook(() => useTasks([], key));
    //const [taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks] = useTasks(initialValues);
    act(() => {
        result.current.addTask(initialValues[0]);
    });
    expect(result.current.taskList[0].title).toBe("task1");
});

test('adds 1 + 2 to equal 3', () => {
    expect( 1 + 2 ).toBe(3);
});

test('Should render \'hello\' message', () => {
    /*render(<TaskContext.Provider value={taskContext}>
            <FilterButtons />
        </TaskContext.Provider>
    );
    expect(screen.getByText('hola')).toBeInTheDocument();*/
});