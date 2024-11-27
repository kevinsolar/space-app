import styled from "styled-components"

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
               <li>
                  <a href="#">Inicio</a>
               </li>
               <li>
                  <a href="#">Mais vistas</a>
               </li>
               <li>
                  <a href="#"></a>
               </li>
               <li>
                  <a href="#"></a>
               </li>
            </ListaEstilizada>
         </nav>
      </aside>
   )
}

export default BarraLateral;