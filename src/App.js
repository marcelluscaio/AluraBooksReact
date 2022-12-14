import Logo from './componentes/Logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';
import styled from 'styled-components';

const opcoesMenu = ['Categorias', 'Favoritos', 'Minha estante'];
const icones = [perfil, sacola];

const AppContainer = styled.div`
    background-image: linear-gradient(180deg ,#fff -25%, #4b0685 250%);
    height: 100vh;
    
  .app__header{
    background-image: linear-gradient(45deg ,#6d1c04 -25%, #4b0685 150%);
    padding: 0 5vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .app__lista,
  .app__icones{
    display: flex;
    gap: 1em;
  }

  .lista__item{
    list-style: none;
    color: white;
    cursor: pointer;
  }

  .icones__item{
    list-style: none;
    cursor: pointer;
    height: 2rem;
    filter: hue-rotate(180deg) brightness(2.25);
  }
`

function App() {
  return (
    <AppContainer>
      <header className='app__header'>
        <Logo></Logo>
          <ul className={'app__lista'}>
            {opcoesMenu.map((opcao, indice) => {
              return <li className={'lista__item'} key={indice}>{opcao}</li>
              }
            )}
          </ul>
          
          <ul className={'app__icones'}>
            {icones.map((icone, indice) => {
              return <li className={'icones__item'}  key={indice}><img className={'item__imagem'} src={icone} alt={'icone'}></img></li>
              }
            )}
          </ul>
      </header>
    </AppContainer>
  );
}

export default App;
