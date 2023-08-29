"use client";

import { Session } from "next-auth";

function Header({
  title,
  session,
  boardId,
  likeCount,
}: {
  title: string;
  session: Session | null;
  boardId: string;
  likeCount: number;
}) {
  const onLikeClick = () => {
    if (session) {
      fetch("/api/like", {
        method: "POST",
        body: JSON.stringify({ email: session.user?.email, boardId }),
      })
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
      <h4>{title}</h4>
      <div>{likeCount} likes</div>
      {session && <button onClick={onLikeClick}>❤️</button>}
    </div>
  );
}

export default Header;
