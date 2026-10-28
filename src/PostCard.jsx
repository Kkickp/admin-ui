import React from "react";

function PostCard({ title, body }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold text-gray-800 mb-2 leading-snug">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{body}</p>
    </div>
  );
}

export default PostCard;
