import { Layout } from '../components/layouts/Layout/Layout'

import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from '../features/user/userSlice'
import { auth } from '../firebase'
import Auth from './Auth'

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
      } else {
        dispatch(logout())
      }
    })
    return () => {
      unSub() //クリーンナップ関数
    }
  }, [dispatch])

  return (
    <div>
      {user.uid ? (
        <>
          <Layout title="Guild Hack">
            <h1>Home</h1>
          </Layout>
        </>
      ) : (
        <Auth />
      )}
    </div>
  )
}
