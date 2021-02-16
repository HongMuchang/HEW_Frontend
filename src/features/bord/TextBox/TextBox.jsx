import React from 'react'
import TextField from '@material-ui/core/TextField'
import styles from './TextBox.module.scss'

export default function TextBox({ name }) {
  return (
    <form noValidate autoComplete="off">
      <p className={styles.text}>{name}</p>
      <TextField id="outlined-basic" variant="outlined" size="small" className={styles.white} />
    </form>
  )
}
