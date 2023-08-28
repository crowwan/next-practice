"use client";

import { Session } from "next-auth";

function Header({
  title,
  session,
  boardId,
}: {
  title: string;
  session: Session | null;
  boardId: string;
}) {
  const onLikeClick = () => {
    if (session) {
      fetch("/api/like")
        .then((res) => res.json())
        .then((res) => console.log(res));
    }
  };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "3rem" }}>
      <h4>{title}</h4>
      {session && <button onClick={onLikeClick}>❤️</button>}
    </div>
  );
}

export default Header;
