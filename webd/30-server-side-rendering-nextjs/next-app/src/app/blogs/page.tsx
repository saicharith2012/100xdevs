import axios from "axios"

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function Blogs() {

    const { data } = await axios.get("https://jsonplaceholder.typicode.com/todos")


  return (
    <div>
      Learn Next.js from the best resource in the world!

      {data.map((item: Todo) => (
        item.userId === 1 && <div key={item.id} className={`${item.completed ? "text-blue-400" : "text-red-400"}`}>{item.title} </div>
      ))}
    </div>
  )
}
