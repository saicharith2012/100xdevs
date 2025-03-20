import { useState, useEffect } from "react";

// export function usePostTitle() {
//   const [post, setPost] = useState({});

//   async function getPosts() {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/posts/1"
//     );
//     const json = await response.json(); // json to js object
//     setPost(json);
//   }

//   // the function inside the useEffect must be synchronous to avoid race conditions.
//   useEffect(() => {
//     getPosts();
//   }, []);

//   return post;
// }

// useFetch() custom hook
export function useFetch(url, retryTime) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  async function getDetails(url) {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setData(json);
    setLoading(false);
  }

  useEffect(() => {
    getDetails(url);
  }, [url]); // refetching the data from the backend whenever the url changes.

  useEffect(() => {
    setInterval(() => {
      getDetails(url);
    }, retryTime*1000); // cleanup
  }, []);

  return { data, loading };
}
