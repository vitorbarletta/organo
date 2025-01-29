import React, { useState } from 'react'
import './TextField.css'

export default function TextField(props) {
  
  const [value, setValue] = useState('')

  const onDigit = (e) => {
    props.onAlterado(e.target.value)
  }
  
  return (
    <div className='text-field'>
        <label>{props.label}</label>
        <input value={props.value} onChange={onDigit} required={props.required} placeholder={props.placeholder} type="text" />
    </div>
  )
}
