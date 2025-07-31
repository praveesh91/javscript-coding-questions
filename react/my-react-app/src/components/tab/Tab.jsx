import React from "react";
import "./Tab.css";

const Tab = () => {
  const tabs = [
    { tabName: "tab 1", id: 1, tabContent: "This is tab 1 content" },
    { tabName: "tab 2", id: 2, tabContent: "This is tab 2 content" },
    { tabName: "tab 3", id: 3, tabContent: "This is tab 3 content" },
  ];
  const [tabIndex, setTabIndex] = React.useState(1);
  const handleSelect = (index) => {
    setTabIndex(index + 1);
  };
  return (
    <div className="container">
      <div className="btnContainer">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            onClick={() => handleSelect(index)}
            className={`tabBtn ${tabIndex === tab.id ? "active" : "inactive"}`}
          >
            {tab.tabName}
          </button>
        ))}
      </div>
      <div className="tabContent">
        {tabs.map((tab, index) => (
          <div
            key={tab.id}
            className={`${tabIndex === tab.id ? "active" : "inactive"}`}
          >
            <p>{tab.tabContent}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tab;
