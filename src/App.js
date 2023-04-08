import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/ProfilePage';
import Header from './components/Header';

function App() {
  return (
    <>
    < Header />
    <Router>
      
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path='/login' element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />

      </Routes>
    </Router>
    </>
  );
}

export default App;
