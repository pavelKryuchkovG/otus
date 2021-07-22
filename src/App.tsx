import React, {useState} from "react";
import {Field} from "components/Field";

export const App: React.FC<unknown> = () => {
    const [selectCell, setSelectCell] = useState( {x:0, y:0});
    const rows = 10;
    const columns = 10;

    const cl = (x:number, y:number): void => {
        console.log("x: " + x + ", y: " + y);
        setSelectCell({x, y});
    };
    return (
        <div>
            <Field x={rows} y={columns} onClick={cl} />
            <div>Выбрана ячейка с координатами: {`x: ${selectCell.x + 1}, y: ${selectCell.y + 1}`}</div>
        </div>
    )
}