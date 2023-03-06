import { render } from '@testing-library/react';

import Getquotesinfo from './getquotesinfo';

describe('Getquotesinfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Getquotesinfo />);
    expect(baseElement).toBeTruthy();
  });
});
