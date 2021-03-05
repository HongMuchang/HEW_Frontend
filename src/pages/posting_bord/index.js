import { Layout } from '../../components/layouts/Layout/Layout'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'

export default function posting_bord() {
  const user_masterid = useSelector((state) => state.user) //今まで追加された数
  const uid = user_masterid.user.uid // uid
  const [date, setDate] = useState()

  console.log(uid)

  useEffect(() => {
    axios
      .get('http://localhost:60001/users/in-posts', { headers: { uid: uid } })
      .then((response) => setDate(response.data))
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  return (
    <Layout title="クエスト募集画面">
      <p>posting</p>
    </Layout>
  )
}
