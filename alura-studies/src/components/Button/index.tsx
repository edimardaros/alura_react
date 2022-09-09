import React from 'react';

class Botao extends React.Component {
  render() {
    const backgroundColor = 'red';
    const styles = {
      backgroundColor
    }
    return (
      <button style={styles}>
        Botão
      </button>
    )
  }
}

export default Botao;