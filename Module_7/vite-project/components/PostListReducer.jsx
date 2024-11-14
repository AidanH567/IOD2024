import { useEffect, useReducer } from "react";
import axios from "axios";
import { useUserContext } from "../Context/UserContext";

// Reducer function for managing different fetch actions
function reducer(postsResult, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { loading: false, posts: action.payload, error: "" };
    case "FETCH_ERROR":
      return { loading: false, posts: [], error: action.payload };
    default:
      return postsResult;
  }
}

export default function PostListReducer() {
  const { currentUser } = useUserContext;
  const [postsResult, dispatch] = useReducer(reducer, {
    loading: true, // true when loading and no data in posts
    posts: [], // empty until data is fetched
    error: "", // empty unless there was an error
  });

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error.message });
      });
  }, []);

  // Returned JSX uses postsResult to conditionally render data or an error message
  return (
    <div className="PostList componentBox">
      <h1>{currentUser.email}</h1>
      {postsResult.loading ? (
        <div>Loading posts...</div>
      ) : (
        postsResult.posts.map((post) => (
          <div className="post" key={post.id}>
            <h3>
              Post #{post.id}: {post.title}
            </h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
      {postsResult.error && (
        <div className="error">Error: {postsResult.error}</div>
      )}
    </div>
  );
}
