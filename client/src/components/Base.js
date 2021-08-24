import React from "react";
import { Layout } from "antd";
import { Logo } from "./pages/LoginPage/LoginComponents";
import { Nav, NavItem } from "./Nav";
import { SmileOutlined } from "@ant-design/icons";
const { Header, Footer, Content } = Layout;

const BasePage = ({ children }) => {
  const contentStyle = {
    width: "100%",
    padding: "40px 150px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    position: "relative",
    overflow: "visible",
    background: "#e9ecef",
  };

  const headerStyle = {
    padding: "15px 30px",
    height: "80px",
    background: "#e9ecef",
    display: "flex",
    justifyContent: "space-between",
  };

  const footerStyle = {
    textAlign: "center",
    position: "relative",
    background: "#3C3C3C",
    color: "white",
  };

  return (
    <Layout
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
      }}
    >
      <Header style={headerStyle}>
        <Logo style={{ width: "200px" }} />
        <Nav />
        <NavItem path="/" value="내프로필">
          <SmileOutlined style={{ marginRight: "8px" }} />
        </NavItem>
      </Header>
      <Content style={contentStyle}>{children}</Content>
      <Footer style={footerStyle}>
        <pre>MardownBoard nkim & iha</pre>{" "}
        <pre>©2021 JS-Piscine Rush00. All rights Reserved</pre>{" "}
      </Footer>
    </Layout>
  );
};

export default BasePage;
