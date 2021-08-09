import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ImageViewer } from '../components';
import * as ButtonStories from './Button.stories';

export default {
  title: 'UI/ImageViewer',
  component: ImageViewer,
  argTypes: {},
} as ComponentMeta<typeof ImageViewer>;

const Template: ComponentStory<typeof ImageViewer> = args => (
  <ImageViewer {...args} />
);

export const SearchPageImage = Template.bind({});
SearchPageImage.args = {
  imageURL: null,
  alt: 'blossom, bloom, flower',
  ...ButtonStories.AddImage.args,
};

export const HomePageImage = Template.bind({});
HomePageImage.args = {
  imageURL: null,
  alt: 'blossom, bloom, flower',
  isHomePageImage: true,
  ownersName: 'Nitsan',
  ...ButtonStories.RemoveImage.args,
};
