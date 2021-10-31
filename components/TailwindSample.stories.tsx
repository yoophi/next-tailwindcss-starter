import { Meta, Story } from "@storybook/react/types-6.0";

import TailwindSample from "./TailwindSample";

export default {
  title: "Tailwind Sample",
  components: TailwindSample,
} as Meta;

export const Default: Story = (args) => {
  return (
    <div>
      <TailwindSample />
    </div>
  );
};
