import logo from './logo.svg';
import './App.css';
import People from './components/People'


function App() {
  return (
    <div className="App">
      <h1>This is a list of people</h1>
      <People lastName ="Doe" firstName="Jane" age="45" hairColor="Black" ></People>
      <People lastName ="Smith" firstName="John" age="88" hairColor="Brown" ></People>
      <People lastName ="Fillmore" firstName="Millard" age="50" hairColor="Brown" ></People>
      <People lastName ="Smith" firstName="Maria" age="62" hairColor="Brown" ></People>
    </div>
  );
}

export default App;
