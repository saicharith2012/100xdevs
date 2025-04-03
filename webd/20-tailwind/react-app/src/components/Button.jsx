import React from "react";

export default function Button({ disabled, children, onClick }) {
  return (
    <div
      className={`cursor-pointer w-96 block text-white text-lg text-center font-medium px-6 py-2 rounded-lg mt-12 mb-3 ${
        disabled ? "bg-cblue-200" : "bg-cgreen-400"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
