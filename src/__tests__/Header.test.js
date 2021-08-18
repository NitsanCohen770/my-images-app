import { render, within } from '@testing-library/react';

import { composeStories } from '@storybook/testing-react';

import * as HeaderStories from '../stories/Header.stories';

const { HomePage } = composeStories(HeaderStories);

it('renders a Header with "Your Favorite Images" label', () => {
  const { container } = render(<HomePage />);
  const { getByText } = within(container);
  expect(getByText('Your Favorite Images')).toBeInTheDocument();
});
