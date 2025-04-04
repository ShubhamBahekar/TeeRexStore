import { API_BASE_URL, API_METHODS } from "../config/constants/apiConstants";

const request = async (url, method = API_METHODS.GET, body = null) => {
  console.log("method", method);
  
  const options = { method, ...(body && { body: body }) };
  // console.log("options", options);
  try {
    const response = await fetch(`${API_BASE_URL}${url}`, options,{credentials: "include"});
     console.log("API.JSX response", response);
    // if (!response.ok) {
    //   throw new Error("HTTP Error");
    // }
    return response.json();
  } catch (error) {
    console.log("API Error", error);
    throw error;
  }
};
export default request;

const addQueryParams = (url, query) => {
  if (!query || Object.keys(query).length === 0) return url;
  const queryString = new URLSearchParams(query).toString();
  return `${url}?${queryString}`;
};
// Exporting CRUD functions
export const getApi = (url, query = {}) => {
  const fullUrl = addQueryParams(url, query);
  return request(fullUrl, API_METHODS.GET);
};

export const postApi = (url, body) => {
  // console.log("Body", body);
  const output = new FormData();
  for (const [key, value] of Object.entries(body)) {
    if (value) {
      output.append(key, value);
    }
  }
  return request(url, API_METHODS.POST, output);
};

export const deleteApi = (url) => request(url, API_METHODS.DELETE);
