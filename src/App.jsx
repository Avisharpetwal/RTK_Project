import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const PostsPage = React.lazy(() => import("./pages/PostsPage"));
const UsersPage = React.lazy(() => import("./pages/UsersPage"));
const TodosPage = React.lazy(() => import("./pages/TodosPage"));
const HomePage = React.lazy(() => import("./pages/HomePage"));

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/users">Users</Link> |{" "}
        <Link to="/todos">Todos</Link> |{" "}
        <Link to="/posts">Posts</Link> |{" "}
        
      </nav>
      <Suspense fallback={<p>Loading page...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/todos" element={<TodosPage />} />
          <Route path="/posts" element={<PostsPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
