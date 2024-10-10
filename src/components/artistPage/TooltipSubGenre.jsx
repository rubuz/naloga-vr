import React from "react";

const Tooltip = () => {
  return (
    <div className="tooltip">
      <h3>Vote for subgenres</h3>
      <p>
        Don’t agree with the subgenres? Add the ones you think are missing or
        vote for existing to get yours on top!
      </p>
      <div className="stats-sheet">
        <div className="row">
          <h5>Alternative rock</h5>
          <div className="graph-line">
            <span className="line" style={{ width: "47%" }}>
              47%
            </span>
          </div>
        </div>
        <div className="row">
          <h5>Alternative metal</h5>
          <div className="graph-line">
            <span className="line" style={{ width: "23%" }}>
              23%
            </span>
          </div>
        </div>
        <div className="row">
          <h5>Progressive rock</h5>
          <div className="graph-line">
            <span className="line" style={{ width: "15%" }}>
              15%
            </span>
          </div>
        </div>
      </div>
      <p>
        <button className="btn btn-shadow">Vote now</button>
      </p>
    </div>
  );
};

export default Tooltip;
