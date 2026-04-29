# React Learning 🚀

## Day 1: Basics
- Setup React using Vite
- Learned JSX
- Learned Components
- Learned Props
- Created reusable Hello component

## Code Example
```jsx
function Hello({ name }) {
  return <h1>Hello {name} 👋</h1>;
}

function App() {
  return (
    <div>
      <Hello name="Anushree" />
      <Hello name="Rahul" />
    </div>
  );
}