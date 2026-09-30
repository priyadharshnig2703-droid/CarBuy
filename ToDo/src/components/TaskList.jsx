import TaskItem from "./TaskItem";

function TaskList({tasks, onDelete,onChangeStatus,
}) {
  if (tasks.length === 0) {
    return (
<div className="empty-message">
        No tasks found.
      </div>
    );
  }

  return (
    <div className="task-list">

      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onDelete={onDelete}
          onChangeStatus={onChangeStatus}
        />
      ))}

    </div>
  );
}

export default TaskList;