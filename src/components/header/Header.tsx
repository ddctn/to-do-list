import { NavLink } from 'react-router-dom'
import classes from './header.module.scss'


export const Header = () => {
  const getActiveClass = ({isActive} : {isActive: boolean}): string => {
    return isActive ? `${classes.active} ${classes.link}` : classes.link
  }
  return (
     <header className={classes.header}>
        <div className={classes.container}>
          <NavLink to="/" className={getActiveClass}>Home</NavLink>
          <NavLink to="todo" className={getActiveClass}>Todo</NavLink>
          {/* интерполяция className={`${classes.link} ${classes.active}`} для указания множества классов */}
        </div>
    </header>
  )
}