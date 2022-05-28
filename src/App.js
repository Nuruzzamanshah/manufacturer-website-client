import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Reviews from './pages/Reviews';
import Purchase from './pages/Purchases';
import SignUp from './pages/SignUp';
import RequireAuth from './pages/RequireAuth';

import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import MyReview from './pages/Dashboard/MyReview';
import MyProfile from './pages/Dashboard/MyProfile';
import Users from './pages/Dashboard/Users';
import NotFound from './pages/NotFound/NotFound';
import AddProduct from './pages/Dashboard/AddProduct';
import ManageProduct from './pages/Dashboard/ManageProduct';
import Payment from './pages/Dashboard/Payment';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<RequireAuth>
          <Purchase></Purchase>
        </RequireAuth>}></Route>
        <Route path='/dashboard' element={<RequireAuth>
          <Dashboard></Dashboard>
        </RequireAuth>}>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='myprofile' element={<MyProfile></MyProfile>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<Users></Users>}></Route>
          <Route path='addproduct' element={<AddProduct></AddProduct>}></Route>
          <Route path='manageProduct' element={<ManageProduct></ManageProduct>}></Route>
        </Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer />
    </Navbar>
  );
}

export default App;
