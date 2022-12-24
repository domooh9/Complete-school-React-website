import styled from 'styled-components';
   
export const Box = styled.div`
 background: black;
  height: 0;
  // opacity: 0.5;
  position: relative;
 bottom: 0;
  width: 100%;
    @media (max-width: 1000px) {
    padding: 70px 30px;
  }
 
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
     min-width: 100px;
    position: relative;
    margin: 0 auto;
     top: 60px;
     background: #87CEEB; 
     color: whitesmoke;
     height: 330px;
     width: 100%;
  
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 70px;
 
`;
   
export const Row = styled.div`

  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(185px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 12px;
  font-size: 12px;
  text-decoration: none;
  &:hover {
      color: green;
      transition: 200ms ease-in;
  }
  
`;
   
export const Heading = styled.p`
 color: #fff;
  margin-bottom: 20px;
 font-weight: bold;
`;
