import React from 'react'
import TextField from '@material-ui/core/TextField'
import styles from './PostQuestText.module.scss'
import { data } from 'autoprefixer'

export default function PostQuestText({ name }) {
  return (
    <form noValidate autoComplete="off">
      <p className={styles.text}>{name}</p>
      <TextField id="outlined-basic" variant="outlined" size="small" className={styles.white} />
    </form>
  )
}
