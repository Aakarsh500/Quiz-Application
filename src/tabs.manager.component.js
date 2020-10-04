import React, { useState } from "react";
import TabDiv from "./tabDiv.component";
const TabManager = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <>
      <div className="tabs-container">
        <button
          className="individual-tabs"
          onClick={() => setActiveTab("tab1")}
        >
          Make Quiz
        </button>
        <button
          className="individual-tabs"
          onClick={() => setActiveTab("tab2")}
        >
          Results
        </button>
        <button
          className="individual-tabs"
          onClick={() => setActiveTab("tab3")}
        >
          Bruce Wayne
        </button>
      </div>
      <TabDiv activeTab={activeTab} />
    </>
  );
};
export default TabManager;
