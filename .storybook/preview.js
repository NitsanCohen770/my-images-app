import { addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router';
import { GlobalStyles } from '../src/global/styles';

addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));
export const decorators = [
  Story => (
    <>
      <GlobalStyles /> <Story />
    </>
  ),
];
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
