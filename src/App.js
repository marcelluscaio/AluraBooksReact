import Pesquisa from "./componentes/Pesquisa";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

const AppContainer = styled.div`
	background-image: linear-gradient(180deg, #fff -25%, #4b0685 250%);
	height: 100vh;
`;

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={
					<AppContainer>
						<Pesquisa />
					</AppContainer>
				}
			/>
			<Route
				path="/teste"
				element={<h1>Teste</h1>}
			/>
		</Routes>
	);
}

export default App;
