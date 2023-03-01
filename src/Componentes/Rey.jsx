import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 


function Rey() {
    const lista_reyes = ["atanagildo","ataulfo","ervigio","leovigildo","recesvinto","sisebuto"];

  return (
    <div className='reyes'>
        {
        lista_reyes.map(
            e => 
            <Link to= {`/reyes/${e}`} key={e}><img src={`http://www.html6.es/img/rey_${e}.png`}/></Link>            
        )
        }
      
    </div>
  )
}

export default Rey
