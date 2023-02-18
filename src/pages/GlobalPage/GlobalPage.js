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
    }, [postArr])

    function deletePost(id) {
        removePost(id)
    }

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