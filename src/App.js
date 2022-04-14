
import './App.css';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import { Route, Router, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import Login from './pages/Login/Login';
import ServiceDetails from './pages/SeviceDetails/ServiceDetails';
import NotFound from './pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
