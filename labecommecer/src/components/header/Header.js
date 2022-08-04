import React, { Component } from 'react';
import styled from 'styled-components';
import SpaceX from './../img/Logo.png';

const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  grid-column: 1/-1;
  background-color: rgb(0,0,0);
`

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  flex-basis: 225px;
  height: 100%;
  `
const ImagemLogo = styled.img`
  width: 70px;
  margin: 0 20px 0 50px;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin: 0;
    width: 100px;
    align-items: center;
    margin-left: 65px;
  }
  `


class Header extends React.Component {
    render() {
        return(
            <Cabecalho>
                <Box1>
                    <ImagemLogo src={SpaceX} />
                </Box1>
            </Cabecalho>
        )
    }


  }

export default Header;  
