import React, { useState } from 'react';
import Botao from '../components/Botao'
import { Cronometro } from '../components/Cronometro';
import Formulario from '../components/Formulario';
import Lista from '../components/Lista';
import { ITarefa } from '../types/tarefa';
import style from './App.module.scss'
function App() {
  const [tarefas,setTarefas] = useState<ITarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState <ITarefa>();

  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
  }
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Cronometro />
      <Lista 
         tarefas={tarefas} 
         selecionaTarefa={selecionaTarefa}
      />
      
    </div>
  );
}

export default App;
