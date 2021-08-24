import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { registUser } from "../../../_actions/user_action";
import { withRouter } from "react-router-dom";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import {
  LoginBox,
  InputBox,
  Logo,
  LoginForm,
  ButtonBox,
} from "../LoginPage/LoginComponents";

const RegisterPage = ({ history }) => {
  const [inputs, setInputs] = useState({
    user_id: "",
    email: "",
    name: "",
    password: "",
    confirm_pass: "",
  });
  const { user_id, email, name, password, confirm_pass } = inputs;
  const dispatch = useDispatch();

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
      if (name === "confirm_pass" && password !== "") {
        const diffpass = document.getElementById("diffpass");
        diffpass.style.display = "inherit";
        if (password === confirm_pass) {
          diffpass.innerHTML = "비밀번호가 일치합니다!";
          diffpass.style.color = "blue";
        } else {
          diffpass.innerHTML = "비밀번호가 다릅니다!";
          diffpass.style.color = "red";
        }
      }
    },
    [password, confirm_pass, inputs]
  );

  const onBlur = useCallback(
    (e) => {
      console.log(e.target.name);
      if (e.target.name === "confirm_pass" && password !== "") {
        const diffpass = document.getElementById("diffpass");
        diffpass.style.display = "inherit";
        if (password === confirm_pass) {
          diffpass.innerHTML = "비밀번호가 일치합니다!";
          diffpass.style.color = "blue";
        } else {
          diffpass.innerHTML = "비밀번호가 다릅니다!";
          diffpass.style.color = "red";
        }
      }
    },
    [confirm_pass, password]
  );

  const onRegist = useCallback(
    (e) => {
      e.preventDefault();
      const requestData = {
        user_id,
        email,
        name,
        password,
      };

      // temp
      //   history.push("/login");
      //   notification.open({
      //     message: "회원가입 완료!",
      //     description:
      //       "환영합니다! 회원가입을 축하합니다. 가입한 아이디와 비밀번호로 로그인해주세요.",
      //     icon: <SmileOutlined style={{ color: "#108ee9" }} />,
      //   });

      // real

      dispatch(registUser(requestData)).then((res) => {
        if (res.payload.result) {
          history.push("/login");
          notification.open({
            message: "회원가입 완료!",
            description:
              "환영합니다! 회원가입을 축하합니다. 가입한 아이디와 비밀번호로 로그인해주세요.",
            icon: <SmileOutlined style={{ color: "#108ee9" }} />,
          });
        } else {
          alert("Error 400: 회원가입을 실패하였습니다!");
        }
      });
    },
    [user_id, email, name, password, dispatch, history]
  );

  return (
    <LoginBox>
      <Logo style={{ width: "280px" }} />
      <h1>Sign Up</h1>
      <LoginForm style={{ height: "480px", marginTop: "15px" }}>
        <InputBox
          placeholder="아이디"
          type="text"
          value={user_id}
          name="user_id"
          onChange={onChange}
        />
        <InputBox
          placeholder="EMAIL"
          type="email"
          value={email}
          name="email"
          onChange={onChange}
        />
        <InputBox
          placeholder="이름"
          type="text"
          value={name}
          name="name"
          onChange={onChange}
        />
        <InputBox
          placeholder="비밀번호"
          type="password"
          value={password}
          name="password"
          onChange={onChange}
        />
        <InputBox
          placeholder="비밀번호 확인"
          type="password"
          value={confirm_pass}
          name="confirm_pass"
          onChange={onChange}
          onKeyUp={onBlur}
          onBlur={onBlur}
        />
        <div id="diffpass" style={{ width: "78%", display: "none" }}>
          HiddenBox
        </div>
        <ButtonBox onClick={onRegist} style={{ marginTop: "15px" }}>
          회원가입
        </ButtonBox>
      </LoginForm>
    </LoginBox>
  );
};

export default withRouter(RegisterPage);
