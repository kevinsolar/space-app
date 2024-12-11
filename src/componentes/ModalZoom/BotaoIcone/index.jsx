import styled from "styled-components"

const Btn = styled.button`
   position: absolute;
   top: 20px;
   right: 60px;
`

const BotaoIcone = ({ children }) => {
   return <Btn formMethod="dialog">{children}</Btn>
}

export default BotaoIcone;