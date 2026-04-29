import { renderHook, act } from '@testing-library/react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Task} from "../@types/Task.js";
import {useTasks} from "../hooks/UseTasks.jsx";
import {TaskList} from "../components/TaskList.js";


const mockValues = [
    {title: "task1", desc: "desc1"},
    {title: "task2", desc: "desc2"},
    {title: "task3", desc: "desc3"}
].map(item => new Task(item.title, item.desc));

const key= 'testTasks';

test('should render a taskList', () => {
    //const []
    render(<TaskList taskList={mockValues}/>);

    const unorderedList = screen.getByRole('h3', { name: /increment/i });
    //fireEvent.click(button);

    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
    const { result } = renderHook(() => useMyHook());
    expect(result.current).toBe(expectedValue);
});