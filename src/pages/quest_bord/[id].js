import { Layout } from '../../components/layouts/Layout/Layout'
import { getAllPostIds, getPostData } from '../../../lib/post'
import Title from '../../components/parts/Title'
import styles from './quest_bord_id.module.scss'

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>
  }
  console.log(post)
  return (
    <Layout>
      <div className={styles.bords}>
        <div className={styles.bord}>
          <div className={styles.bord_left}>
            <div className={styles.content}>
              <Title name={'クエスト名'} />
              {/* <p>{post.title}</p> */}
            </div>
            <div className={styles.content}>
              <Title name={'開催日'} />
              {/* <p>{post.startDate}:3日間</p> */}
            </div>
            <div className={styles.content}>
              <Title name={'主催者'} />
              <p>TechBowl</p>
            </div>
            <div className={styles.content}>
              <Title name={'コミット時間'} />
              {/* <p>{post.commitState}時間</p> */}
            </div>
            <div className={styles.content}>
              <Title name={'初心者歓迎'} />
              <p>歓迎</p>
            </div>
            <div className={styles.content}>
              <Title name={'報酬'} />
              <p>あり</p>
            </div>
          </div>
          {/* right */}
          <div className={styles.bord_right}>
            <div className={styles.content}>
              <Title name={'リーダーからの一言'} val={post.title} />
              <p>全力で頑張りましょう</p>
            </div>
            <div className={styles.content}>
              <Title name={'メンバー'} val={post.title} />
              {/* <p>{post.totalMember}</p> */}
              <p>全力で頑張りましょう</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = await getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}
export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id)
  return {
    props: {
      post,
    },
  }
}
