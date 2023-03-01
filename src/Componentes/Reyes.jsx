import React from 'react'
import atanagildo from '../img/atanagildo.png'
import { useParams } from 'react-router-dom'

function Reyes() {

  const {rey} = useParams();

  const reyMayuscula = rey.substring(0,1).toUpperCase() + rey.substring(1)
  return (
    <div>
      <img src={`http://www.html6.es/img/rey_${rey}.png`}/>
      <h2>{reyMayuscula}</h2>
    </div>
  )
}

export default Reyes
