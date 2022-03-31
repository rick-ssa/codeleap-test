
import './App.css';
import Main from './pages/Main';
import Singup from './pages/Singup';
import {connect} from 'react-redux'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App({user}) {
  const logged = Boolean(user)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Singup />} />
          <Route path='/posts' element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  const {user} =  state
  return ({user})
}

export default connect(mapStateToProps) (App);
