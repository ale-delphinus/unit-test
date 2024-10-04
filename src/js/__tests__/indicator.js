import { lifeIndicator } from '../app.js';

test('lifeIndicator = healthy', () => {
  let result = lifeIndicator({ name: 'Маг', health: 90 });
  expect(result).toBe('healthy');
});



test('lifeIndicator = wounded', () => {
    let result = lifeIndicator({ name: 'Маг', health: 40 });
    expect(result).toBe('wounded');
  });

  test('lifeIndicator = critical', () => {
    let result = lifeIndicator({ name: 'Маг', health: 10 });
    expect(result).toBe('critical');
  });
  
  