
import './App.css';
import Main from './pages/Main';
import Singup from './pages/Singup';

function App() {
  const logged = false
  return (
    <div className="App">
      {
        logged ?
          <Main />
        :
          <Singup />

      }
    </div>
  );
}

export default App;
