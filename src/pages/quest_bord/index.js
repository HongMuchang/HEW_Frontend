import { Layout } from '../../components/layouts/Layout/Layout'
import QuestCard from '../../components/cards/QuestCard'
import styles from './quest_bord.module.scss'
import { getAllPostsData } from '../../../lib/post'
import Link from 'next/link'
import Login from '../../pages/login'
import { auth } from '../../utils/firebase'

export default function quest_bord({ posts }) {
  // if (auth.currentUser == null) {
  //   return <Login />
  // }

  console.log(posts)
  return (
    <Layout title="クエスト一覧画面">
      <div className={styles.bords}>
        <h1>quest_board</h1>
        <ul>
          {posts.map((post) => (
            <Link href={`/quest_bord/${post.id}`}>
              <li key={post}>
                {post.id}
                <QuestCard title={post.title} contact={post.body} time={post.updated} />
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const posts = await getAllPostsData()
  return {
    props: { posts },
  }
}
