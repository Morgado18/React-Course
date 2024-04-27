import logo from './logo.svg';
import './App.css';

import HelloWorld from './components/Helloworld';

function App() {

    const name = "Guilherme"
    const newName = name.toUpperCase()
    const img = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h2>Olá React!</h2>
      <img src={logo} alt='My image' width={200} height={200}></img>
      <h3>Hello world!</h3>
      <h4>My first App</h4>
      <p>I am {newName}</p>
      <HelloWorld />
    </div>
  );
}

export default App;
