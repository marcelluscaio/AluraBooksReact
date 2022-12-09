import './logo.css';
import logo from '../../imagens/logo.svg';

function Logo(){
   return(
      <div className='logo'>
          <img src={logo} alt={"Logo da Alura Books"}></img>
          <p><b>Alura</b> Books</p>
      </div>
   )
}

export default Logo;