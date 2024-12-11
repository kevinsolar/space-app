import styled from "styled-components";
import Titulo from "../Titulo";
import Populares from "./Populares";
import Tags from "./Tags";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
   display: flex;
`

const SecaoFluida = styled.section`
   flex-grow: 1;
`
const RowFotos = styled.div`
   display: flex;
   flex-wrap: wrap;
   width: 100%;
   gap: 1.5rem;
`

const Galeria = ({ fotos = [], aoFotoSelecionada }) => {
   return (
      <>
         <Tags />

         <GaleriaContainer>
            <SecaoFluida>
               <Titulo>Navegue pela galeria</Titulo>

               <RowFotos>
                  {fotos.map(foto => <Imagem
                     key={foto.id}
                     foto={foto}
                     aoZoomSolicitado={aoFotoSelecionada}
                  />)}
               </RowFotos>
            </SecaoFluida>
            <Populares />
         </GaleriaContainer>
      </>
   )
}

export default Galeria;