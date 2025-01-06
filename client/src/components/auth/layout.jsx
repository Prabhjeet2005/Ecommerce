import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = () => {
  return (
		<div className="flex flex-col text-center h-screen justify-between items-center sm:flex-row">
			<div className="overflow-hidden flex items-center justify-center bg-zinc-900 h-[20%] sm:h-screen w-full sm:w-[50%] text-white">
				<h1 className="text-3xl font-semibold p-5">Ecommerce Shop</h1>
			</div>
			<div className="overflow-hidden flex items-center justify-center h-[80%] sm:h-screen w-full sm:w-[50%] ">
				<Outlet />
				{/* Nested Routes like /auth/login or /auth/register */}
			</div>
		</div>
	);
}

export default AuthLayout