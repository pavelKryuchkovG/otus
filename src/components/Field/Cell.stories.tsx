import React from "react";
import { action } from "@storybook/addon-actions";
import { Cell } from "./Cell";
import {ComponentMeta, ComponentStory, Meta, Story} from "@storybook/react";

export default {
  title: "Cell",
  component: Cell
} as ComponentMeta<typeof Cell>;

const Template: ComponentStory<typeof Cell> = (args) => <Cell  {...args} />;

export const Test = Template.bind({});
Test.args = {
  x: 5,
  y: 1
};


