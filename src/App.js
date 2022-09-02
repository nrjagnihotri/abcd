import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import Homepage from './pages/Homepage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProductInfo from './pages/ProductInfo';
import Order from './pages/Order';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './stylesheet/Layout.css';
import './stylesheet/products.css';
import './stylesheet/authetication.css';


function App() {

    return (
        <div className="App">
            <ToastContainer />
            <BrowserRouter>
                <Routes>
                    <Route path='/' exact element={<ProtectRoutes><Homepage /></ProtectRoutes>} />

                    <Route path='/cart' exact element={<ProtectRoutes><CartPage /></ProtectRoutes>} />
                    <Route path='/order' exact element={<ProtectRoutes><Order /></ProtectRoutes>} />
                    <Route path='/product/:productid' exact element={<ProtectRoutes><ProductInfo /></ProtectRoutes>} />
                    <Route path='/login' exact element={<LoginPage />} />
                    <Route path='/register' exact element={<RegisterPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
export const ProtectRoutes = ({ children }) => {
    if (localStorage.getItem('currentUser')) {
        return children
    } else {
        return <Navigate to='/login' />
    }
}