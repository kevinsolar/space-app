import styled from "styled-components";

const ItemListaEstilizada = styled.li`
   font-size: 24px;
   line-height: 29px;
   margin-bottom: 30px;
   cursor: pointer;
   color: ${props => props.$ativo ? '' : '' };
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
   return (
      <ItemListaEstilizada $props={ativo}>
         <img src={ativo ? iconeAtivo : iconeInativo} alt={children} />
         {children}
      </ItemListaEstilizada>
   )
}

export default ItemNavegacao;