import React from "react";

function Button(props) {
  return (
    <>
      <button className={props.class}>{props.content}</button>
    </>
  );
}

export default Button;
