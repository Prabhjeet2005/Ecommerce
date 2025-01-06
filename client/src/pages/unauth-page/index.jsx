
import React from 'react'
import VpnKeyOffIcon from "@mui/icons-material/VpnKeyOff";

const Unauth = () => {
  return (
		<div className="flex gap-2 h-screen items-center justify-center text-5xl ">
			Not Authorized  <VpnKeyOffIcon fontSize="" />
		</div>
	);
}

export default Unauth