import { render } from '@testing-library/react';
import { Dashboard } from './index';

test('renders without crashing', () => {
  render(<Dashboard/>);
});
