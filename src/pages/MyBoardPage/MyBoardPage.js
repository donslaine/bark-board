import MyBoard from "../../components/MyBoard/MyBoard";
import { useEffect, useState } from "react";
import { indexBoard } from "../../utilities/posts-api";
export default function ({postList, user}) {
let sortedPost = []   
const postsSorted = sortedPost
    const [showBoard, setShowBoard] = useState({})
    console.log(sortedPost)
        useEffect(() => {
            indexBoard()
                .then((res)=> res.json())
                .then((resData) => setShowBoard(resData.post))   
        },[])
    
        

          
            postList.map((post, index)=>{ 
        
       
           
                    <MyBoard post={post} key={index}/>
                    sortedPost.push(post)
                 
                
              
                }   
            
            )}
       


    
    return (
        <h2>{<MyBoard/>}</h2>
        
    )
 