import React from "react";
import { cleanup, render, screen, fireEvent } from "@testing-library/react";
import {Field} from "components/Field/Field";

afterEach(cleanup);

describe("Field", () => {
    it("renders Field cells", () => {
        render(
            <Field x={5} y={5} onClick={() => 3} />
        )
    })
})