import React, { FC } from "react";

import { CellItems } from "./CellItems";

type CellProps = {
  // x-coordinate to inform which cell is clicked
  x: number;
  // y-coordinate to inform which cell is clicked
  y: number;

  // onClick handler to fire events about interactions
  onClick: (x?: number, y?: number) => void;

  cellId: string;
}

export const Cell: FC<CellProps> = ({ x, y, onClick, cellId }:CellProps) => {

  return (
        <CellItems onClick={() => onClick(x || 0, y || 0)} x={x} y={y} cellId={cellId}></CellItems>
  );
};
