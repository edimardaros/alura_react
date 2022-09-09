import React from "react";

function List() {
  const tarefas = [{
    tarefa: 'React',
    tempo: '02:00:00'
  }, {
    tarefa: 'Javascript',
    tempo: '01:00:00'
  }]
  
  return (
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
        <li>
          <h3>
            React
          </h3>
          <span>
            02:00:00            
          </span>
        </li>
        <li>
          <h3>
            Javascript
          </h3>
          <span>
            01:00:00
          </span>
        </li>
      </ul>
    </aside>
  )
}

export default List;