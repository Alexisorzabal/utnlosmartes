import React from 'react'
import { Link } from 'react-router-dom';
const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul>
          <li><link to="/">Home</link></li>
          <li><a href="nosotros.html">Nosotros</a></li>
          <li><a href="novedades.html">Novedades</a></li>
          <li><a href="pedidosYa.html">Pedidos Ya</a></li>
        </ul>
      </div>
    </nav>
  )
}
export default Nav;