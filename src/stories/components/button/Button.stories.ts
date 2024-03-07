import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
import { Add, Cookie, Done, WaterDrop } from "@mui/icons-material";

const icons = { Add, Cookie, Done, WaterDrop };
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    icon: {
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          Add: 'Add',
          Cookie: 'Cookie',
          Done: 'Done',
          WaterDrop: 'WaterDrop',
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: 'primary',
    label: "Label",
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    label: "Label",
  },
};

export const Tertiary: Story = {
  args: {
    type: 'tertiary',
    label: "Label",
  },
};

export const PrimaryWithIcon: Story = {
  args: {
    type: 'primary',
    label: "Label",
    icon: WaterDrop,
  },
};

export const PrimaryOnlyIcon: Story = {
  args: {
    type: 'primary',
    icon: WaterDrop,
  },
};
