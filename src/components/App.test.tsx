import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {dialogsData, messagesData, postsData} from "../index";

test('renders learn react link', () => {
  const { getByText } = render(<App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});