import React from "react";

export default function Button({ value }) {
  return (
    <div className="px-6 py-2">
      <button className="bg-primary hover:bg-blue-800 cursor-pointer text-green-200 text-md px-2 py-1 rounded">
        {value}
      </button>
    </div>
  );
}
