import sleep from '../sleep';
import throttle from './throttle';

describe('throttle', () => {
  test('throttleの基本的な動作1', async () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 80);
    throttledFn('1', 'first call');
    await sleep(20);
    throttledFn('2', 'second call');
    await sleep(20);
    throttledFn('3', 'third call');
    await sleep(100);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith('3', 'third call');
  });

  test('throttleの基本的な動作2', async () => {
    const mockFn = jest.fn();
    const throttledFn = throttle(mockFn, 80);
    throttledFn('1', 'first call');
    await sleep(20);
    throttledFn('2', 'second call');
    await sleep(80);
    throttledFn('3', 'third call');
    await sleep(100);
    expect(mockFn).toHaveBeenCalledTimes(2);
    expect(mockFn).toHaveBeenCalledWith('2', 'second call');
    expect(mockFn).toHaveBeenCalledWith('3', 'third call');
  });
});
