import styled from "styled-components";
import Titulo from "../../Titulo";
import fotosPop from './fotos-pop.json';

const ColunaFotos = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   gap: 1rem;
`

const ImgPop = styled.img`
   max-width: 212px;
   height: auto;
   border-radius: 20px;
`

const Botao = styled.button`
   background-color: transparent;
   color: #fff;
   border: 2px solid;
   border-color: #C98CF1;
   padding: 12px 20px;
   font-size: 1.25rem;
   border-radius: 10px;
   cursor: pointer;
   width: 100%;
   margin-top: 16px;
`

const Populares = () => {
   return (
      <section>
         <Titulo $alinhamento='center'>Populares</Titulo>

         <ColunaFotos>
            {fotosPop.map(ft => <ImgPop src={ft.path} />)}
         </ColunaFotos>

         <Botao>Ver mais</Botao>
      </section>
   )
}

export default Populares;