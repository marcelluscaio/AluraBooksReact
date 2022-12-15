import styled from "styled-components";
import { useState } from 'react';
import { Livros } from '../Pesquisa/dadosPesquisa'

const InputContainer = styled.div`
   label{
      display: block;
      font-size: 20px;
      margin-bottom: 8px;
   }

   .campo-livros{
      display: flex;
      flex-wrap: wrap;
   }
`

const Field = styled.input`
   background: transparent;
   border: 1px solid #000;
   color: #000;
   padding: 20px 140px;
   border-radius: 50px;
   width: 200px;
   font-size: 16px;
   margin-bottom: 10px;
   margin-left: 10px;

   &::placeholder {
            color: #000;
            font-size: 16px;
            opacity: 0.7;
   }

   &:focus{
      outline: none;
      border-color: #FC6721;
   }

   &:focus::placeholder{
      color: #FC6721;
   }
`;

function Input(){
   const [livroPesquisado, setLivroPesquisado] = useState([]);
   return(
      <InputContainer>
         <label htmlFor="pesquisa">O que você procura?</label>
         <Field
            id="pesquisa"
            placeholder="Escreva o que você procura"
            onBlur={(e) => {
               const textoDigitado = e.target.value;
               const resultadoPesquisa = Livros.filter(livro => livro.nome.includes(textoDigitado));
               setLivroPesquisado(resultadoPesquisa);

            }}
         />
         <div className='campo-livros'>
            {livroPesquisado.map(livro => {
               return(
                  
                     <div>
                        <img src={livro.src} alt={livro.nome}/>
                        <p>{livro.nome}</p>
                     </div>

               )
            })}         
         </div>
      </InputContainer>
   )
}

export default Input;