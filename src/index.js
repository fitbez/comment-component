import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";

const App = () => {
  const currentTime = () => {
    return new Date().toLocaleTimeString();
  };
  return (
    <div className="ui container comments">
      <Comment name="Fitsum" time={currentTime()} />
      <Comment name="Beza" time={currentTime()} />
      <Comment name="Hasu" time={currentTime()} />
      <Comment name="Belayneh" time={currentTime()} />
      <Comment name="Solomon" time={currentTime()} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
