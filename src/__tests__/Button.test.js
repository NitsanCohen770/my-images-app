import { render, within } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';

import * as ButtonStories from '../stories/Button.stories'; //👈  Our stories imported here

const { AddImage } = composeStories(ButtonStories);
const { RemoveImage } = composeStories(ButtonStories);
const { BackButton } = composeStories(ButtonStories);

it('renders a button with "Add" label', () => {
  const { container } = render(<AddImage />);
  const { getByText } = within(container);
  expect(getByText('Add')).toBeInTheDocument();
});

it('renders a button with "Remove" label', () => {
  const { container } = render(<RemoveImage />);
  const { getByText } = within(container);
  expect(getByText('Remove')).toBeInTheDocument();
});

it('renders a button with "Back" label', () => {
  const { container } = render(<BackButton />);
  const { getByText } = within(container);
  expect(getByText('Back')).toBeInTheDocument();
});
