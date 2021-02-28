import { Layout } from '../../components/layouts/Layout/Layout'
import { Bord } from '../../features/bord/index'

export default function post_quest_bord() {
  // const var user = firebase.auth().currentUser;

  return (
    <Layout title="クエスト募集画面">
      <Bord />
    </Layout>
  )
}
