import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter,Routes,Route, HashRouter, UNSAFE_DataRouterContext } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Services from './pages/Services';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Userdashboard from './pages/Userdashboard';
import Privateroute from './Components/Privateroute';
import Profile_info from './pages/user_pages/Profile_info';
import PostPage from './pages/PostPage';
import UserProvider from './context/UserProvider';
import Categories from './pages/Categories';
import MyBlogs from './pages/user_pages/MyBlogs';
import UpdateBlog from './pages/UpdateBlog';


function App() {
  return (
    <UserProvider>
    <BrowserRouter>
    <ToastContainer position='bottom-center' />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/blogs/:bid' element={<PostPage />}/>
      <Route path='/categories/:categoryId' element={<Categories />}/>

      <Route path="/user" element={<Privateroute />}>
        <Route path='dashboard' element={<Userdashboard />}/>
        <Route path='profile_info' element={<Profile_info />}/>
        <Route path='myblogs' element={<MyBlogs />}/>
        <Route path='update_blog/:bid' element={<UpdateBlog />}/>
      </Route>

      </Routes>
    </BrowserRouter>
    </UserProvider>
  );
}

export default App;
