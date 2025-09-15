"use client";

import { useState } from "react";
import { Heart } from "lucide-react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(isLiked ? likes - 1 : likes + 1);
    setIsLiked(!isLiked);
  };

  return (
    <button
      onClick={handleLike}
      className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 transform active:scale-95
        ${
          isLiked
            ? "bg-red-500 text-white"
            : "bg-stone-200 text-stone-700 hover:bg-stone-300"
        }`}
    >
      <Heart className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`} />
      <span>{isLiked ? "Curtido" : "Curtir"} ({likes})</span>
    </button>
  );
}