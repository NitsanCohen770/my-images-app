import React from 'react';
import StoryRouter from 'storybook-react-router';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from '../components';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [StoryRouter()],
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const HomePage = Template.bind({});
HomePage.args = {};
