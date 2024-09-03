import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App flex-col items-center">
      <h1>다연이와 락규의 모바일 청첩장</h1>
      <div className='w-full flex justify-center'>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      {/* <header className="App-header">
        <div className='text-3xl font-bold'>test</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
