import { useState } from 'react'
import { update } from '../../utilities/posts-api'
import { useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './UpdatePost.css'
import Modal from 'react-bootstrap/Modal'

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
        <>
                    <div>
                        
                    </div>
                    <div className="modal-body">
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
                    <div>
                        <button className="btn btn-primary" type="submit" onClick={handleSubmit}><Link class="updateLink" to="/posts" >Update Post</Link></button>
                        <button type="button" className="btn btn-danger"  data-bs-dismiss="modal" aria-label="Close"><Link  class="updateLink" to="/posts" >Cancel</Link></button>
                    </div>
            {/* <Modal.Body>
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
            </Modal.Body> */}
    </>
    )
}