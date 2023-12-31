
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Header from './Pages/Header/Header';
import Footer from './Pages/Home/Footer';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';



function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/appointment' element={<Appointment></Appointment>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
