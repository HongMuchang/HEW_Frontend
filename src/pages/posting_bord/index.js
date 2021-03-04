import { Layout } from '../../components/layouts/Layout/Layout'
import axios from 'axios'
import { useSelector } from 'react-redux'

export default function posting_bord() {
  const user_masterid = useSelector((state) => state.user) //今まで追加された数

  console.log(user_masterid)

  const go = () => {
    axios
      .get('http://localhost:60001/users/in-posts', { headers: { uid: 'uejjoencoajeicms' } })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  return (
    <Layout title="クエスト募集画面">
      <p>posting</p>
      <button onClick={() => go()}>ddd</button>
    </Layout>
  )
}
