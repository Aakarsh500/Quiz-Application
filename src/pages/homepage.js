import React from "react";

const HomePage = (props) => {
  return (
    <div className="homepage">
      <h1>Welcome to the quiz department</h1>
      <button onClick={() => props.history.push("./play-quiz")}>
        Play Quiz
      </button>
      <button onClick={() => props.history.push("/make-quiz")}>
        Make Quiz
      </button>
    </div>
  );
};
export default HomePage;
