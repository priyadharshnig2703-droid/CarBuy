import { useState } from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/Searchbar";
import TaskList from "./components/TaskList";
import AddTodo from "./components/AddToDo";
import "./App.css";

function App() {
const [tasks, setTasks] = useState([
{
id: 1,
title: "Buy milk",
dueDate: "2026-09-28",
status: "Todo",
},
{
id: 2,
title: "Do meditation",
dueDate: "2026-09-29",
status: "In Progress",
},
{
id: 3,
title: "Keep pickle up kids",
dueDate: "2026-09-30",
status: "Todo",
},
]);
const [showAddTodo, setShowAddTodo] = useState(false);
const [search, setSearch] = useState("");const [activeTab, setActiveTab] = useState("All");

function addTask(newTask) {
setTasks((previousTasks) => [...previousTasks,
{...newTask,
id: Date.now(),
},
]);
setShowAddTodo(false);
  }
function deleteTask(id) {
setTasks((previousTasks) =>
previousTasks.filter((task) => task.id !== id)
);
}
function changeStatus(id, newStatus) {
setTasks((previousTasks) =>
previousTasks.map((task) =>
task.id === id
? { ...task, status: newStatus }: task
)
);
}
const filteredTasks = tasks.filter((task) => {
const matchesSearch = task.title.toLowerCase().includes(search.toLowerCase());
const matchesTab =
activeTab === "All" || task.status === activeTab;
return matchesSearch && matchesTab;
  });
return (
<div className="app">
<Navbar />
{showAddTodo ? (
<AddTodo onAddTask={addTask} onCancel={() => setShowAddTodo(false)}/>
) : (
<>
<div className="top-section">
<div>
 <h1>All Tasks</h1>
<p className="subtitle">
     Manage your daily tasks
  </p>
</div>

 <button
className="add-button"
onClick={() => setShowAddTodo(true)}
 > + Add Todo
</button>
 </div>
<SearchBar
search={search}
setSearch={setSearch} />
<div className="tabs">
<button className={activeTab === "All" ? "active-tab" : ""}
onClick={() => setActiveTab("All")}> All
</button>
<button className={ activeTab === "Todo" ? "active-tab" : "" } onClick={() => setActiveTab("Todo")} >
To Do </button>
<button className={ activeTab === "In Progress" ? "active-tab" : "" }
onClick={() => setActiveTab("In Progress")} > In Progress </button>
</div>
<TaskList tasks={filteredTasks} onDelete={deleteTask} onChangeStatus={changeStatus} />
</>
)}
</div>
);
}

export default App;