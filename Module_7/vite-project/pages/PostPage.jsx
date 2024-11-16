import { Outlet, useParams, Link, useSearchParams } from "react-router-dom";
import { useData } from "../hooks/useData";

export default function PostsPage() {
  return (
    <div className="Posts">
      <h1>Posts</h1>
      <Outlet />
    </div>
  );
}

export function PostList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = searchParams.get("limit") || 5;

  const postsData = useData(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}`
  );

  const handleChangeLimit = (e) => {
    setSearchParams({ limit: e.target.value });
  };

  const postList = postsData?.map((post) => (
    <li key={post.id}>
      <Link to={`/posts/${post.id}`}>
        Post #{post.id}: {post.title}
      </Link>
    </li>
  ));

  return (
    <>
      <label htmlFor="post-limit">Set Number of Posts:</label>
      <input
        id="post-limit"
        type="number"
        value={limit}
        onChange={handleChangeLimit}
        min="1"
        style={{ marginLeft: "10px", marginBottom: "20px" }}
      />

      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="post-dropdown" style={{ marginRight: "10px" }}>
          Choose Number of Posts:
        </label>
        <select
          id="post-dropdown"
          value={limit}
          onChange={handleChangeLimit}
          style={{ padding: "5px" }}
        >
          <option value="5">5 Posts</option>
          <option value="10">10 Posts</option>
          <option value="20">20 Posts</option>
        </select>
      </div>

      <ul>{postList || <li>Loading posts...</li>}</ul>
    </>
  );
}

export function Post() {
  const { id } = useParams();
  const post = useData(`https://jsonplaceholder.typicode.com/posts/${id}`);

  return (
    <div className="Post">
      {post ? (
        <>
          <h3>
            Post #{post.id}: {post.title}
          </h3>
          <p>{post.body}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
