import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao";

const ListaEstilizada = styled.ul`
   list-style: none;
   padding: 0;
   margin: 0;
   max-width: 20%;
`

const BarraLateral = () => {
   return (
      <aside>
         <nav>
            <ListaEstilizada>
               <ItemNavegacao
                  iconeInativo='/icones/home-inativo.png'
                  iconeAtivo='/icones/home-ativo.png'
                  ativo
               >
                  Inicio
               </ItemNavegacao>

               <ItemNavegacao
                  iconeInativo='/icones/mais-vistas-inativo.png'
                  iconeAtivo='/icones/mais-vistas-ativo.png'
               >
                  Mais Vistos
               </ItemNavegacao>
            </ListaEstilizada>
         </nav>
      </aside>
   )
}

export default BarraLateral;