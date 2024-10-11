import React from 'react';

interface Task {
    text: string;
    completed: boolean;
}

interface TodoItemProps {
    task: Task;
    onToggle: () => void;
    onRemove: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, onToggle, onRemove }) => {
    return (
        <li>
            <span
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
                onClick={onToggle}
            >
                {task.text}
            </span>
            <button onClick={onRemove}>Eliminar</button>
        </li>
    );
}

export default TodoItem;
