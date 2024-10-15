import lifeIndicator from '../app';

test('lifeIndicator = healthy', () => {
  const result = lifeIndicator({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});

test('lifeIndicator = wounded', () => {
  const result = lifeIndicator({ name: 'Маг', health: 40 });
  expect(result).toBe('wounded');
});

test('lifeIndicator = critical', () => {
  const result = lifeIndicator({ name: 'Маг', health: 10 });
  expect(result).toBe('critical');
});
