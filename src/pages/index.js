import { useEffect, useState } from 'react'
import { Layout } from '../components/layouts/Layout/Layout'
import { LogoutBtn } from '../components/auth/index'
import { useSelector, useDispatch } from 'react-redux'
import { selectUser, login, logout } from '../features/user/userSlice'
import { auth } from '../utils/firebase'
import axios from 'axios'
import Login from './login'

export default function Home() {
  const user = useSelector(selectUser)
  const user_uid = user.payload.user.user.uid
  const dispatch = useDispatch()
  const [uid, setUid] = useState('')

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
        setUid(authUser.uid)
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
        console.log(uid)
        // axios
        //   .put('http://localhost:60001/user/login-switching', {
        //     uid: 'gCv0JDKI83XbyYIrOVl5JO2oC733',
        //   })
        //   .then(function (response) {
        //     console.log(response)
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })
      }
    })
    return () => {
      unSub() //クリーンナップ関数
    }
  }, [])

  const id = auth.currentUser
  console.log(id)
  return (
    <div>
      {id == null ? (
        <Login />
      ) : (
        <Layout title="Guild Hack">
          <LogoutBtn />
          <p>{id.displayName}</p>
        </Layout>
      )}
    </div>
  )
}
