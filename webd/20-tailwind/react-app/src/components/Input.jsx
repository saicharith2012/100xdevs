import React from "react";

export default function Input({ type, placeholder, onChange, ref }) {
  return (
    <input
      className="text-white text-start border-gray-100/10 border-1 focus:outline-0 rounded-xl w-96 bg-cblue-400 block px-6 py-3"
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      ref={ref}
    ></input>
  );
}
