import React from "react";
import { forwardRef } from "react";

const PinItem = forwardRef(({ changeHandler, handleBackSpace }, ref) => {
  const onKeyUpHandler = (e) => {
    // console.log(e.keyCode);
    if (e.keyCode === 8) {
      handleBackSpace(e);
    } else {
      changeHandler(e);
    }
  };
  return (
    <div>
      <input ref={ref} maxLength={1} onKeyUp={onKeyUpHandler} />
    </div>
  );
});

export default PinItem;
