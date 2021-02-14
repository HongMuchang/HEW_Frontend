import PostQuestText from '../parts/PostQuestText'
import styles from './PostQuestCard.module.scss'

export default function PostQuestCard() {
  return (
    <div className={styles.bords}>
      <div>
        <PostQuestText name={'クエスト名'} />
      </div>
    </div>
  )
}
