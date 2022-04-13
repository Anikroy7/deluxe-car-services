import logo from './logo.svg';
import './App.css';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import Home from './pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
