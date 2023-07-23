import { api } from "./baseUrl";

export const index = async () => {
  const res = await api.get("/posts");
  return res;
};

export const show = async (postId) => {
	const res = await api.get(`/posts/${postId}`);
	return res;
}

export const create = async (values, token) => {
	api.defaults.headers = {Authorization: `Bearer ${token}`};
	const res = await api.post('/posts/create', values);
	return res;
}

export const update = async (values, postId) => {
	api.defaults.headers = {Authorization: `Bearer ${token}`};
	const res = await api.put(`/posts/${postId}`, values);
	return res;
}

export const remove = async (postId) => {
	const res = await api.delete(`/posts/${postId}`);
	return res;
}
