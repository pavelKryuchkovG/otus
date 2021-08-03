import React, {FC, ReactElement} from "react";

import { Cell } from "./Cell";

export interface Props {
  // array representing field state
  x: number;
  y: number;
  // calback to fire event on field interaction
  onClick: (x: number, y: number) => void;
}

export const Field = ({ x, y, onClick }) => {

  const rowsArr: Array<ReactElement> = [];
  const width = y * 15;

  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      const cellId = i + '_' + j;

      rowsArr.push(
          <Cell
              x={i}
              y={j}
              cellId={cellId}
              key={cellId}
              onClick={() => onClick(i, j)}
          />
      );
    }
  }

  return (
      <div>
        <div style={{ width: width, lineHeight: 0.5}}>
          {rowsArr}
        </div>
      </div>
  );


};
