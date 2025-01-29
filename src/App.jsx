import { useState } from 'react'
import Banner from './components/Banner/index.jsx'
import TextField from './components/TextField/index.jsx'
import Form from './components/Form/index.jsx'
import TimeField from './components/TimeField/index.jsx'
import Rodape from './components/Rodape/index.jsx'

function App() {

  const times = [
    {
      nome: 'Programação',
      corPrimaria: '#57c278', 
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Data Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'DevOps',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    }, 
    {
      nome: 'UX e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    }, 
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }, 
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    }, 
  ]

  const [colaboradores, setColaboradores] = useState([])
  
  const aoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <>
      <Banner/>
      <Form times={times.map(time => time.nome)} onColaboradorCadastrado={colaborador => aoColaboradorCadastrado(colaborador)}/>

      {times.map(time => {
        return (
          <TimeField 
          key={time.nome}
          title={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
          />
        )
      })}

      <Rodape/>
    </>
  )
}

export default App
