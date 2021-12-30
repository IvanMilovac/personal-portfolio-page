import React from "react";

import "./TimelineContent.scss";

const Timeline = ({ data, current }) => {
  return (
    <>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <h2 className="timeline__item timeline__item--year">
            {item.startYear}
          </h2>

          <div className="timeline__item">
            <h3 className="timeline__title">{item.name}</h3>
            <p className="timeline__blurb">{item.position}</p>
            <p className="timeline__blurb timeline__description">
              {item.description}
            </p>
          </div>
        </React.Fragment>
      ))}
      {current && (
        <h2 className="timeline__item timeline__item--year">Current</h2>
      )}
    </>
  );
};

export default Timeline;
