import classes from './header.module.scss'

export const Header = () => {
  return (
     <header className={classes.header}>
        <div className={classes.container}>
          <a href="/" className={classes.link}>ToDo</a>
          {/* интерполяция className={`${classes.link} ${classes.active}`} для указания множества классов */}
        </div>
    </header>
  )
}