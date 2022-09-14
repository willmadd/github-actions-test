import './App.css';
// import env from "react-dotenv";

function App() {
  console.log('xyz', process.env)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github actions test v1.0.1 {process.env.REACT_APP_API_KEY}</h1>
      </header>
    </div>
  );
}

export default App;
