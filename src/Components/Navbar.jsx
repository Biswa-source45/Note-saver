import React from 'react'
import { NavLink } from 'react-router-dom'
import "../App.css"

const Navbar = () => {
  return (
    <div className=' flex flex-row gap-4 place-content-evenly  p-3'>
      
      <NavLink
      className=" text-xl duration-250"
      to="/"
      >
        Home
      </NavLink>

      <NavLink
      className=" text-xl duration-250"
      to="/pastes"
      >
        Pastes
      </NavLink>

    </div>
  )
}

export default Navbar
