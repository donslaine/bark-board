import { useEffect } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import { index } from '../../utilities/posts-api'
import Post from '../../components/post/Post'

export default function GlobalPage() {
    useEffect(() => {
        index()
            .then((res)=> res.json())
            .then((resData) => console.log(resData))
        
    }, []) 

    return (
        <div>
            <h2>GlobalPage</h2>
            
            <CreatePost />
            <Post />
        </div>
    )
}