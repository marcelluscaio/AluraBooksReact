import { Outlet } from "react-router-dom";
import Header from "../componentes/Header";

function Root() {
	return (
		<>
			<Header />
			<Outlet />
		</>
	);
}

export default Root;
