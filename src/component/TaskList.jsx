import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onToggleStatus }) => (
  <div style={styles.container}>
    <h2 style={styles.heading}>Tasks</h2>
    {tasks.map(task => (
      <div key={task.id} style={styles.taskCard}>
        <h3 style={styles.taskTitle}>{task.title}</h3>
        <p style={styles.taskDescription}>{task.description}</p>
        <span style={{ ...styles.status, backgroundColor: task.status === 'Pending' ? '#ffcc00' : '#28a745' }}>
          {task.status}
        </span>
        <span style={{ ...styles.priority, backgroundColor: getPriorityColor(task.priority) }}>
          {task.priority} Priority
        </span>
        <button style={styles.toggleButton} onClick={() => onToggleStatus(task.id)}>
          Mark as {task.status === 'Pending' ? 'Completed' : 'Pending'}
        </button>
        <button style={styles.editButton} onClick={() => onEdit(task)}>Edit</button>
        <button style={styles.deleteButton} onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    ))}
  </div>
);

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'High':
      return '#dc3545';
    case 'Medium':
      return '#ffc107';
    case 'Low':
      return '#007bff';
    default:
      return '#ccc';
  }
};

const styles = {
  container: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '1.5em',
    color: '#444',
  },
  taskCard: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '5px',
    marginBottom: '10px',
    textAlign: 'left',
    position: 'relative',
  },
  taskTitle: {
    fontSize: '1.2em',
    margin: '0 0 5px',
    color: '#333',
  },
  taskDescription: {
    fontSize: '1em',
    margin: '5px 0',
    color: '#666',
  },
  status: {
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '4px',
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    top: '10px',
    right: '10px',
  },
  priority: {
    display: 'inline-block',
    padding: '5px 10px',
    borderRadius: '4px',
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    top: '10px',
    left: '10px',
  },
  toggleButton: {
    marginTop: '10px',
    padding: '8px 16px',
    fontSize: '0.9em',
    backgroundColor: '#17a2b8',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  editButton: {
    marginTop: '10px',
    padding: '8px 16px',
    fontSize: '0.9em',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px',
  },
  deleteButton: {
    marginTop: '10px',
    padding: '8px 16px',
    fontSize: '0.9em',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TaskList;
