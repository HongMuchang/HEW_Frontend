import React from 'react'
import { auth } from '../../utils/firebase'
import styles from './LogoutBtn.module.scss'

export default function LogoutBtn() {
  return (
    <div>
      <button className={styles.logoutBtn} onClick={() => auth.signOut()}>
        ログアウト
      </button>
    </div>
  )
}
