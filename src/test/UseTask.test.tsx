import { renderHook, act } from '@testing-library/react';
import { useTasks } from "../hooks/UseTasks";



test('Should init successfully \'UseTasks\' message', () => {
    //const {result} = renderHook(() => useTasks());
    const {result} = renderHook(() => useTasks(''));
    console.log(result.current);

    expect(typeof (result.current.addTask)).toBe("function");
    expect(typeof (result.current.deleteTask)).toBe("function");
    expect(typeof (result.current.updateTask)).toBe("function");
    expect(typeof (result.current.toggleTask)).toBe("function");
    expect(result.current.filterTask).toEqual({filterId: false, id: 0, status: -1, title: '', desc: ''});
    expect(typeof (result.current.setFilter)).toBe("function");
    expect(result.current.taskList.length).toBe(0);
    expect(result.current.filteredTasks.length).toBe(0);
});

test("should add to", async () => {
    const {result} = renderHook(() => useTasks(''));
    const { taskList, toggleTask }  = result.current;
    act(() => toggleTask(1));
    //act(() => addTask(new Task("testTask", "testDescription")));
    console.log(taskList)
    expect(taskList.length).toEqual(0);
    expect(taskList[0].title).toEqual("testTask");
    expect(taskList[0].desc).toEqual("testDescription");
});
