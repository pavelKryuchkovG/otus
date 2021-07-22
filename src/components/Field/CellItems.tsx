import styled from "@emotion/styled";
import { css } from "@emotion/core";
import './cell.style.css';
import * as React from "react";



type TCellItems = {

  /**
   * Индефикатор ячейки
   */
  cellId: string;

  /**
   * Строка
   */
  x?: number;
  /**
   * Колнка
   */
  y?: number;
  /**
   * Optional click handler
   */
  onClick: (row?: number, col?: number) => void;
};

export const CellItems = ({ cellId, x, y, onClick }: TCellItems) => {
  const BaseCell = 'baseCell';
  return (
      <div id={cellId} className={BaseCell} onClick={() => onClick(x, y)}></div>
  );
};
