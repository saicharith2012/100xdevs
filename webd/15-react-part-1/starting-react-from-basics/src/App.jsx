import "./App.css";
import { useState } from "react";
import PostComponent from "./components/Post";
import ProfileCardComponent from "./components/ProfileCard";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import Card from "./components/Card";
import TodosList from "./components/TodosList";
import Counter from "./components/Counter";
import { Card1, Card2, ErrorBoundary } from "./components/ErrorBoundary";

function App() {
  const initialPosts = [{
    name: "Starbucks Corporation",
    promoted: false,
    followerCount: 234,
    time: "2m",
    image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
    description: "Want to taste the most overrated yet expensive coffee?!"
  }, {
    name: "Linkedin",
    promoted: true,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRokEYt0yyh6uNDKL8uksVLlhZ35laKNQgZ9g&s",
    description: "Subscribe to Linkedin Premium"
  }]

  const [posts, setPosts] = useState(initialPosts)

  function addPost() {
    setPosts([{
      name: "Starbucks Corporation",
      promoted: false,
      followerCount: 234,
      time: "2m",
      image: "https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/06/Starbucks_Corporation_Logo_2011.svg-e1657703028844.png?auto=format&q=60&fit=max&w=930",
      description: "Want to taste the most overrated yet expensive coffee?!"
    }, ...posts])
  }

  const [componentMounted, setComponentMounted] = useState(true)

  return (
    <>
      <div style={{ display: "flex" }}>
        <Navbar />
        <div>
          <ProfileCardComponent />
        </div>
        <div
          style={{
            height: "calc(100vh - 58px)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              margin: "10px 20px",
              width: "fit-content",
            }}
          >
            <button style={{ fontFamily: "inherit" }} onClick={addPost}>Add post</button>

            {/* components being returned as an array but still renders. */}
            {posts.map((post, key) => <PostComponent name={post.name} promoted={post.promoted} followerCount={post.followerCount} time={post.time} image={post.image} description={post.description} key={key} />
            )}

            {/* each of these component declared here will create their own set of state variables declared in the function declaration
          so that they are independent of themselves and based on the actions on them, their state changes exclusively for them.  */}
            {/* <ToggleMessage />
          <ToggleMessage />
          <ToggleMessage />
          <ToggleMessage /> */}
          </div>
        </div>

        <Todos />
        <div style={{ display: "flex", alignItems: "center" }}>
          <Card>
            <div style={{ color: "black" }}>
              <div>What do you want to post?</div> <br></br>
              <textarea type="text" autoFocus maxLength={200}></textarea>
            </div>
          </Card>

          <Card><div>Hi there</div></Card>
        </div>
      </div>

      <div>
        <TodosList />
      </div>

      <div>
        {componentMounted && <Counter />}
        <button onClick={() => setComponentMounted(!componentMounted)}>{componentMounted ? "unmount" : "mount"}</button>
      </div>

      <div>
        <ErrorBoundary>
          <Card1 />
        </ErrorBoundary>
        <Card2 />
      </div>
    </>
  );
}





// const ToggleMessage = () => {
//   const [notificationCount, setNotificationCount] = useState(0);

//   console.log("rerender")

//   return (
//     <div>
//       <button onClick={() => setNotificationCount(notificationCount + 1)}>Increment</button>
//       {notificationCount}
//     </div>
//   )
// }

export default App;
