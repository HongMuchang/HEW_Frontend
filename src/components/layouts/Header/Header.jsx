import styles from './Header.module.scss'
import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

export default function Header() {
  return (
    <header className={styles.container}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon className={styles.menuber} />
        </IconButton>
        <p className={styles.header_title}>
          <span>G</span>uild Hack
        </p>
      </Toolbar>
    </header>
  )
}
