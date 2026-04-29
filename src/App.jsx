function Hello({ name }) {
  return <h1>Hello {name} 👋</h1>;
}

function App() {
  return (
    <div>
      <Hello name="Anushree" />
      <Hello name="Rahul" />
      <Hello name="React Learner 🚀" />
    </div>
  );
}

export default App;