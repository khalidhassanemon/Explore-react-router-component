import {  BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Header from './Component/Header';

function App() {
  return (
    <div className="App">
   
      <Router>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
