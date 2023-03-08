import { render } from '@testing-library/react';

import LoadingBar from './loading-bar';

describe('LoadingBar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoadingBar />);
    expect(baseElement).toBeTruthy();
  });
});
