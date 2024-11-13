import React, { useState, useEffect } from 'react';

const TaskForm = ({ onSubmit, editingTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setPriority(editingTask.priority);
    } else {
      setTitle('');
      setDescription('');
      setPriority('Medium');
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return;
    onSubmit({ id: editingTask?.id, title, description, priority, status: editingTask ? editingTask.status : 'Pending' });
    setTitle('');
    setDescription('');
    setPriority('Medium');
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2 style={styles.formHeading}>{editingTask ? 'Edit Task' : 'Add New Task'}</h2>
      <input
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.textarea}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)} style={styles.select}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button type="submit" style={styles.submitButton}>
        {editingTask ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  );
};

const styles = {
  form: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginTop: '20px',
    textAlign: 'left',
  },
  formHeading: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#444',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ddd',
    resize: 'none',
  },
  select: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    fontSize: '1em',
    borderRadius: '5px',
    border: '1px solid #ddd',
  },
  submitButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#28a745',
    color: '#fff',
    fontSize: '1em',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TaskForm;
