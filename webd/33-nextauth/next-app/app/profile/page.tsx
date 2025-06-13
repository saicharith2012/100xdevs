// CLIENT COMPONENT
// "use client"; ---> client side rendering

// import { useEffect, useState } from "react";
// import axios from "axios";

// export default function Profile() {
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     async function getUserId() {
//       const response = await axios.get("http://localhost:3000/api/v1/profile", {
//         headers: {
//           Authorization: localStorage.getItem("token"),
//         },
//       });

//       setUserId(response.data.userId);
//     }

//     getUserId();
//   }, []);

//   return <div>the user id is: {userId}</div>;
// }


// SERVER COMPONENT

import axios from "axios";

export default async function Profile() {
  const response = await axios.get("http://localhost:3000/api/v1/profile", {
    headers: {
      Authorization: localStorage.getItem("token"), // Error: localStorage is not defined.
      // Since, this is a server component and
      // it renders on the serverside,
      // so the server can't access the localStorage inside the browser.
    },
  });

  console.log(response);
  return <div>the user id is: {response.data.userId}</div>;
}

