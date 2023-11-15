import { Routes, Route } from "react-router-dom";
import App from "../pages/App";
import Header from "../componentes/Header";
import Categorias from "../pages/Categorias";

function Router() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Header />}
			>
				<Route
					path="/"
					element={<App />}
				/>
				<Route
					path="categorias"
					element={<Categorias />}
				/>
			</Route>
		</Routes>
	);
}

export default Router;
