import logo from './logo.svg';
import './App.css';
import {  BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './WebPage/Home';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='home' element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
