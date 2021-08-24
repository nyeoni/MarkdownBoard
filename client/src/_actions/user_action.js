import { LOGIN_USER, REGIST_USER, AUTH_USER } from "../types/user_type";
import axios from "axios";

export function loginUser(requestData) {
  const res = axios
    .post("/api/v0/user/login", requestData)
    .then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: res,
  };
}

export function registUser(requestData) {
  const res = axios
    .post("/api/v0/user/register", requestData)
    .then((res) => res.data)
    .catch((err) => console.log(err));

  return {
    type: REGIST_USER,
    payload: res,
  };
}

export function auth() {
  const res = axios.get("/api/v0/user/auth").then((res) => res.data);
  return {
    type: AUTH_USER,
    payload: res,
  };
}
