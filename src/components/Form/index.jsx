import React, { useState } from 'react'
import './Form.css'
import TextField from '../TextField'
import Select from '../Select'
import Button from '../Button'

export default function Form(props) {

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState(props.times[0].nome)

  const onSave = (e) => {
    e.preventDefault()
    props.onColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  return (
    <section className="form">
        <form onSubmit={onSave}>
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <TextField
            value={nome}
            onAlterado={value => setNome(value)}
            required={true} 
            label="Nome" 
            placeholder="Digite seu nome"/>

            <TextField
            value={cargo}
            onAlterado={value => setCargo(value)}
            required={true} 
            label="Cargo" 
            placeholder="Digite seu cargo"/>

            <TextField 
            value={imagem}
            onAlterado={value => setImagem(value)}
            required={true} 
            label="Imagem" 
            placeholder="Informe o endereço da imagem" />
            
            <Select
            value={time}
            onAlterado={value => setTime(value)}
            required={true} 
            label="Times" 
            itens={props.times}/>
            
            <Button>
              Criar Card
            </Button>
        </form>
        
    </section>
  )
}
