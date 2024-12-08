import styled from 'styled-components';
import tags from './tags.json';

const TagsEstilizadas = styled.div`
   display: flex;
   margin-top: 45px;
   gap: 24px;
   color: #fff;

   p {
      font-size: 1.5rem;
      margin: 0;
   }

   button {
      padding: 10px 8px;
      background-color: #D9D9D94D;
      border: 2px solid transparent;
      border-radius: 10px;
      box-sizing: border-box;
      cursor: pointer;
      transition: all 0.3s ease;
      color: #fff;
   }
   button:hover {
      border-color: #C98CF1;
   }
`

const Tags = () => {
   return (
      <>

         <TagsEstilizadas>
            <p>Busque por tags:</p>

            {tags.map(
               tag =>
                  <button key={tag.id}>{tag.titulo}</button>
            )}
         </TagsEstilizadas>

      </>
   )
}

export default Tags;