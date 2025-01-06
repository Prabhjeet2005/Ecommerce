import React from "react";
import { Outlet } from "react-router-dom";
import ShoppingHeader from "./header";

const ShoppingLayout = () => {
	return (
		<div className="flex min-h-screen w-full ">
			<div className="flex flex-col">
				<ShoppingHeader />
				<Outlet />
			</div>
		</div>
	);
};

export default ShoppingLayout;
