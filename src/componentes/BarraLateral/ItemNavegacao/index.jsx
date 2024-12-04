import styled from "styled-components";

const ItemListaEstilizada = styled.li`
   
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
   return (
      <li>
         <a href="#">
            <img src={ativo ? iconeAtivo : iconeInativo} alt={children} />
            {children}
         </a>
      </li>
   )
}

export default ItemNavegacao;