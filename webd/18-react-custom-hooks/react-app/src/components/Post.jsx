import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Post() {
  // const post = usePostTitle();
  const [currentPost, setCurrentPost] = useState(1);

  const { data, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/" + currentPost,
    10
  );

  if (loading) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {/* <div>{post.title}</div> */}
      <div>{data.title}</div>
    </div>
  );
}
