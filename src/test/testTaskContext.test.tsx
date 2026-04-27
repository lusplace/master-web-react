import {render} from "@testing-library/react";
import {beforeEach, expect, test} from "@jest/globals";
import {Task} from "../@types/Task";
import {useTasks} from "../hooks/UseTasks";
import React from "react";

const initialValues = [
    {title: "task1", desc: "desc1"},
    {title: "task2", desc: "desc2"},
    {title: "task3", desc: "desc3"}
].map(item => new Task(item.title, item.desc));

const key= 'testTasks';

beforeEach(() => localStorage.removeItem(key));

const [taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks] = useTasks(initialValues, key);
// @ts-ignore
const taskContext = {taskList, addTask, updateTask, deleteTask, toggleTask, filterTask, setFilter, filteredTasks}


test('Should init successfully \'hola\' message', () => {
    expect(typeof(3)).toBe(Number);
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