import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from './components/auth/layout.jsx'
import AuthLogin from './pages/auth/login.jsx'
import AuthRegister from './pages/auth/register.jsx'

const App = () => {
  return (
		<div>
			<Routes>
				<Route path="/auth" element={<AuthLayout />}>
					{/* Provide Nested Routes like /auth/login or /auth/register */}
					<Route path="login" element={<AuthLogin />} />
					<Route path="register" element={<AuthRegister />} />
				</Route>
			</Routes>
		</div>
	);
}

export default App