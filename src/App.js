import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Button,Alert } from 'reactstrap';
import Base from './Components/Base';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userdashboard from './pages/Userdashboard';
import Privateroute from './Components/Privateroute';
import Profile_info from './pages/user_pages/Profile_info';


function App() {
  return (
    
    <BrowserRouter>
    <Base />
    <ToastContainer position='top-center' />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      
      <Route path="/user" element={<Privateroute />}>
      <Route path='dashboard' element={<Userdashboard />}/>
      <Route path='profile_info' element={<Profile_info />}/>
      </Route>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
