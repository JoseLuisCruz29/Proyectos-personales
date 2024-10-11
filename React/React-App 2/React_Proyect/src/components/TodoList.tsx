import React from 'react';

// TodoList.tsx
interface TodoListProps {
    tasks: { text: string; completed: boolean }[];
    toggleTaskCompletion: (index: number) => void;
    removeTask: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTaskCompletion, removeTask }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={index} className={task.completed ? 'completed' : ''}>
                    <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
                    <button onClick={() => removeTask(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
