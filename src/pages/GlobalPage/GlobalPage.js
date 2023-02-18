import { useEffect, useState } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import { index, removePost } from '../../utilities/posts-api'
import Post from '../../components/Post/Post'

export default function GlobalPage() {
    const [postArr, setPostArr] = useState([])

    useEffect(() => {
        index()
            .then((res)=> res.json())
            .then((resData) => setPostArr(resData.posts))           
    }, [])

    function deletePost(id) {
        removePost(id) 
        .then(() => {
            return index()
        })
        .then((res)=> res.json())
        .then((resData) => setPostArr(resData.posts))  
    }

    // function handleDelete(){
    //     index()
    //     .then((res)=> res.json())
    //     .then((resData) => setPostArr(resData.posts))  
    // }

    const postMap = postArr.map((post, index) => (
        <Post post={post} key={index} deletePost={deletePost} />
    ))
    
    return (
        <div>
            <h2>GlobalPage</h2>
            <CreatePost />
            {postMap}
        </div>
    )
}