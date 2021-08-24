import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";
import {
  LoginBox,
  Logo,
  LoginForm,
  InputBox,
  ButtonBox,
} from "./LoginComponents";

const LoginPage = ({ history }) => {
  const [inputs, setInputs] = useState({
    userid: "",
    password: "",
  });
  const { userid, password } = inputs;
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const onLogin = useCallback(
    (e) => {
      e.preventDefault();
      let requestData = {
        id: userid,
        password,
      };
      console.log(requestData);

      dispatch(loginUser(requestData))
        .then((res) => {
          if (res.payload.result) {
            history.push("/");
          } else {
            alert("request Success but, login Fail");
            setInputs({
              userid: "",
              password: "",
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    [userid, password, dispatch, history]
  );

  const onRegister = (e) => {
    e.preventDefault();
    history.push("/register");
  };

  return (
    <LoginBox>
      <Logo />
      <h1>Login</h1>
      <LoginForm>
        <InputBox
          onChange={onChange}
          name="userid"
          style={{ marginTop: "30px" }}
          type="text"
          placeholder="ID"
        />
        <InputBox
          onChange={onChange}
          name="password"
          type="password"
          placeholder="PASSWORD"
        />
        <ButtonBox
          onClick={onLogin}
          color="black"
          style={{ marginTop: "30px" }}
        >
          LOGIN
        </ButtonBox>
        <ButtonBox onClick={onRegister}>SIGNUP</ButtonBox>
      </LoginForm>
    </LoginBox>
  );
};

export default withRouter(LoginPage);
