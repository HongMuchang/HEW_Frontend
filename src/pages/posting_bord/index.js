import { Layout } from '../../components/layouts/Layout/Layout'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import { green } from '@material-ui/core/colors'
import styles from '../../components/cards/PostingCard.module.scss'
import PostingCard from '../../components/cards/PostingCard'
export default function posting_bord() {
  const user_masterid = useSelector((state) => state.user) //今まで追加された数
  const uid = user_masterid.user.uid // uid
  const [date, setDate] = useState([])

  console.log(uid)
  console.log(date)
  useEffect(() => {
    axios
      .get('http://localhost:60001/users/in-posts', { headers: { uid: uid } })
      .then((response) => setDate(response.data))
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return date.length == 0 ? (
    <Layout title="クエスト募集画面">
      <p>現在存在しません</p>
    </Layout>
  ) : (
    <Layout title="クエスト募集画面">
      <div className={styles.bords}>
        <ul>
          {date.map((d, index) => (
            <li key={index}>
              <PostingCard
                title={d.title}
                id={d.id}
                day={d.day}
                totalMember={d.totalMember}
                position={d.position}
                eventDay={d.eventDay}
                update={d.updated}
              />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
