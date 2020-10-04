import React from "react";
import { Link } from "react-router-dom";
const Score = ({ score, resetButton }) => {
  return (
    <div className="report-card">
      <h1>Score</h1>
      <h1>Score: {score}/ 10</h1>
      <Link to="/make-quiz">
        <h1>Make Quiz</h1>
      </Link>
    </div>
  );
};

export default Score;
