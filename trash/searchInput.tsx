import React from "react";

export default function SearchInput() {
  return (
    <div className="flex flex-row items-center justify-center w-full">
      <input
        className="w-1/2 h-12 rounded-2xl p-2 text-white bg-slate-800 border border-slate-900"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
