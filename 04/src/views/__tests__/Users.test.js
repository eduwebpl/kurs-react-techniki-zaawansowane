import React from 'react';
import { render } from '@testing-library/react';
import Users from 'views/Users';

describe('Users view', () => {
  it('displays loading indicator', () => {
    const { getByText } = render(<Users />);
    
    expect(getByText(/loading/i)).toBeInTheDocument();
  })
})