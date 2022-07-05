import React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRef } from "react";
import PinItem from "./PinItem";
const Pin = ({ length, setOtpHandler }) => {
  const inputRef = useRef([]);
  const [inputBoxlen] = useState(new Array(length).fill(1));
  const [inputBoxValue, setInputBoxValue] = useState(
    new Array(length).fill("")
  );
  const handleChange = (e, index) => {
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setOtpHandler(inputBoxValue.join(""));
  };

  const handleBackSpace = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setInputBoxValue(inputBoxValue);
    setOtpHandler(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((item, index) => index < length);
    data.forEach((value, index) => {
      inputBoxValue[index] = value;
      inputRef.current[index].value = value;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div
      onPaste={handlePaste} // Handle Bubbleing
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {inputBoxlen.map((item, index) => {
        return (
          <PinItem
            key={index}
            ref={(elem) => {
              inputRef.current[index] = elem;
            }}
            changeHandler={(e) => handleChange(e, index)}
            handleBackSpace={(e) => handleBackSpace(e, index)}
          />
        );
      })}
    </div>
  );
};

Pin.propTypes = {
  length: PropTypes.number,
  onChange: PropTypes.func,
};

export default Pin;
