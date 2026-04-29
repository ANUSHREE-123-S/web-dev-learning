# Day 6 - async/await + fetch

## async/await
- Used to handle asynchronous operations
- Makes code look synchronous

Example:
const res = await fetch(url)
const data = await res.json()

## fetch()
- Used to call APIs

## Flow
fetch → response → json → data

## Error Handling
try-catch is used

## Mistakes
- forgetting await ❌
- not calling function ❌
- not converting to json ❌

## Learnings
- Understood async behavior
- Learned API calling using fetch
- Extracted data using map