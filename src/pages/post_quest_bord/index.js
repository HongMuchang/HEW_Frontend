import { Layout } from '../../components/layouts/Layout/Layout'
import styles from './post_quest_bord.module.scss'
import PostQuestCard from '../../components/cards/PostQuestCard'

export default function post_quest_bord() {
  return (
    <Layout title="Guild Hack">
      <div className={styles.bords}>
        <h1>post_quest_board</h1>
        <div className={styles.bord}>
          <PostQuestCard />
        </div>
      </div>
    </Layout>
  )
}
