import logo from '../../imagens/logo.svg';
import styled from 'styled-components';

const LogoContainer = styled.div`
      display: flex;
      align-items: center;
      font-size: 2rem;
      gap: 1vw;

   img{
      height: 2rem;
   }

   p{
      color: #FC6721;
      opacity: 0.85;
      margin: .5em 0;
   }
`

function Logo(){
   return(
      <LogoContainer>
          <img src={logo} alt={"Logo da Alura Books"}/>
          <p><b>Alura</b> Books</p>
      </LogoContainer>
   )
}

export default Logo;