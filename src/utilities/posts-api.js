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
    // return fetch("/api/posts/index", {
    //     // method: "GET",
    //     // headers: {
    //     //     "Accept": "application/json",
    //     //     "Content-Type": "application/json",
    //     },

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