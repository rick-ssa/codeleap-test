
import './App.css';
import ActionButton from './components/ActionButton';
import InputText from './components/InputText';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <InputText title={'Title'} placeholder='Title' value='Rick'/>
      <InputText title={'Title'} placeholder='Title' value='Rick' multline/>
      <ActionButton text={'test'} active simple onClick={()=>alert('works')}/>
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
