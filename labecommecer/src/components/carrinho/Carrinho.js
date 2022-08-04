import React, { Component } from 'react';
import styled from 'styled-components';

const MenuDireita = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: whitesmoke;
`

const ItensCarrinho = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 5px;
`

const BotaoRemover = styled.button`
`

const ValorTotal = styled.div`
  width: 90%;
  margin: 20px 0 0 5px;
`

export class Carrinho extends Component {
  render() {
    let soma = 0
    return (
      <MenuDireita>
        <h3>Carrinho</h3>
        {this.props.carrinho.map(camisa => {
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
