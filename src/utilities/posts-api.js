// import sendRequest from './send-request'
// const BASE_URL = '/api/posts'

export function create(data) {
    return fetch('/api/posts/new', {
        method: 'POST',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}


export function index(){
    return fetch("/api/posts/index/all", {
    })
}

export function removePost(id) {
    return fetch(`/api/posts/${id}`, {
        method: 'DELETE',
    })
}

export function update(data, id) {
    // console.log(data)
    // console.log(id)
    return fetch(`/api/posts/${id}`, {
        method: 'PATCH',
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    })
}


// export const createList = (data) => {
//     console.log(store.userToken);
//     return fetch(`http://localhost:8000/lists`, {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${store.userToken}`,
//         "Accept": "application/json",
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     })
//   }