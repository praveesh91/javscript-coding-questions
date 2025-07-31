import React from "react";
import "./Accordion.css";

const Accordion = () => {
  const data = [
    { id: 1, name: "Accordion 1", content: "First accordion content." },
    { id: 2, name: "Accordion 2", content: "Second accordion content." },
    { id: 3, name: "Accordion 3", content: "Third accordion content." },
  ];
  const [accordionIndex, setAccordionIndex] = React.useState(0);
  const handleSelect = (index) => {
    setAccordionIndex(accordionIndex === index ? null : index);
  };
  return (
    <div className="container">
      {data.map((accordion, index) => (
        <div className="accordion" key={accordion.id}>
          <div
            className={`accordionHeader ${
              accordionIndex === index ? "active" : "inactive"
            }`}
          >
            <button onClick={() => handleSelect(index)}>
              {accordion.name}
            </button>
            {accordionIndex === index ? <span>🔼</span> : <span>🔽</span>}
          </div>
          <div className="accordionContent">
            <div
              className={`${accordionIndex === index ? "active" : "inactive"}`}
            >
              <p>{accordion.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
