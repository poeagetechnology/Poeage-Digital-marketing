import React from "react";

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="animate-spin h-12 w-12 border-4 border-cyan-600 border-t-transparent rounded-full" />
    </div>
  );
}
