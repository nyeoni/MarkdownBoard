import { LOGIN_USER, REGIST_USER, AUTH_USER } from "../types/user_type";

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    case REGIST_USER:
      return { ...state, register: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    case AUTH_USER:
      return { ...state, userData: action.payload };
      // eslint-disable-next-line no-unreachable
      break;
    default:
      return state;
  }
}
