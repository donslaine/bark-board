import { useState } from 'react'
import { update } from '../../utilities/posts-api'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './UpdatePost.css'

export default function UpdatePost({ post, postList }) {
    let { postId } = useParams()

    let singlePostId = postList.find((p) => p._id === postId)

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
        <div class="modal fade" id="update-modal" tabindex="-1" aria-labelledby="modal-title" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="modal-title">Update</h5>
                        <Link className="UpdatePost" to="/posts" ><button type="button" class="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button></Link>
                    </div>
                    <div class="modal-body">
                        <form className='update-form'>
                            <label className='title'>Title</label>
                            <input className='title-update' type='text' name='title' defaultValue= {singlePostId.title} onChange={handleChange} />
                            <label className='pet'>Pet</label>
                            <input className='pet-update' type='text' name='pet' defaultValue= {singlePostId.pet} onChange={handleChange} />
                            <label className='text'>Text</label>
                            <input className='text-update' type='text' name='text' defaultValue= {singlePostId.text} onChange={handleChange} />
                            <label className='category'>Category</label>
                            <input className='category-update' type='text' name='category' defaultValue= {singlePostId.category} onChange={handleChange} />
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-dismiss="modal" aria-label="Close" type="submit" onClick={handleSubmit}><Link className="UpdatePost" to="/posts" >Update Post</Link></button>
                    </div>
                </div>
            </div>
        </div>
    )
}