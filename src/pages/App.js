import Pesquisa from "../componentes/Pesquisa";
import styled from "styled-components";

const AppContainer = styled.div`
	background-image: linear-gradient(180deg, #fff -25%, #4b0685 250%);
	height: 100vh;
`;

function App() {
	return (
		<AppContainer>
			<Pesquisa />
		</AppContainer>
	);
}

export default App;
