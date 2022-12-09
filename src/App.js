import './App.css';
import logo from './imagens/logo.svg'

function App() {
  return (
    <div className='app'>
      <header className='app__header'>
        <div className='header__logo'>
          <img src={logo} alt={"Logo da Alura Books"}></img>
          <p><b>Alura</b> Books</p>
        </div>
      </header>
    </div>
  );
}

export default App;
