import { sortArray } from '../sort.js';

test('sort health', () => {
    let arr = [
        {name: 'мечник', health: 10},
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
    ];

    let newArr = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ];

    let result = sortArray(arr);
    expect(result).toEqual(newArr);
})