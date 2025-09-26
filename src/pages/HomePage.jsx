import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div>
      <h1>Welcome to the Optimized Dashboard </h1>
      <p>
        This is a simple React + Redux Toolkit project that shows how to fetch
        and display data with optimizations.
      </p>

      <h3>Features:</h3>
      <ul>
        <li>Fetch data with RTK Query (cached automatically)</li>
        <li>Paginated list of posts</li>
        <li>Search and filter posts</li>
        <li>Optimized with React.memo and other techniques</li>
        <li>Lazy loaded routes for better performance</li>
      </ul>

      <h3>Explore:</h3>
      <ul>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/todos">Todos</Link>
        </li>
      </ul>
    </div>
  );
}
