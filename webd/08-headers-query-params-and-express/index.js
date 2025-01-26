// async function getRecentPost() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
//     method: "GET",
//   });
//   const data = await response.json(); // parsing the JSON data, since we already know it's going to be js object

//   console.log("request has been processed.");

//   //   dumping the data fetched onto the dom.
//   document.getElementById("title").innerHTML = "title: " + data.title;
//   document.getElementById("body").innerHTML = "body: " + data.body;
// }

async function getRecentPost() {
  // a network request is asynchronous 
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  console.log("request has been processed.");

  //   dumping the data fetched onto the dom.

  response.data.forEach((post) => {
    document.querySelector(
      ".posts"
    ).innerHTML += `<div>title: ${post.title}</div><div>post: ${post.body}</div> <br> <br>`;
  });
}
