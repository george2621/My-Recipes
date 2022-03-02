import React from "react";

const CloseFormButton = ({ setPopup, setMessage }) => {
  return (
    <div
      className="px-2 py-1 close-Button"
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
