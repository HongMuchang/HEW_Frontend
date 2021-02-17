import React from 'react'
import styles from './Title.module.scss'

export default function Title({ name }) {
  return <p className={styles.text}>{name}</p>
}
