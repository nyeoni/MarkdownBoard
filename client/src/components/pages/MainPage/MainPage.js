import React from "react";
import { CardPost, CardContainer } from "../../Card";
import BasePage from "../../Base";

const MainPage = () => {
  return (
    <BasePage>
      <CardContainer>
        <CardPost
          path="/"
          title="게시글1"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글2"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글3"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글4"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글4"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글4"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글4"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글4"
          description="첫 번째 게시글 입니다"
        />
      </CardContainer>
    </BasePage>
  );
};

export default MainPage;
