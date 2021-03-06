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
          .post('http://localhost:60001/users', {
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
          <div className={styles.contents}>
            <div className={styles.bg_white}>
              <img src={'./top_header3.png'} width={800} height={400} className={styles.header_logo} />

              <div className={styles.title_content}>
                <h1 className={styles.title}>Guild Hackとは?</h1>
                <p>自分にあった</p>
                <p>Guild(ギルド)を募って</p>
                <p>ハッカソンに参加しよう</p>
              </div>

              <div className={styles.box}>
                <div className={styles.use_content}>
                  <div>
                    <h3 className={styles.sub_title}>使い方</h3>
                    <ul>
                      <li>①参加したいハッカソンを見つける</li>
                      <li>②募集をかける</li>
                      <li>③メンバーを募る</li>
                      <li>④Slackのワークスペースに移動</li>
                      <li>⑤開発スタート</li>
                    </ul>
                  </div>
                  <img src={'../modan2.png'} width={500} className={styles.sub_img} alt="" />
                </div>
              </div>
              <div className={styles.sard_content}>
                <h3 className={styles.sard_title}>お問い合わせ</h3>
                <p className={styles.sard_title_content}>
                  不具合・ご要望に関するお問い合わせは <br />
                  <a href="https://forms.gle/g7gM7cQFDCJxm3QA8" target="_blank">
                    こちらのフォーム
                  </a>{' '}
                  からご連絡を頂けると幸いです。
                </p>
              </div>
            </div>
          </div>
        </Layout>
      )}
    </div>
  )
}
