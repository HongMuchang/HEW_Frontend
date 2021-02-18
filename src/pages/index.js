import { useEffect } from 'react'
import { Layout } from '../components/layouts/Layout/Layout'
import { LogoutBtn } from '../components/auth/index'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from '../features/user/userSlice'
import { auth } from '../utils/firebase'
import Login from './login'

export default function Home() {
  const user = useSelector(selectUser)
  const user_uid = user.payload.user.user.uid
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
        console.log('ログイン実行しました')
      } else {
        dispatch(logout())
        console.log('ログインアウトしました')
      }
    })
    return () => {
      unSub() //クリーンナップ関数
    }
  }, [dispatch])

  return (
    <div>
      {user_uid ? (
        <Layout title="Guild Hack">
          <LogoutBtn />
        </Layout>
      ) : (
        <Login />
      )}
    </div>
  )
}
