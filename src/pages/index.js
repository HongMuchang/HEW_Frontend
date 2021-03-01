import { useEffect, useState } from 'react'
import { Layout } from '../components/layouts/Layout/Layout'
import { LogoutBtn } from '../components/auth/index'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from '../features/user/userSlice'
import { auth } from '../utils/firebase'
import axios from 'axios'
import Login from './login'
import styles from './index.module.scss'

export default function Home() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    //authUserは現在ログインしてる人の情報
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoURL,
            disPlayName: authUser.displayName,
          })
        )
        axios
          .post('http://localhost:60001/user/create', {
            uid: authUser.uid,
            name: authUser.displayName,
            isLogin: true,
          })
          .then(function (response) {
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
        console.log('ログイン実行しました')
      } else {
        dispatch(logout())
        console.log('ログアウト')
      }
    })
    return () => {
      unSub() //クリーンナップ関数
    }
  }, [])

  const id = auth.currentUser

  return (
    <div>
      {id == null ? (
        <Login />
      ) : (
        <Layout title="Guild Hack">
          <img src={'./top_header4.png'} width={800} className={styles.header_logo} />
        </Layout>
      )}
    </div>
  )
}
