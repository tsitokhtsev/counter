import Counter from './components/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Counter defaultValue={0} />
      <Counter defaultValue={10} />
      <Counter defaultValue={-10} />
    </div>
  );
}

export default App;
