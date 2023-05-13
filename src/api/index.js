import axios from "axios";

const BASE_URL = "http://localhost:3000";

export const request = (method, url, data = null) => {
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
    ContentType: "application/json",
  };
  return axios({
    method,
    url: BASE_URL + url,
    data,
    headers,
  })
    .then((result) => {
      return result.data;
    })
    .catch((result) => {
      return result.response;
    });
};

export const login = async (id, pwd) => {
  try {
    const response = await request("post", "/login", { id, pwd });
    return response;
  } catch (error) {
    throw error;
  }
};

export const fetchUser = async () => {
  const data = await authorizedRequest("get", "/user");
  return data;
};
