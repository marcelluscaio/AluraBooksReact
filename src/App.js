import './App.css';

import Logo from './componentes/Logo';
import perfil from './imagens/perfil.svg';
import sacola from './imagens/sacola.svg';

const opcoesMenu = ['Categorias', 'Favoritos', 'Minha estante'];
const icones = [perfil, sacola]

function App() {
  return (
    <div className='app'>
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
    </div>
  );
}

export default App;
