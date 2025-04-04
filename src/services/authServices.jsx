import { getApi, postApi, deleteApi } from "./api";

export const getAll = async () => getApi("/product");

export const getCartData = async () => getApi("/cart");

export const create = async (data) => postApi("/cart", data);

export const deleteProduct = async (id) => deleteApi(`/cart/${id}`);

export const createUser = async (data) =>postApi("/user/register",data);

export const loginUser = async (data) => postApi("/user/login",data);