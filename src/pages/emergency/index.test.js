import { render } from '@testing-library/react';
import { EmergencyService } from './index';

test('renders without crashing', () => {
  render(<EmergencyService/>);
});
