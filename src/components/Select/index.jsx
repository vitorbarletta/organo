import React from 'react'
import './Select.css'

export default function Select(props) {

  const onEdit = (e) => {
    props.onAlterado(e.target.value)
  }
  return (
    <div className='select' >
        <label>{props.label}</label>
        <select onChange={onEdit} required={props.required} value={props.value}>
           {props.itens.map((item) => (
                 <option key={item}>{item}</option>
           ))}
        </select>
    </div>
  )
}
