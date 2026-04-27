import '../App.css';
import React, {useState} from "react";
import {useTaskContext} from "../contexts/TaskContext.jsx";
import {Task} from "../@types/Task";

export default function TaskForm(){
    const {addTask} = useTaskContext();
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) {
            alert("Título es obligatorio");
            return;
        }
        try  {
            addTask(new Task(title, desc));
            e.target.reset();
        }
        catch (err) {
            console.error("Error al crear la tarea:", err);
            alert("Error al crear la tarea");
        }
    };
    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <label>
                <input
                    type= "text"
                    value= {title}
                    onChange={(e) => { setTitle(e.target.value) }}
                    id= "new-task-title"
                    placeholder= "new task"
                />

                <input
                    type= "text"
                    value= {desc}
                    onChange={(e) => {setDesc(e.target.value)}}
                    id="new-task-desc"
                    placeholder="descripción (opcional)"
                />
            </label>
            <button>
                <span className="visually-hidden" >Submit</span>
            </button>
        </form>
    );

}