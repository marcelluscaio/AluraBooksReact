import Logo from "../Logo";

import perfil from "../../imagens/perfil.svg";
import sacola from "../../imagens/sacola.svg";
import { Link } from "react-router-dom";

import styled from "styled-components";

const opcoesMenu = ["Categorias", "Favoritos", "Minha estante"];
const icones = [perfil, sacola];

const StyledHeader = styled.header`
	background-image: linear-gradient(45deg, #6d1c04 -25%, #4b0685 150%);
	padding: 0 5vw;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.app__lista,
	.app__icones {
		display: flex;
		gap: 1em;
	}

	.lista__item {
		list-style: none;
		color: white;
		cursor: pointer;
	}

	.icones__item {
		list-style: none;
		cursor: pointer;
		height: 2rem;
		filter: hue-rotate(180deg) brightness(2.25);
	}
`;

function Header() {
	return (
		<StyledHeader>
			<Logo></Logo>
			<ul className={"app__lista"}>
				{opcoesMenu.map((opcao, indice) => {
					return (
						<Link to={`/${opcao.toLowerCase().split(" ").join("")}`}>
							<li
								className={"lista__item"}
								key={indice}
							>
								{opcao}
							</li>
						</Link>
					);
				})}
			</ul>

			<ul className={"app__icones"}>
				{icones.map((icone, indice) => {
					return (
						<li
							className={"icones__item"}
							key={indice}
						>
							<img
								className={"item__imagem"}
								src={icone}
								alt={"icone"}
							></img>
						</li>
					);
				})}
			</ul>
		</StyledHeader>
	);
}

export default Header;
