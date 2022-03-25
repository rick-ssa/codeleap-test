
import './App.css';
import ActionButton from './components/ActionButton';
import Dialog from './components/Dialog';
import InputText from './components/InputText';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <Dialog 
        title = 'Welcome to CodeLeap network!'
        buttons = {[
          {text:'enter', active:true, simple: false, onClick:()=>alert('hello')},
          {text:'sair', active:true, simple: false, onClick:()=>alert('hi')},
        ]}
      >
        <InputText title={'Title'} placeholder='Title' value='Rick'/>
        <InputText title={'Title'} placeholder='Title' value='Rick' multline/>
      </Dialog>
      
      <p/>
      <p/>
      <p/>
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
