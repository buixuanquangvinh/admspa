import { renderHook } from '@testing-library/react-hooks';
import { useInfiniteList } from './infiniteList.hook';

test('renders without crashing', () => {
    const { result } = renderHook(()=> useInfiniteList())
    expect(result.current.infiniteListState.loading).toBe(true)
});
