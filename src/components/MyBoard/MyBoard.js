import { useState, useEffect } from "react";
import { indexBoard } from "../../utilities/posts-api";

export default function MyBoard({ post }) {
  console.log(post)
  return (
    <div>
      <h2>{post.title}</h2>
        <p>{post.pet}</p>
        <p>{post.text}</p>
        <p>{post.category}</p>
    </div>
  )
}
