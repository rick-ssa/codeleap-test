
import './App.css';
import ActionButton from './components/ActionButton';

function App() {
  return (
    <div className="App">
      <ActionButton text='Enter' active onClick={()=>alert('hi')}/>
    </div>
  );
}

export default App;
