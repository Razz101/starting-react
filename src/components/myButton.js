function MyButton({ placeHolder, count, onClick }) {
  return (
    <>
      <p>{count}</p>
      <button onClick={onClick}>{placeHolder}</button>
    </>
  );
}

export default MyButton;
