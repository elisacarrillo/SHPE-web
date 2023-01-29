import logo from './logo.svg';
import './App.css';
import {Router} from '@reach/router'
import Home from './components/Home';
import Header from './components/Header';
import Login from './components/Login';
import SignUp from './components/SignUp';
import ProfilePage from './components/ProfilePage';

function App() {
  return (
    <div className="background">
      <Header />
      <Router>
        <Home path='/' default></Home>
        <Login path='/login'></Login>
        <SignUp path='/signup'></SignUp>
        <ProfilePage path='/profile'></ProfilePage>
      </Router>
      
    </div>
  );
}

export default App;
