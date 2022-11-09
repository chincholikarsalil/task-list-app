import TaskList from "./TaskList";

export default function Main() {
  return (
    <div className="Main">
      <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <h3 className="navbar-brand">Task List App</h3>
      </nav>
      <br />
      <TaskList />
    </div>
  );
}
