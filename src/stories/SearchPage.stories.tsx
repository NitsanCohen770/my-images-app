import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchPage from '../containers/SearchPage';

export default {
  title: 'Pages/SearchPage',
  component: SearchPage,
} as ComponentMeta<typeof SearchPage>;

const Template: ComponentStory<typeof SearchPage> = args => (
  <SearchPage {...args} />
);

export const SearchPageDefault = Template.bind({});
SearchPageDefault.args = {};
