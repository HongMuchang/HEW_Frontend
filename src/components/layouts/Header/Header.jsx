import styles from './Header.module.scss'
import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { auth } from '../../../utils/firebase'

export default function Header() {
  const [open, setOpen] = useState(false)
  const change = () => {
    setOpen(!open)
  }

  const id = auth.currentUser
  return (
    <header className={styles.container}>
      <Toolbar className={styles.contnet}>
        <div className={styles.left}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon className={styles.menuber} onClick={() => change()} />
          </IconButton>
          <p className={styles.name}>{id != null ? id.displayName : '名無し'} 様</p>
        </div>
        <div className={styles.right}>
          <p className={styles.header_title}>
            <span>G</span>uild Hack
          </p>
        </div>
      </Toolbar>
    </header>
  )
}
