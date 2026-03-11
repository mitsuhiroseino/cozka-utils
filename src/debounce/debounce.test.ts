import deb from 'lodash-es/debounce';
import sleep from '../sleep';
import debounce from './debounce';

describe('debounce', () => {
  test('lodash/debounce', async () => {
    const debouncedFn = deb((num) => num + 1, 80);
    console.log('01', debouncedFn(10));
    console.log('02', debouncedFn(100));
    console.log('03', debouncedFn(1000));
  });

  test('debounceの基本的な動作1', async () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 80);
    debouncedFn('1', 'first call');
    debouncedFn('2', 'second call');
    debouncedFn('3', 'third call');
    await sleep(120);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('3', 'third call');
  });

  test('debounceの基本的な動作2', async () => {
    const mockFn = jest.fn();
    const debouncedFn = debounce(mockFn, 80);
    debouncedFn('1', 'first call');
    debouncedFn('2', 'second call');
    await sleep(120);
    debouncedFn('3', 'third call');
    await sleep(120);
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith('2', 'second call');
    expect(mockFn).toHaveBeenCalledWith('3', 'third call');
  });
});
