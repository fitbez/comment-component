import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  const currentTime = () => {
    return new Date().toLocaleTimeString();
  };
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <Comment name="Beza" time={currentTime()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment name="Hasu" time={currentTime()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment name="Belayneh" time={currentTime()} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment name="Solomon" time={currentTime()} />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
