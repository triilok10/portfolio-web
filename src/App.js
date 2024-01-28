import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Github from './components/Github';
import Login from './components/Login';
import './App.css';

import {
  Routes,
  Route
} from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/github' element={<Github />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
