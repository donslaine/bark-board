import { useEffect, useState } from 'react'
import CreatePost from '../../components/CreatePost/CreatePost'
import { index, removePost } from '../../utilities/posts-api'
import Post from '../../components/Post/Post'
import CommentBody from '../../components/ShowComment/CommentBody'
import { deleteComment } from '../../utilities/comments-api'

export default function GlobalPage({ postList }) {
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

   function deleteAComment(id){
        deleteComment(id)
        .then(() => {
            return index()
        })
        .then((res)=> res.json())
        .then((resData) => setPostArr(resData.posts)) 
   }

    const postMap = postArr.map((post, comment, index, value) => (
        <>
        <Post post={post} key={index} deletePost={deletePost} />
        <CommentBody post={post} comment={comment} key={value} deleteAComment={deleteAComment}/>
        </>

    ))
    
    return (
        <div className='container-sm'>
            <h2>Discover</h2>
            <CreatePost />
  
            {postMap}
        </div>
    )
}