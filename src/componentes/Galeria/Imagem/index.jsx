import styled from "styled-components";

const Figure = styled.figure`
   width: ${(props) => (props.$expandida ? '90%' : '460px')};
   height: 345px;
   border-radius: 20px;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   margin: 0;

   img {
      width: 100%;
      height: 75%;
      object-fit: cover;
      object-position: center;
   }

   figcaption {
      background-color: #001634;
      height: 25%;
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 14px;
   }
   figcaption h3 {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
   }
   figcaption footer {
      display: flex;
      justify-content: space-between;
   }
   figcaption footer p {
      font-size: 1rem;
      margin: 0;
   }
   figcaption footer .btns {
      display: flex;
      gap: 10px;
   }
   figcaption footer button {
      background-color: transparent;
      border: none;
      cursor: pointer;
   }
`

const Imagem = ({ foto, expandida = false, aoZoomSolicitado }) => {
   return (
      <Figure $expandida={expandida} id={`foto-${foto.id}`}>
         <img src={foto.path} alt={foto.titulo} />
         <figcaption>
            <h3>{foto.titulo}</h3>
            <footer>
               <p>Fonte/{foto.fonte}</p>
               <div className="btns">
                  <button><img src="/icones/favorite.svg" alt="#" /></button>
                  {!expandida && <button aria-hidden={expandida} onClick={() => aoZoomSolicitado(foto)}><img src="/icones/expandir.svg" alt="#" /></button>}
               </div>
            </footer>
         </figcaption>
      </Figure>
   )
}

export default Imagem;