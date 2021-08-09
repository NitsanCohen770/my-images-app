import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SearchBox } from '../components';

export default {
  title: 'Components/SearchBox',
  component: SearchBox,
  argTypes: {},
} as ComponentMeta<typeof SearchBox>;

const Template: ComponentStory<typeof SearchBox> = () => <SearchBox />;

export const SearchBoxDefault = Template.bind({});
SearchBoxDefault.args = {};
