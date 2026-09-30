import { useState } from "react";

function AddTodo({ onAddTask, onCancel }) {

  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [status, setStatus] = useState("Todo");

  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim() === "") {
      alert("Please enter a task");
      return;
    }

    const newTask = {
      title: title,
      dueDate: dueDate,
      status: status,
    };

    onAddTask(newTask);

    setTitle("");
    setDueDate("");
    setStatus("Todo");
  }

  return (
    <div className="add-page">

      <h1>Add New To Do</h1>

      <form onSubmit={handleSubmit}>

        <div className="form-group">

          <label>
            Task
          </label>

          <input
            type="text"
            placeholder="Enter your task"
            value={title}
            onChange={(event) =>
              setTitle(event.target.value)
            }
          />

        </div>

        <div className="form-group">

          <label>
            Due Date
          </label>

          <input
            type="date"
            value={dueDate}
            onChange={(event) =>
              setDueDate(event.target.value)
            }
          />

        </div>

        <div className="form-group">

          <label>
            Status
          </label>

          <select
            value={status}
            onChange={(event) =>
              setStatus(event.target.value)
            }
          >
            <option value="Todo">
              Todo
            </option>

            <option value="In Progress">
              In Progress
            </option>

            <option value="Completed">
              Completed
            </option>

          </select>

        </div>

        <div className="form-buttons">

          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
          >
            Cancel
          </button>

          <button
            type="submit"
            className="save-button"
          >
            Save
          </button>

        </div>

      </form>

    </div>
  );
}

export default AddTodo;