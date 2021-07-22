import React from "react";
import { action } from "@storybook/addon-actions";
import { Field } from "./Field";
import {ComponentMeta, ComponentStory, Meta, Story} from "@storybook/react";

export default {
    title: "Field",
    component: Field
} as ComponentMeta<typeof Field>;

const TemplateF: ComponentStory<typeof Field> = (args) => <Field  {...args} />;

export const TestF = TemplateF.bind({});
TestF.args = {
    x: 10,
    y: 10
};


