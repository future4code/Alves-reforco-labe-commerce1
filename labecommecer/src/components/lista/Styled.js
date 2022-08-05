import styled from 'styled-components';

export const MenuCentral = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 10px;
  column-gap: 10px;
  margin: 5px 5px 5px 5px;
  background-color: white;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    
    display: flex;
    flex-direction: column;
        align-items: unset;
        width: 100%;
      
  }
`

export const Imagem = styled.img`
  cursor: grab;
  width: 150px;
    overflow: hidden;
    width: 100%;
    border-radius: 20px;
    max-width: 100%;
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    :hover {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
}
`

export const Botao = styled.button`
  width: 150px;
  border: none;
  background-color: green;
  color: white;
  border-radius: 15px;
  font-size: 20px;
  height: 25px;
  cursor: pointer;
  margin: 0;
  :hover{
  box-shadow: 1px 1px 5px #006cff;
  }
  :active{
    color: #cce7d0;
  background-color: white;
  }
  `


export const Card2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  box-shadow: 1px 1px 5px black;
  text-align: center;
  padding: 5px;
  
  border-radius: 20px;
  border: 1px solid #cce7d0;
  margin: 5px;
  color: #088178;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    width: 90%;
  }
`

export const Titulo = styled.h3`
  margin: 0;
  `

export const Preco = styled.p`
  margin: 0;
`