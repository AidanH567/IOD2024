import { useEffect, useState } from "react";
import axios from 'axios';

export default function PostList() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="PostList componentBox">
      {loading ? (
        <div>Loading posts...</div>
      ) : (
        posts.map(post => (
          <div className="post" key={post.id}>
            <h3>Post #{post.id}: {post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))
      )}
      {error && <div className="error">Error: {error}</div>}
    </div>
  );
}
