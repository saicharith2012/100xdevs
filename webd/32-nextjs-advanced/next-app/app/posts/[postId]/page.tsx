import axios from "axios";

export default async function Post({
  params,
}: {
  params: Promise<{
    postId: string;
  }>;
}) {
  const postId = (await params).postId;
  const response = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return (
    <div>
      <div>{`title: ${response.data.title}`}</div>
      <div>{`description: ${response.data.body}`}</div>
    </div>
  );
}
