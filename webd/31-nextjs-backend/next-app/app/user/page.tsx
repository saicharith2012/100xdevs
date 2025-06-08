import axios from "axios";

export default async function User() {
  const { data } = await axios.get("http://localhost:3000/api/v1/user/details")

  return (
    <>
      <div>user page</div>
      <div>name: {data?.name}</div>
      <div>email: {data?.email}</div>
      <div>
        address:{" "}
        {`${data?.address.houseNumber}, ${data?.address.city}, ${data?.address.state}`}
      </div>
    </>
  );
}

// CLIENT COMPONENT

// "use client";
// // this is not the right way to fetch data from the backend in nextjs,
// // since it still has the water falling problem
// // (client is sending request for data).
// import axios from "axios";
// import { useEffect, useState } from "react";

// interface userData {
//   name: string;
//   email: string;
//   address: {
//     city: string;
//     state: string;
//     houseNumber: string;
//   };
// }

// export default function User() {
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState<userData>();

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await axios.get(
//           "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
//         );
//         setData(response.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div>loading...</div>;
//   }

//   return (
//     <>
//       <div>user page</div>
//       <div>name: {data?.name}</div>
//       <div>email: {data?.email}</div>
//       <div>
//         address:{" "}
//         {`${data?.address.houseNumber}, ${data?.address.city}, ${data?.address.state}`}
//       </div>
//     </>
//   );
// }
