import React, { useState } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

const App = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Finish React Project', description: 'Complete the task management app.', status: 'Pending', priority: 'High' },
    { id: 2, title: 'Clean the house', description: 'Do a full house cleaning.', status: 'Completed', priority: 'Low' },
  ]);

  const [editingTask, setEditingTask] = useState(null);

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: tasks.length + 1 }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
    setEditingTask(null);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const startEditing = (task) => setEditingTask(task);

  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
    ));
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.title}>Task Management App</h1>
      <TaskList tasks={tasks} onEdit={startEditing} onDelete={deleteTask} onToggleStatus={toggleTaskStatus} />
      <TaskForm onSubmit={editingTask ? editTask : addTask} editingTask={editingTask} />
    </div>
  );
};

const styles = {
  appContainer: {
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  title: {
    fontSize: '2em',
    color: '#333',
  },
};

export default App;
