import styles from './Header.module.scss'
import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import LogoutBtn from '../../auth/LogoutBtn'
import { auth } from '../../../utils/firebase'

export default function Header() {
  const [open, setOpen] = useState(false)

  const change = () => {
    setOpen(!open)
  }

  const id = auth.currentUser
  return (
    <header className={styles.container}>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon className={styles.menuber} onClick={() => change()} />
        </IconButton>
        <p className={styles.header_title}>
          <span>G</span>uild Hack
        </p>
        <div className={styles.flex}>
          <p className={styles.name}>
            {/* { id.displayName }様 */}
            nanasi
          </p>
          <LogoutBtn />
        </div>
      </Toolbar>
    </header>
  )
}
