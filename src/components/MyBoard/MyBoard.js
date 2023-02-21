import { useState, useEffect } from "react"
import { indexBoard } from "../../utilities/posts-api";
export default function MyBoard({post}) {
    console.log(post)
    return (
    <h2>{post.title}</h2>
    )
}