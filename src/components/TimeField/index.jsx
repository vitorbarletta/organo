import React from 'react'
import './TimeField.css'
import Card from '../Card'

export default function TimeField(props) {


  return (
    props.colaboradores.length > 0 && <section 
    className='timefield' 
    style={{backgroundColor: props.corSecundaria}}
    >
        <h3 style={{borderColor: props.corPrimaria}}>
            {props.title}
        </h3>

        <div className='colaboradores'>
          {props.colaboradores.map((colaborador) => {
            return(
              <Card corPrimaria={props.corPrimaria} key={colaborador.nome} nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem} time={colaborador.time} />
            )
          })}
        </div>


    </section>
  )

}
