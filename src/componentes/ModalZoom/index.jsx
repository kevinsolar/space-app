import styled from "styled-components";
import Imagem from "../Galeria/Imagem";
import BotaoIcone from "./BotaoIcone";

const Overlay = styled.div`
   background-color: rgba(0, 0, 0, 0.7);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    z-index: 999;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    background: transparent;
    padding: 0;
    border: 0;
    width: 80%;
    height: 60vh;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
        }
    }
`

const ModalZoom = ({ foto, aoFechar }) => {
   return (
      <>
         {foto && <>
            <Overlay />
            <DialogEstilizado open={!!foto} onClose={aoFechar}>
               <Imagem foto={foto} expandida={true} />
               <form method="dialog">
                  <BotaoIcone formMethod="dialog">
                     <img src="/icones/fechar.png" alt="Icone de fechar" />
                  </BotaoIcone>
               </form>
            </DialogEstilizado>
         </>}
      </>
   )
}

export default ModalZoom;