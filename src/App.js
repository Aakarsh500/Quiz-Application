import React, { Component } from "react";
import PlayQuiz from "./PlayQuiz";
import { Route } from "react-router-dom";
import "./styles.css";
import Score from "./Score.component";
import Homepage from "./pages/homepage";
import TabsManager from "./tabs.manager.component";
const App = () => {
  return (
    <>
      <Route exact path="/play-quiz" component={PlayQuiz} />
      <Route exact path="/score" component={Score} />
      <Route exact path="/make-quiz" component={TabsManager} />
      <Route exact path="/" component={Homepage} />
    </>
  );
};
export default App;
