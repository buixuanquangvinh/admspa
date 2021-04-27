import { render } from '@testing-library/react';
import { Login }  from './index';

test('renders without crashing', () => {
  render(<Login/>);
});
