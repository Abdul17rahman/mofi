import React from "react";

export default function Filter({ onFilter }) {
  return (
    <div className="mt-2">
      <span
        className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 mr-3 text-xs font-medium text-purple-700 ring-1 ring-purple-700/10 ring-inset cursor-pointer"
        onClick={() => onFilter("popular")}
      >
        Popular
      </span>
      <span
        className="inline-flex items-center rounded-md bg-green-50 px-2 py-1 mr-3 text-xs font-medium text-green-700 ring-1 ring-green-600/20 ring-inset cursor-pointer"
        onClick={() => onFilter("now_playing")}
      >
        Now Playing
      </span>
      <span
        className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 mr-3 text-xs font-medium text-yellow-800 ring-1 ring-yellow-600/20 ring-inset cursor-pointer"
        onClick={() => onFilter("top_rated")}
      >
        Top Rated
      </span>
      <span
        className="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/10 ring-inset cursor-pointer"
        onClick={() => onFilter("upcoming")}
      >
        Upcoming
      </span>
    </div>
  );
}
