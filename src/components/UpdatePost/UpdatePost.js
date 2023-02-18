import { useState } from 'react'
import { update } from '../../utilities/posts-api'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function UpdatePost({ post, postList }) {
    let {postId} = useParams()
    let singlePostId = postList.find((p) => p._id === postId)
    console.log(singlePostId)

   
   
    const [updatePost, setUpdatePost] = useState({
        title: `${singlePostId.title}`,
        pet: `${singlePostId.pet}`,
        text: `${singlePostId.text}`,
        category: `${singlePostId.category}`,
    }) 
   


    function handleChange(event) {
        setUpdatePost({...updatePost, 
        [event.target.name]: event.target.value
        })
    }

    async function handleSubmit(event) {
        event.preventDefault()
        try {
            const formData = {...updatePost}
            await update(formData, postId)
        } catch (error){
            console.error(error)
        }
    }

    return (
        <div>
            <p>{singlePostId.title}</p>

            <form>
                <label>Title</label>
                <input type='text' name='title' defaultValue= {singlePostId.title} onChange={handleChange} />
                <label>Pet</label>
                <input type='text' name='pet' defaultValue= {singlePostId.pet} onChange={handleChange} />
                <label>Text</label>
                <input type='text' name='text' defaultValue= {singlePostId.text} onChange={handleChange} />
                <label>Category</label>
                <input type='text' name='category' defaultValue= {singlePostId.category} onChange={handleChange} />
                <button type='submit' onClick={handleSubmit}><Link className="UpdatePost" to='/posts' >Update Post</Link></button>
            </form>
        </div>
    )
}