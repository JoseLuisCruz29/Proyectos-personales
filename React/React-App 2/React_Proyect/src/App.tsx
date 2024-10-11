import { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';

// Define la interfaz para el tipo de las tareas
interface Task {
  text: string;
  completed: boolean;
}

function App() {
  // Especifica que `tasks` es un array de objetos de tipo `Task`
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskInput, setTaskInput] = useState('');

  const addTask = () => {
    if (taskInput) {
      // Agrega una nueva tarea al estado
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const toggleTaskCompletion = (index: number) => {
    // Marca o desmarca una tarea como completada
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const removeTask = (index: number) => {
    // Elimina una tarea por su índice
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <>
      <header>
        <nav>
          {/* Asegúrate de proporcionar una ruta válida para la imagen */}
          <img className='logo' src="/img/logo.png" alt="Logo" />
          <div className="nav-link">
            {/* Implementa estas funciones para dar funcionalidad a los botones */}
            <button>Inicio</button>
          </div>
          <div className="nav-link">
            <button>Lista de Tarea</button>
          </div>
          <div className="nav-link">
            <button>Login</button>
          </div>
        </nav>
      </header>
      <main className="App">
        <div className="main">
          <h1>Lista de Tareas</h1>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button onClick={addTask}>Agregar Tarea</button>
          <TodoList
            tasks={tasks}
            toggleTaskCompletion={toggleTaskCompletion}
            removeTask={removeTask}
          />
        </div>
      </main>
    </>
  );
}

export default App;
