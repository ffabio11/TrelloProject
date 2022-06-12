function Button({ type, onClickHandler, children }) {
  //const { type, onClickHandler, children } = props;
  //const {  children } = rest;
  return (
    <button type={type} className="add-card" onClick={onClickHandler}>
      {children}
    </button>
  );
}
export default Button;
