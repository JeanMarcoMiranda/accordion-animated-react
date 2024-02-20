// ACCORDIAN TYPES
// - Single selection
// - Multiple selection

import { useState } from "react";
import { data } from "./data";
import "./styles.css";

const Accordian = () => {
  const [selected, setSelected] = useState<Number | null>(null);

  function handleSingleSelection(id: Number) {
    setSelected(id === selected ? null : id);
  }

  return (
    <div className="wrapper">
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item">
              {/* Question */}
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                {selected === dataItem.id ? <span>-</span> : <span>+</span>}
              </div>
              {/* Answer */}
              <div
                className="content"
                style={{display: selected === dataItem.id ? 'block' : 'none'}}
              >
                {dataItem.answer}
              </div>
            </div>
          ))
        ) : (
          <NoDataFound />
        )}
      </div>
    </div>
  );
};

const NoDataFound = () => {
  return <div>No data Found</div>;
};

export default Accordian;
