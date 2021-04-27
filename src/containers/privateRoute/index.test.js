import { render } from '@testing-library/react';
import { PrivateRoute } from './index';

test('renders without crashing', () => {
  render(<PrivateRoute/>);
});
