import { render } from '@testing-library/react';

import Getdashboardinfo from './getdashboardinfo';

describe('Getdashboardinfo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Getdashboardinfo />);
    expect(baseElement).toBeTruthy();
  });
});
