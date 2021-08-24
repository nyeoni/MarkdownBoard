// import React, { useEffect, useRef, useState } from "react";
import { CardPost, CardContainer } from "../../Card";
import BasePage from "../../Base";
// import { Skeleton } from "antd";
// import axios from "axios";
// import useAsync from "../../../customHooks/useAsync";

// const getBoardById = async (last_id, items) => {
//   let data = [];
//   let tmp;

//   for (let id = last_id + 1; id <= last_id + items; id++) {
//     tmp = await axios
//       .get(`http://localhost:3001/post/${id}`)
//       .then((res) => res.data);
//     data.push(tmp);
//   }
//   console.log(last_id);
//   console.log(data);
//   return data;
// };

const MainPage = () => {
  //   const [item, setItems] = useState({
  //     items: 8,
  //     last_id: 0,
  //   });
  //   const { items, last_id } = item;
  //   const [state, dispatch] = useAsync(
  //     () => getBoardById(last_id, items),
  //     [items, last_id]
  //   );
  //   const { data } = state;
  //   const nextKey = useRef(9);

  return (
    <BasePage>
      <CardContainer>
        {/* {data
          ? data.map((board) => {
              return (
                <CardPost
                  path={`/board/${board.id}`}
                  title={board.title}
                  description={board.description}
                />
              );
            })
          : new Array(8).map((tmp) => {
              return (
                <CardSkeleton>
                  <Skeleton />
                </CardSkeleton>
              );
            })} */}
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
          title="게시글5"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글6"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글7"
          description="첫 번째 게시글 입니다"
        />
        <CardPost
          path="/"
          title="게시글8"
          description="첫 번째 게시글 입니다"
        />
      </CardContainer>
    </BasePage>
  );
};

export default MainPage;
