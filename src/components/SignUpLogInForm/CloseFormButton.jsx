import React from "react";

const CloseFormButton = ({ setPopup, setMessage }) => {
  return (
    <div
      className="close-Button py-1 px-2"
      onClick={() => {
        setPopup("");
        setMessage("");
      }}
    >
      <p>X</p>
    </div>
  );
};

export default CloseFormButton;
