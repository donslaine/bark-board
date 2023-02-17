import { useEffect, useState } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import { index } from '../../utilities/posts-api'
import Post from '../../components/Post/Post'

export default function GlobalPage() {
    const [postArr, setPostArr] = useState([])



    useEffect(() => {
        index()
            .then((res)=> res.json())
            // .then((resData) => console.log(resData))
            .then((resData) => setPostArr(resData.posts))
            // .then(console.log(postArr))
            
    }, []) 
    const postMap = postArr.map((post, index) => (
        <Post post={post} key={index} />
    ))
    
    
    return (
        <div>
            <h2>GlobalPage</h2>
            
            <CreatePost />
            {postMap}
        </div>
    )
}