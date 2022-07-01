import React from "react";

function ScoreChart(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          {/* <th>Score</th>
          <th>Date</th> */}
        </tr>
      </thead>
      {props.name.map((v) => {
        return (
          <tr>
            <th>{v}</th>
            {/* <th>{v[1]}</th>
            <th>{v[2]}</th> */}
          </tr>
        );
      })}
    </table>
  );
}

export default ScoreChart;
