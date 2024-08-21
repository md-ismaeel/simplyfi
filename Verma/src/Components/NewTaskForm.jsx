// NewTaskForm.js
import React, { useState } from 'react';

const NewTaskForm = ({ onTaskAdd }) => {
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskTitle.trim() && taskDescription.trim()) {
            onTaskAdd({ title: taskTitle, description: taskDescription });
            setTaskTitle('');
            setTaskDescription('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-container">
                <input
                    name="taskTitle"
                    placeholder="Task title*"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                />
            </div>
            <div className="input-container">
                <textarea
                    name="taskDescription"
                    placeholder="Task description*"
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                ></textarea>
            </div>
            <div>
                <input type="submit" value="Create task" />
            </div>
        </form>
    );
};

export default NewTaskForm;