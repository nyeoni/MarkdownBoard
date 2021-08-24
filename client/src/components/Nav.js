import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  display: inline;
  padding: 0 1px;
  margin-bottom: 2px;
  font-size: 18px;
  &:hover {
    color: #707070;
  }
`;

export const NavItem = ({ value, path, style, children, active }) => {
  const activeStyle = {
    borderBottom: "2px black solid",
    ...active,
  };
  const localstyle = {
    ...style,
    margin: "0 20px",
  };
  return (
    <NavLink to={path} activeStyle={activeStyle} style={localstyle}>
      {children}
      <Item>{value}</Item>
    </NavLink>
  );
};

export const Nav = () => {
  return (
    <NavContainer>
      <NavItem value="전체게시물" path="/" activeStyle />
      <NavItem value="내게시물" path="/myboard" activeStyle />
      <NavItem value="글쓰기" path="/write" activeStyle />
    </NavContainer>
  );
};
