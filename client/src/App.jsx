import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/auth/layout.jsx";
import AuthLogin from "./pages/auth/login.jsx";
import AuthRegister from "./pages/auth/register.jsx";
import AdminLayout from "./components/admin-view/layout.jsx";
import AdminDashboard from "./pages/admin-view/dashboard.jsx";
import AdminOrders from "./pages/admin-view/orders.jsx";
import AdminProducts from "./pages/admin-view/products.jsx";
import NotFound from "./pages/not-found/index.jsx";
import ShoppingLayout from "./components/shopping-view/layout.jsx";
import ShoppingHome from "./pages/shopping-view/home.jsx";
import ShoppingListing from "./pages/shopping-view/listing.jsx";
import ShoppingCheckout from "./pages/shopping-view/checkout.jsx";
import ShoppingAccout from "./pages/shopping-view/account.jsx";

const App = () => {
	return (
		<div>
			<Routes>
				<Route path="/auth" element={<AuthLayout />}>
					{/* Provide Nested Routes like /auth/login or /auth/register */}
					<Route path="login" element={<AuthLogin />} />
					<Route path="register" element={<AuthRegister />} />
				</Route>
				<Route path="/admin" element={<AdminLayout />}>
					<Route path="dashboard" element={<AdminDashboard />} />
					<Route path="orders" element={<AdminOrders />} />
					<Route path="products" element={<AdminProducts />} />
				</Route>
				<Route path="/shop" element={<ShoppingLayout />}>
					<Route path="home" element={<ShoppingHome />} />
					<Route path="listing" element={<ShoppingListing />} />
					<Route path="checkout" element={<ShoppingCheckout />} />
					<Route path="account" element={<ShoppingAccout />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
};

export default App;
