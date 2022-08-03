import React, { Component } from 'react';
import { Header } from './components/header/Header';
import styled from 'styled-component';
import './App.css';


const Principal = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 60px 1fr 60px;
  grid-template-columns: 225px 1fr 225px;
  box-sizing: border-box;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    
    display: flex;
    flex-direction: column;
        align-items: unset;
        width: 75vw;
  }
`

export default class App extends Component {
  render() {
    return (
      <Header />
    )
  }

}
