"use client";

import { IComment } from "@/types/dataType";
import React, { useEffect, useRef, useState } from "react";

function Comment({ parentId }: { parentId: string }) {
  const commentRef = useRef<HTMLInputElement>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  const onClickHandler = () => {
    if (commentRef?.current?.value.length) {
      fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ content: commentRef.current.value, parentId }),
      })
        .then((res) => {
          if (res.status === 201) {
            return res.json();
          } else {
            return Promise.reject("error");
          }
        })
        .then((res) => {
          if (commentRef.current?.value) {
            setComments((prev) => [
              ...prev,
              {
                _id: res.insertedId as string,
                content: commentRef.current?.value as string,
                parentId,
                author: res.author as string,
              },
            ]);
            commentRef.current.value = "";
          }
        })
        .catch((err) => console.error(err));
    }
  };

  useEffect(() => {
    fetch(`/api/comment/?parentId=${parentId}`)
      .then((res) => res.json())
      .then((res) => {
        setComments(res);
      });
  }, []);

  return (
    <div>
      <div>
        {comments.map((comment) => (
          <div key={comment._id}>
            <div>{comment.content}</div>
            <div>{comment.author}</div>
          </div>
        ))}
      </div>
      <input type="text" ref={commentRef} />
      <button onClick={onClickHandler}>댓글 작성</button>
    </div>
  );
}

export default Comment;

// '/keyword/list/?type=자연'

// keyword = {
//   '자연': 'A01'
// }

// Object.keys(keyword).map(key => <button onClick={()=> navigate(`/keyword/list?type=${keyword[key]}`)}>)

// useParams()

// 1. keyword를 순회하면서 쿼리 스트링으로 각 페이지의 키워드가 뭔지 구분할 수 있게 만든다.
// 2. 키워드 페이지에서 해당 쿼리 스트링을 가져온다.
// 3. 가져온 값이 코드이므로 변환을 한다. -> A01 = 자연
// 4. 변환된 값을 styledTitle에 넣는다.
// 데이터를 최대한 하나의 데이터에서 가져올 수 있게 만든다. -> export const keyword = { 자연 : 'A01' }
// keyword를 순회하면서 명령형으로 데이터를 변환해본다.
// let title
// for (const key of Object.keys(keyword)){
//   if(keyword[key] === type){
//     title = key;
//   }
// }

// .env 파일을 이용해보자

// function Table(){

//   // datafetching
//   return <StyledTableBox>
//     <StyledTable>
//       <StyledTableColumn></StyledTableColumn>
//       <StyledTableColumn></StyledTableColumn>
//       <StyledTableColumn></StyledTableColumn>
//     </StyledTable>
//     {
//       data.map((data) => <StyledTable>
//       <StyledTableColumn></StyledTableColumn>
//       <StyledTableColumn></StyledTableColumn>
//       <StyledTableColumn></StyledTableColumn>
//     </StyledTable>)
//     }
// </StyledTableBox>
// }
