
import './App.css';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home/Home';
import ServiceDetails from './pages/SeviceDetails/ServiceDetails';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Cheakout from './pages/Cheakout/Cheakout/Cheakout';
import AddService from './pages/AddService/AddService';
import ManageServices from './pages/ManageServices/ManageServices';

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
        <Route path='/cheakout' element=
          {
            <RequireAuth>
              <Cheakout></Cheakout>
            </RequireAuth>
          }>

        </Route>
        <Route path='/manage' element=
          {
            <RequireAuth>
              <ManageServices></ManageServices>
            </RequireAuth>
          }>

        </Route>

        <Route path={'/addservice'} element={
          <RequireAuth>
            <AddService></AddService>
          </RequireAuth>
        }></Route>
        <Route path='register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
