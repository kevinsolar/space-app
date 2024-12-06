import styled from "styled-components";
import EstiloGlobais from "./componentes/EstilosGlobais";
import Header from "./componentes/Header";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";

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
	max-width: 100%;
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
	return (
		<FundoGradiente>
			<EstiloGlobais />

			<AppContainer>
				<Header />

				<MainContainer>
					<BarraLateral />
               
					<Conteudos>
						<Banner>A galeria mais completa de fotos do espaço!</Banner>
                  <Galeria />
					</Conteudos>

				</MainContainer>
			</AppContainer>
		</FundoGradiente>
	);
}

export default App;
