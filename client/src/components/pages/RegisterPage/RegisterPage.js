import React from "react";
import styled from "styled-components";
import {
  LoginBox,
  InputBox,
  Logo,
  LoginForm,
  ButtonBox,
} from "../LoginPage/LoginComponents";

const Label = styled.div`
  font-size: 18px;
  color: black;
  width: 78%;
  margin-bottom: 3px;
`;

const LabelInputBox = ({ label, type, placeholder, input }) => {
  return (
    <>
      {/* <Label style={{}}>{label}</Label> */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <InputBox type={type} placeholder={placeholder} input={input} />
      </div>
    </>
  );
};

const RegisterPage = () => {
  return (
    <LoginBox>
      <Logo style={{ width: "280px" }} />
      <h1>Sign Up</h1>
      <LoginForm style={{ height: "480px", marginTop: "15px" }}>
        <InputBox placeholder="아이디" type="text" />
        <InputBox placeholder="EMAIL" type="text" />
        <InputBox placeholder="이름" type="text" />
        <InputBox placeholder="비밀번호" type="text" />
        <InputBox placeholder="비밀번호 확인" type="text" />
        <ButtonBox style={{ marginTop: "15px" }}>회원가입</ButtonBox>
      </LoginForm>
    </LoginBox>
  );
};

export default RegisterPage;
