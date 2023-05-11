import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
};

function App() {
    const user = useSelector((state) => state.user && state.user.currentUser);
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products/:categories?" element={<ProductList />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={user && user.isAuthenticated ? <Navigate to="/" /> : <Login />} />
                <Route path="/register" element={user && user.isAuthenticated ? <Navigate to="/" /> : <Register />} />
                <Route path="/success" element={<Success />} />
            </Routes>
        </Router>
    );
}

export default App;
