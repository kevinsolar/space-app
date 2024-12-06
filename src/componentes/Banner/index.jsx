import styled from "styled-components";

const BannerEstilo = styled.div`
flex: 1;
padding: 80px 65px; 
position: relative;
overflow: hidden;
border-radius: 20px;

img {
   position: absolute;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100%;
   height: 100%;
   object-position: center;
   object-fit: cover;
   z-index: 0;
}

.text {
   position: relative;
   z-index: 7;
   max-width: 301px;
   height: 100%;
   display: flex;
   align-items: center;
}

.text p {
   color: #fff;
   font-size: 2.5rem;
   margin: 0;
}
`

const Banner = ( {children} ) => {
   return(
      <BannerEstilo>
         <img src="/imagens/banner.jpg" alt="A galeria mais completa de fotos do espaço!" />
         <div className="text">
            <p>{children}</p>
         </div>
      </BannerEstilo>
   )
}

export default Banner;