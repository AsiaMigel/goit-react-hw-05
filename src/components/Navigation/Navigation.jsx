import clsx from 'clsx'
import css from "./Navigation.module.css";
import {NavLink} from "react-router-dom"

const getClassNames = ({ isActive }) => {
    return clsx(css.link, isActive&&css.isActive)
}

const NavHeader = () => {
  return (
      <nav className={css.navLink}>
          <NavLink className={getClassNames} to="/">Home</NavLink>
          <NavLink className={getClassNames} to="/movies">Movies</NavLink>
   </nav>
  )
}

export default NavHeader;