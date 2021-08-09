import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components';

export default {
  title: 'UI/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const AddImage = Template.bind({});
AddImage.args = {
  children: 'Add',
  icon: 'FaPlus',
};

export const RemoveImage = Template.bind({});
RemoveImage.args = { children: 'Remove', icon: 'FaMinus' };

export const BackButton = Template.bind({});
BackButton.args = { children: 'Back', icon: 'FaArrowLeft' };
