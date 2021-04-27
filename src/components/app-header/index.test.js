import { render, screen } from '@testing-library/react';
import { AppHeaderComponent } from './index';

test('renders without crashing', () => {
  render(<AppHeaderComponent></AppHeaderComponent>);
});
