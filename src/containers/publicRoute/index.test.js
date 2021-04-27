import { render } from '@testing-library/react';
import { PublicRoute } from './index';

test('renders without crashing', () => {
  render(<PublicRoute/>);
});
