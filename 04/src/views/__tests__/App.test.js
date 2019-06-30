import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from 'views/App';

describe('App view', () => {
  it('changes the language properly', () => {
    const { getByText } = render(<App />);
    
    expect(getByText(/current language: en/i)).toBeInTheDocument();
    
    fireEvent.click(getByText('PL'));
    
    expect(getByText(/current language: pl/i)).toBeInTheDocument();
  });
});