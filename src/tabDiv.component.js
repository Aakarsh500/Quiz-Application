import React from "react";
import BruceWayne from "./BruceWayne.Component";
import MakeQuiz from "./MakeQuiz.component";
import LineGraph from "./LineGraph";
const TabDiv = ({ activeTab }) => {
  return (
    <>
      {activeTab === "tab1" && (
        <div>
          <MakeQuiz />
        </div>
      )}
      {activeTab === "tab2" && (
        <div>
          <LineGraph />
        </div>
      )}
      {activeTab === "tab3" && (
        <div>
          <BruceWayne />
        </div>
      )}
    </>
  );
};

export default TabDiv;
