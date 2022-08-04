import React, { Component } from 'react';
import { Header } from './components/header/Header';
import { Footer} from './components/footer/Footer';
import { Filtro } from './components/filtro/Filtro';
import { Carrinho } from './components/carrinho/Carrinho';
import styled from 'styled-components';
import { MenuCentral, Imagem, Botao, Card2, Titulo, Preco } from './components/lista/Styled';

import camisas1 from './components/img/1.jpg';
import camisas2 from './components/img/2.jpg';
import camisas3 from './components/img/3.jpg';
import camisas4 from './components/img/4.jpg';
import camisas5 from './components/img/5.jpg';
import camisas6 from './components/img/6.jpg';
import camisas7 from './components/img/7.jpg';
import camisas8 from './components/img/8.jpg';
import camisas9 from './components/img/9.jpg';
import camisas10 from './components/img/10.jpg';


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
  state = {
    camisas: [
      {
        id: 1,
        name: "Camisa 1",
        value: 39.99,
        imageUrl: camisas1,
      },
      {
        id: 2,
        name: "Camisa 2",
        value: 44.99,
        imageUrl: camisas2,
      },
      {
        id: 3,
        name: "Camisa 3",
        value: 49.99,
        imageUrl: camisas3,
      },
      {
        id: 4,
        name: "Camisa 4",
        value: 59.99,
        imageUrl: camisas4,
      },
      {
        id: 5,
        name: "Camisa 5",
        value: 69.99,
        imageUrl: camisas5,
      },
      {
        id: 6,
        name: "Camisa 6",
        value: 79.99,
        imageUrl: camisas6,
      },
      {
        id: 7,
        name: "Camisa 7",
        value: 89.99,
        imageUrl: camisas7,
      },
      {
        id: 8,
        name: "Camisa 8",
        value: 99.99,
        imageUrl: camisas8,
      },
      {
        id: 9,
        name: "Camisa 9",
        value: 109.99,
        imageUrl: camisas9,
      },
      {
        id: 10,
        name: "Camisa 10",
        value: 119.99,
        imageUrl: camisas10,
      },
    ],
    carrinho: [],
    minPrice: "",
    maxPrice: "",
    pesquisa: "",
    ordenacao: 1,
  }

  atualizaMinPreco = (event) => {
    this.setState({ minPrice: event.target.value })
  }

  atualizaMaxPreco = (event) => {
    this.setState({ maxPrice: event.target.value })
  }

  atualizaPesquisa = (event) => {
    this.setState({ pesquisa: event.target.value })
  }

  atualizaOrdenacao = (event) => {
    this.setState({ ordenacao: event.target.value })
  }

  removerItem = (event) => {
    let repetido = false;
    this.state.carrinho.forEach(camisa => {
      if (camisa.id === event.target.id && camisa.repeticao > 1) repetido = true
    })

    if (!repetido) {
      const novoCarrinho = this.state.carrinho.filter(camisa => {
        return camisa.id !== event.target.id
      })
      this.setState({ carrinho: novoCarrinho });
    } else {
      const novoCarrinho = this.state.carrinho.map(camisa => {
        if (camisa.id === event.target.id) {
          const auxiliar = camisa.repeticao - 1;
          const novoObjeto = {
            ...camisa,
            repeticao: auxiliar
          }
          return novoObjeto
        } else {
          return camisa
        }
      })
      this.setState({ carrinho: novoCarrinho });
    }
  }

  atualizaCarrinho = (event) => {
    let repetido = false;
    this.state.carrinho.forEach(camisa => {
      if (camisa.id === event.target.id) repetido = true
    })

    if (!repetido) {
      const novoObjeto = {
        id: event.target.id,
        name: event.target.name,
        value: event.target.value,
        repeticao: 1
      }

      const novoCarrinho = [...this.state.carrinho, novoObjeto]
      this.setState({ carrinho: novoCarrinho });
    } else {
      const novoCarrinho = this.state.carrinho.map(camisa => {
        if (camisa.id === event.target.id) {
          const auxiliar = camisa.repeticao + 1;
          const novoObjeto = {
            ...camisa,
            repeticao: auxiliar
          }
          return novoObjeto
        } else {
          return camisa
        }
      })
      this.setState({ carrinho: novoCarrinho });
    }
  }

  render() {
    return (
      <Principal>
        <Header />
        <Filtro
          atualizaMinPreco={this.atualizaMinPreco}
          minPrice={this.state.minPrice}
          atualizaMaxPreco={this.atualizaMaxPreco}
          maxPrice={this.state.maxPrice}
          atualizaPesquisa={this.atualizaPesquisa}
          pesquisa={this.state.pesquisa}
          atualizaOrdenacao={this.atualizaOrdenacao}
          ordenacao={this.state.ordenacao}
        />

        <MenuCentral>
          {this.state.camisas.filter(camisa => {
            // Filtragem valor mínimo
            return this.state.minPrice === "" || camisa.value >= this.state.minPrice
          }).filter(camisa => {
            // Filtragem valor máximo
            return this.state.maxPrice === "" || camisa.value <= this.state.maxPrice
          }).filter(camisa => {
            // Filtragem pelo nome
            return camisa.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
          }).sort((currentJob, nextJob) => {
            return this.state.ordenacao * (currentJob.value - nextJob.value)
          }).map(camisa => {
            return (
              <Card2>
                <Imagem src={camisa.imageUrl} />
                <Titulo>{camisa.name}</Titulo>
                <Preco><strong>{`R$ ${camisa.value}`}</strong></Preco>
                <Botao id={camisa.id} name={camisa.name} value={camisa.value} onClick={this.atualizaCarrinho}>Comprar</Botao>
              </Card2>
            )
          })
          }
        </MenuCentral>

        <Carrinho
          carrinho={this.state.carrinho}
          removerItem={this.removerItem}
        />

        <Footer />
      </Principal>
    );
  }
}
