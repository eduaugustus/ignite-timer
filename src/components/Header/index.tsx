import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { HeaderConatiner } from './styles'
import logoIgnite from '../../assets/logo-ignite-timer.svg'

export function Header() {
  return (
    <HeaderConatiner>
      <img src={logoIgnite} alt="" />
      <nav>
        <NavLink to="" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderConatiner>
  )
}
