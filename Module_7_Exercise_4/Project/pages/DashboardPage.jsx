import { useNavigate, Outlet } from "react-router-dom";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <div className="DashboardPage componentBox">
      <h1>Dashboard</h1>
      <button onClick={() => navigate("/dash/tasks")}>Show Tasks</button>
      <button onClick={() => navigate("/dash/messages")}>Show Messages</button>
      <button onClick={() => navigate(-1)}>Back</button>
      <Outlet />
    </div>
  );
}

export function DashboardMessages() {
  return <h2>Messages</h2>;
}

export function DashboardTasks() {
  return <h2>Tasks</h2>;
}
