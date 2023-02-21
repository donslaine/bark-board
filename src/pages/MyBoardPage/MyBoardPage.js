import MyBoard from "../../components/MyBoard/MyBoard";
import { useEffect, useState } from "react";
import { indexMyBoard } from "../../utilities/posts-api";
import { useParams } from 'react-router-dom'


export default function MyBoardPage ({postList, user}) {

let {userId} = useParams()

// let singleUserId = user.find((u) => u._id === userId)
// console.log(singleUserId)

  
// const postsSorted = sortedPost

    const [showBoard, setShowBoard] = useState([])
    // let sortedPost = showBoard 

// console.log(sortedPost)


        useEffect(() => {
            indexMyBoard(userId)
                .then((res)=> res.json())
                .then((resData) => setShowBoard(resData.posts)) 
                .then(console.log(showBoard))
        },[])

    if (showBoard === undefined){
        return <h1>Loading...</h1>
    }
    
       const postMap = showBoard.map((post, index) => (
        <MyBoard post={post} key={index}  />
    ))

    
    return (
        <h2>{postMap}</h2>
        
    )
 }