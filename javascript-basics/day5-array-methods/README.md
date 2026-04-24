# Day 5 - filter() and reduce()

## filter()
- Used to select elements based on condition
- Returns new array

Example:
const even = nums.filter(n => n % 2 === 0);

## reduce()
- Converts array to single value
- Uses accumulator

Example:
const sum = nums.reduce((acc, curr) => acc + curr, 0);

## Difference
- map → transform
- filter → select
- reduce → combine

## Mistakes
- forgetting return ❌
- not returning accumulator ❌