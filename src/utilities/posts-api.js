import sendRequest from './send-request'
const BASE_URL = '/api/posts'

export function create(data) {
    return sendRequest(BASE_URL, 'POST', data)
}