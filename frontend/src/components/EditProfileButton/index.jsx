import React from "react";

export default function EditProfileButton({onEdit}) {
  return (
    <>
      <button
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          border: "none",
          zIndex: 1,
        }}
        type="button"
        className="btn"
        onClick={onEdit}
      >
        <i className="bi bi-pencil-fill"></i>
      </button>
    </>
  );
}