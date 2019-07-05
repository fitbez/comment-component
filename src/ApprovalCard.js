import React from "react";

const ApprovalCard = props => {
  return (
    <div
      className="card"
      style={{
        border: "1px solid #eee",
        width: "25%",
        margin: "16px",
        boxShadow:
          "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
        borderRadius: "5px"
      }}
    >
      <div>{props.children}</div>
      <div>
        <button
          style={{
            border: "1px solid #f4f4f4",
            backgroundColor: "#009688",
            margin: "16px",
            color: "#ffffff"
          }}
        >
          Approve
        </button>
        <button
          style={{
            border: "1px solid #f4f4f4",
            backgroundColor: "#F44336",
            color: "#ffffff"
          }}
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ApprovalCard;
