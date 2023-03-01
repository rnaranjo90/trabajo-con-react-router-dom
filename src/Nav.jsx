import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <nav>
        <NavLink to="/" className={({isActive}) => isActive ? "pinchado": null}>Home</NavLink>
        <NavLink to="/reyes/atanagildo" className={({isActive}) => isActive ? "pinchado": null}>Atanagildo</NavLink>
        <NavLink to="/reyes/ataulfo" className={({isActive}) => isActive ? "pinchado": null}>Ataulfo</NavLink>
        <NavLink to="/reyes/ervigio" className={({isActive}) => isActive ? "pinchado": null}>Ervigio</NavLink>
        <NavLink to="/reyes/leovigildo" className={({isActive}) => isActive ? "pinchado": null}>Leovigildo</NavLink>
        <NavLink to="/reyes/recesvinto" className={({isActive}) => isActive ? "pinchado": null}>Recesvinto</NavLink>
        <NavLink to="/reyes/sisebuto" className={({isActive}) => isActive ? "pinchado": null}>Sisebuto</NavLink>
      
    </nav>
  )
}

export default Nav
