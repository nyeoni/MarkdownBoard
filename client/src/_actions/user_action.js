import { LOGIN_USER, REGIST_USER, AUTH_USER } from "../types/user_type";
import axios from "axios";

export function loginUser(requestData) {
  const res = axios.post("/api/v0/user/login").then((res) => res.data);

  return {
    type: LOGIN_USER,
    payload: res,
  };
}
