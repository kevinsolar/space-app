import styled from "styled-components";
import EstiloGlobais from "./componentes/EstilosGlobais";
import Header from "./componentes/Header";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";

import fotos from './fotos.json';
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";

const FundoGradiente = styled.div`
	background: linear-gradient(
		174.61deg,
		#041833 4.16%,
		#04244f 48%,
		#154580 96.76%
	);
	width: 100%;
	min-height: 100vh;
`;

const AppContainer = styled.div`
	width: 1440px;
	max-width: 95%;
	margin: 0 auto;
`;

const MainContainer = styled.main`
	display: flex;
	gap: 24px;
`;

const Conteudos = styled.section`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`;

function App() {

   const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos)
   const [fotoSelecionada, setFotoSelecionada] = useState(null)

   return (
      <FundoGradiente>
         <EstiloGlobais />

         <AppContainer>
            <Header />

            <MainContainer>
               <BarraLateral />

               <Conteudos>
                  <Banner>A galeria mais completa de fotos do espaço!</Banner>
                  <Galeria
                     aoFotoSelecionada={foto => setFotoSelecionada(foto)}
                     fotos={fotosDaGaleria}
                  />
               </Conteudos>

            </MainContainer>
         </AppContainer>
         <ModalZoom foto={fotoSelecionada} />
      </FundoGradiente>
   );
}

export default App;
