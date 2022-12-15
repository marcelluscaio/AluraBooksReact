import Input from '../Input';
import styled from 'styled-components';

const PesquisaContainer = styled.section`
   text-align: center;
`;

function Pesquisa(){

   

   return(
      <PesquisaContainer>
         <h2>Já sabe por onde começar?</h2>
         <h3>Encontre seu livro em nossa estante</h3>
         <Input />
      </PesquisaContainer>
   );
}

export default Pesquisa;