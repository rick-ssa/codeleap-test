
import './App.css';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Post 
        title={'This is a test'} 
        text={'loren ipsum kljfkld jkl fjdskl jfklds jflkds  jfklds jflk dsjflk dsjfkl sdjlkf dsjlkf jsdl jfsdl fjksld fjlkds jfdslk jflsdk j'}  
        creator={'@test'} 
        time={'25 min ago'}
      />
    </div>
  );
}

export default App;
