import React from 'react';
import Header from 'components/Header/Header';
import { renderWithRouter } from 'testUtils';

describe('Header component', () => {
  it('displays language controls', () => {
    const { getByText } = renderWithRouter(<Header />);
    
    expect(getByText(/en/i)).toBeInTheDocument();
    expect(getByText(/pl/i)).toBeInTheDocument();
  })
});