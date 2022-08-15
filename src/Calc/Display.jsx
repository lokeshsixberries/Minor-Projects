import React from "react";
import "./Styles.scss";
export default function Display({ input, handleInput }) {
  return (
    <>
      <div className="row">
        <div className="col-10">
          <input
            type="text"
            value={input}
            placeholder="Enter the Text Here..."
            className="inputDisplay"
          />
        </div>
        <div className="col-2">
          <button
            className="btn btn-warning clearBtn"
            onClick={() => handleInput("")}
          >
            Clear
          </button>
        </div>
      </div>
    </>
  );
}
