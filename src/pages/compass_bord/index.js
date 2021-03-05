import { Layout } from '../../components/layouts/Layout/Layout'
import { getAllCompassData } from '../../../lib/post'
import styles from './index.module.scss'
import CompassCard from '../../components/cards/CompassCard'

export default function compass_bord({ posts }) {
  // const var user = firebase.auth().currentUser;
  return (
    <Layout title="クエスト募集画面">
      <div className={styles.bords}>
        <ul>
          {posts.map((post, index) => (
            <li key={index} className={styles.a}>
              <CompassCard title={post.title} start={post.started_at} url={post.event_url} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}
export async function getServerSideProps() {
  const posts = await getAllCompassData()
  return {
    props: { posts },
  }
}
