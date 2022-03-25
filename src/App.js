
import './App.css';
import Main from './pages/Main';
import Singup from './pages/Singup';

function App() {
  const login = true
  return (
    <div className="App">
      {
        login ?
          <Main />
        :
          <Singup />

      }
    </div>
  );
}

export default App;
