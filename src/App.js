
import './App.css';
import Main from './pages/Main';
import Singup from './pages/Singup';
import {connect} from 'react-redux'

function App({user}) {
  const logged = Boolean(user)
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

const mapStateToProps = state => {
  const {user} =  state
  return ({user})
}

export default connect(mapStateToProps) (App);
