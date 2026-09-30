function TaskItem({
  task,
  onDelete,
  onChangeStatus,
}) {
  return (
 <div className="task-card">
<div className="task-left">
<div className="task-number">{task.id}</div>
<div><h3>{task.title}</h3>
<p>Due date: {task.dueDate}</p>
</div>
</div>
<div className="task-right">
<select value={task.status} onChange={(event) => onChangeStatus( task.id, event.target.value
)
}
>
<option value="Todo"> Todo </option>
<option value="In Progress"> In Progress </option>
<option value="Completed"> Completed </option> </select>
<button className="delete-button" onClick={() => onDelete(task.id)} >Delete </button>
</div>
</div>
);
}

export default TaskItem;