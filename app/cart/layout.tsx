function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>현대카드 무이자 이벤트 중</p>
      {children}
    </div>
  );
}

export default layout;
