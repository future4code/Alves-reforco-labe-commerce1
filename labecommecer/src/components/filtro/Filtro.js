import React, { Component } from 'react';
import styled from 'styled-components';

const MenuEsquerda = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: whitesmoke;
`

const OrdenacaoTexto = styled.h3`
@media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    margin: 0;
  }
`
const Titulos = styled.p`
  margin: 0 0 5px 0;
  
`

const Entrada = styled.input`
  border: 1px solid blue;
  height: 25px;
  margin: 0 0 20px 0;
  @media screen and (min-device-width : 220px) and (max-device-width : 580px) {
    margin: 0;
  }
  `

const Entrada2 = styled.select`
  border: 1px solid blue;
  height: 25px;
  margin: 0 0 20px 0;
  width: 175px;
  margin: 0;
  `

const Op = styled.option`
  border: 1px solid blue;
  height: 25px;
  margin: 0 0 20px 0;
  width: 10px;
`

class Filtro extends React.Component {
  render() {
    return (
      <MenuEsquerda>
        <h3>Filtragem</h3>
        <div>

          <Titulos>Valor mínimo:</Titulos>
          <Entrada
            type="Number"
            placeholder="Preço mínimo"
            value={this.props.minPrice}
            onChange={this.props.atualizaMinPreco}
          />

          <Titulos>Valor máximo:</Titulos>
          <Entrada
            type="Number"
            placeholder="Preço máximo"
            value={this.props.maxPrice}
            onChange={this.props.atualizaMaxPreco}
          />

          <Titulos>Busca por nome:</Titulos>
          <Entrada
            type="text"
            placeholder="Buscar"
            value={this.props.pesquisa}
            onChange={this.props.atualizaPesquisa}
          />

        </div>

        <OrdenacaoTexto>Ordenação</OrdenacaoTexto>
        <div>

          <Titulos>Ordenação de preço:</Titulos>
          <Entrada2
            name="ordenacao"
            value={this.props.ordenacao}
            onChange={this.props.atualizaOrdenacao}
          >
            <Op value={1}>Crescente</Op>
            <Op value={-1}>Decrescente</Op>
          </Entrada2>

        </div>
      </MenuEsquerda>
    )
  }
}

export default Filtro;