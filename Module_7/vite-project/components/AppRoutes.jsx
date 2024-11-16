import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import DashboardPage, {
  DashboardMessages,
  DashboardTasks,
} from "../pages/DashboardPage";
import PageNotFound from "../pages/PageNotFound";
// import PostsPage, { Post, PostList } from "../pages/PostsPage";
import PostsPage, { Post, PostList } from "../pages/PostPage";

function AppRoutes(props) {
  return (
    <Routes>
      <Route index element={<Homepage {...props} />} />
      <Route path="/posts" element={<PostsPage {...props} />}>
        <Route index element={<PostList />} />
        {/* dynamic param taken from route, stored in variable called id */}
        <Route path=":id" element={<Post />} />
      </Route>
      <Route path="dash" element={<DashboardPage {...props} />}>
        <Route path="messages" element={<DashboardMessages />} />
        <Route path="tasks" element={<DashboardTasks />} />
      </Route>
      <Route path="/about" element={<AboutPage {...props} />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default AppRoutes;
