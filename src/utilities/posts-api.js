import { getToken } from "./users-service";

export function create(data) {
	const token = getToken();
	return fetch("/api/posts/new", {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	});
}

export function index() {
	const token = getToken();
	return fetch("/api/posts/index/all", {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export function removePost(id) {
	const token = getToken();
	return fetch(`/api/posts/${id}`, {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}

export function update(data, id) {
	const token = getToken();
	return fetch(`/api/posts/${id}`, {
		method: "PATCH",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(data),
	});
}

export function indexMyBoard(userId) {
	console.log(userId);
	const token = getToken();
	return fetch(`/api/myboard/${userId}`, {
		method: "GET",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
}
