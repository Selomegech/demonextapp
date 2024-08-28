import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookMark from './bookmark';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({}),
  })
) as jest.Mock;

describe('BookMark Component', () => {
  const id = 'test-id';
  const token = 'test-token';

  it('should render the bookmark icon correctly', () => {
    const { getByRole } = render(<BookMark isBookmarked={true} id={id} token={token} />);
    expect(getByRole('button')).toBeInTheDocument();
  });

  it('should toggle the bookmark state on click', async () => {
    const { getByRole, rerender } = render(<BookMark isBookmarked={false} id={id} token={token} />);
    const button = getByRole('button');

    
    expect(button.firstChild).toHaveClass('w-10 h-10 col text-yellow-500');

    
    fireEvent.click(button);
    await waitFor(() => expect(button.firstChild).toHaveClass('w-5 h-10 border-0 text-yellow-500'));

    
    rerender(<BookMark isBookmarked={true} id={id} token={token} />);
    expect(button.firstChild).toHaveClass('w-5 h-10 border-0 text-yellow-500');

    
    fireEvent.click(button);
    await waitFor(() => expect(button.firstChild).toHaveClass('w-10 h-10 col text-yellow-500'));
  });
});