import React from 'react'
import { auth } from '../../utils/firebase'

export default function LogoutBtn() {
  return (
    <div>
      <p>aaa</p>
      <button onClick={() => auth.signOut()}>ログアウト</button>
    </div>
  )
}
