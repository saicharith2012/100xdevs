

import { getServerSession } from "next-auth";
// import { SessionProvider, signIn, signOut } from "next-auth/react";

// export default function Home() {
//   return (
//     <SessionProvider>
//       <HomePage />
//     </SessionProvider>
//   );
// }

export default async function Home() {
  const session = await getServerSession();
  return (
    <div>
      <span>hi there....</span>
      {JSON.stringify(session)}
    </div>
  );
}
