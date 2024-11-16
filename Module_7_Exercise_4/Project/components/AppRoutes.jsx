import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
// import DashboardPage, {
//   DashboardMessages,
//   DashboardTasks,
// } from "../pages/DashboardPage";
// import PageNotFound from "../pages/PageNotFound";

import DashboardPage, {
  DashboardMessages,
  DashboardTasks,
} from "../../../Module_7/vite-project/pages/DashboardPage";
import PageNotFound from "../../../Module_7/vite-project/pages/PageNotFound";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="/about" element={<LoginPage {...props} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
