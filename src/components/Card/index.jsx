import React from 'react'
import './Card.css'

export default function Card(props) {
  return (
    <div className='card'>
        <div className='cabecalho' style={{backgroundColor: props.corPrimaria}}>
            <img src={props.imagem} alt="Logo do Colaborador" />
        </div>
        
        <div className='rodape'>
            <h4>{props.nome}</h4>
            <h5>{props.cargo}</h5>
        </div>
    </div>
  )
}
