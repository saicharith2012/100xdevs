"use client";

import { useRef } from "react";
import axios from "axios";

export default function Signin() {
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      Signin page <br />
      <input ref={usernameRef} placeholder="username"></input>
      <input ref={passwordRef} placeholder="password"></input>
      <button
        onClick={async () => {
          const username = usernameRef.current?.value;
          const password = passwordRef.current?.value;

          const response = await axios.post(
            "http://localhost:3000/api/v1/user/signin",
            {
              username,
              password,
            }
          );

          console.log(response);

          localStorage.setItem("token", response.data.token);
        }}
      >
        Sign in
      </button>
    </div>
  );
}
