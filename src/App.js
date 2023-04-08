import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        < Route path="/" element={<Home />} />
        < Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
