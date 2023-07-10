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
import AdminPage from './pages/user_pages/AdminPage';
import Search from './pages/Search';
import AllBlogs from './pages/AllBlogs';
import { Row } from 'reactstrap';
import Footer from './Components/Footer';
import PasswordChange from './pages/user_pages/PasswordChange';


function App() {
  return (
    <div>
    <UserProvider>
    <BrowserRouter>
    <ToastContainer position='bottom-center' />
      <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/blogs' element={<AllBlogs />}/>
      <Route path='/signup' element={<Signup />}/>
      <Route path='/services' element={<Services />}/>
      <Route path='/blogs/:bid' element={<PostPage />}/>
      <Route path='/categories/:categoryId' element={<Categories />}/>
      <Route path='/blogs/search/:keywords' element={<Search />}/>

      <Route path="/user" element={<Privateroute />}>
        <Route path='dashboard' element={<Userdashboard />}/>
        <Route path='profile_info' element={<Profile_info />}/>
        <Route path='myblogs' element={<MyBlogs />}/>
        <Route path='password' element={<PasswordChange />}/>
        <Route path='update_blog/:bid' element={<UpdateBlog />}/>
        <Route path='admin/home' element={<AdminPage />} />
      </Route>

      </Routes>
      <Footer />
    </BrowserRouter>
    </UserProvider>
     

</div>
  );
}

export default App;
