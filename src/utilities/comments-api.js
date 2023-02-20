import { getToken } from './users-service'

export function createComment(data) {
    const token = getToken()
    return fetch("/api/comments/new", {
        method: "POST",
        headers:{
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }, 
        body: JSON.stringify(data)
    })
}

export const deleteComment = (data, id) => {
    const token = getToken()
    console.log(data)
    console.log(id)
    return fetch(`api/comments/${id}`, {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
}