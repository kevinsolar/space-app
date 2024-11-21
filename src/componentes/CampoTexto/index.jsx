import styled from "styled-components";
import search from "./search.svg";

const ContainerEstilizado = styled.div`
	position: relative;
	display: inline-block;
   height: 100%
`;

const CampoTextoEstilizado = styled.input`
	min-width: 500px;
	min-height: 55px;
   padding: 12px 16px;
   background-color: transparent;
   border-radius: 10px;
	border: 2px solid transparent;
   border-image: linear-gradient(to right, #c98cf1, #7b78e5) 1;
   box-sizing: border-box;
	display: flex;
   justify-content: space-between;
   color: #fff;
   input::placeholder {
      color: #fff;
   }
`;

const IconeLupa = styled.img`
	position: absolute;
	top: 10px;
	right: 10px;
	width: 32px;
	height: 32px;
`;

const CampoTexto = (props) => {
	return (
		<ContainerEstilizado>
			<CampoTextoEstilizado placeholder="O que você procura?" {...props} />
         <IconeLupa src={search} alt="ícone de lupa" />
		</ContainerEstilizado>
	);
};

export default CampoTexto;
