import React from 'react';

class Botao extends React.Component {
  render() {
    // const backgroundColor = 'red';
    const estaAtivo = true;
    const styles = {
      backgroundColor: estaAtivo ? "green" : "red"
    }
    return (
      <button style={styles}>
        Botão
      </button>
    )
  }
}

export default Botao;