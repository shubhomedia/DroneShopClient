import logo from './logo.svg';
import './App.css';
import Home from './Components/Pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes, Switch } from "react-router-dom";
import NotFound from './Components/Pages/NotFound/NotFound';
import Login from './Components/Pages/Login/Login/Login';
import Register from './Components/Pages/Login/Register/Register';
import About from './Components/Pages/About/About';
import Products from './Components/Pages/Products/Products/Products';
import Footer from './Components/Shared/Footer/Footer';
import SingleProductDetails from './Components/Pages/Products/SingleProductDetails/SingleProductDetails';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import RequireAuth from './Components/RequireAuth/RequireAuth';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}>
        </Route>
        <Route path='/home' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}>
        </Route>
        <Route path='/products' element={<Products />} >
        </Route>
        <Route path='/products/:productId' element={<SingleProductDetails />}>
        </Route>

        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
        </Route>

        <Route path='/login' element={<Login />}  >
        </Route>
        <Route path='/register' element={<Register />} >
        </Route>
        <Route exact path='*' element={<NotFound />} >
        </Route>
      </Routes>
      <Footer></Footer>
    </div >
  );
}

export default App;
