import { Layout } from '../../components/layouts/Layout/Layout'
import QuestCard from '../../components/cards/QuestCard'
import styles from './quest_bord.module.scss'
import { getAllPostsData } from '../../../lib/post'
import Link from 'next/link'

export default function quest_bord({ posts }) {
  console.log(posts)
  return (
    <Layout title="Guild Hack">
      <div className={styles.bords}>
        <h1>quest_board</h1>
        <ul>
          {posts.map((post) => (
            <Link href={`/quest_bord/${post.id}`}>
              <li key={post}>
                <QuestCard title={post.title} contact={post.body} time={post.id} />
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
