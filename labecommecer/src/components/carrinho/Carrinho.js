import React, { Component } from 'react';
import styled from 'styled-components';

const MenuDireita = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #e8f6ea;
  border-radius: 20px;
  border: 1px solid #cce7d0;
  margin: 5px;
  color: #088178;
`

const ItensCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 5px;
  
`

const BotaoRemover = styled.button`
  border-radius: 10px;
  border: 2px solid #cce7d0;
  margin: 5px;
  color: #088178;
`

const ValorTotal = styled.div`
  width: 90%;
  margin: 20px 0 0 5px;
`


class Carrinho extends React.Component {
  render() {
    let soma = 0
    return (
      <MenuDireita>
        <h3>Carrinho</h3>
        {this.props.carrinho &&  this.props.carrinho.map(camisa => {
          soma = soma + camisa.repeticao * camisa.value;
          return (
            <ItensCarrinho >
              {`${camisa.repeticao}x `}
              {camisa.name}
              <BotaoRemover id={camisa.id} onClick={this.props.removerItem}>Excluir</BotaoRemover>
            </ItensCarrinho>
          )
        })}

        <ValorTotal>
          <strong>
            {soma !== 0 ? `Valor total: R$ ${soma.toFixed(2)}` : ''}
          </strong>
        </ValorTotal>
      </MenuDireita>
    )
  }
}
export default Carrinho;