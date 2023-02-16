import sendRequest from './send-request'
const BASE_URL = '/api/posts/new'

export function create(data) {
    return sendRequest(BASE_URL, 'POST', data)
}