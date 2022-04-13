
import './App.css';
import Header from './pages/shared/Header/Header';
import Footer from './pages/shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Services from './pages/Home/Services/Services';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Services></Services>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
