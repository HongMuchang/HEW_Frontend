import { Layout } from '../../components/layouts/Layout/Layout'
import { getAllPostIds, getPostData } from '../../../lib/post'
import Title from '../../components/parts/Title'
import styles from './quest_bord_id.module.scss'
import Link from 'next/link'
import Entry from './[id]/entry'

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>
  }
  return (
    <Layout title="クエストボード画面">
      <div className={styles.bords}>
        <div className={styles.bord}>
          <div className={styles.bord_left}>
            <div className={styles.content}>
              <Title name={'クエスト名'} />
              <p>{post.title}</p>
            </div>
            <div className={styles.content}>
              <Title name={'開催日'} />
              <p>
                {post.eventDay}　~　{post.day}日間
              </p>
            </div>
            <div className={styles.content}>
              <Title name={'主催者'} />
              <p>{post.organizer}</p>
            </div>
            <div className={styles.content}>
              <Title name={'コミット時間'} />
              <p>{post.commit}時間</p>
            </div>
            <div className={styles.content}>
              <Title name={'初心者歓迎'} />
              <p>{post.beginner}</p>
            </div>
            <div className={styles.content}>
              <Title name={'報酬'} />
              <p>{post.reword}</p>
            </div>
          </div>
          {/* right */}
          <div className={styles.bord_right}>
            <div className={styles.content}>
              <Title name={'リーダーからの一言'} val={post.title} />
              <p>{post.message}</p>
            </div>
            <div className={styles.content}>
              <Title name={'メンバー'} />
              <table border="2">
                <tr>
                  <td>
                    <img src={'../bg_infra.png'} />
                  </td>
                  <td>
                    <img src={'../bg_frontend.png'} />
                  </td>
                  <td>
                    <img src={'../bg_backend.png'} />
                  </td>
                  <td>
                    <img src={'../bg_backend.png'} />
                  </td>
                  <td>
                    <img src={'../bg_backend.png'} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img src={'../bg_frontend.png'} />
                  </td>
                  <td>
                    <img src={'../bg_frontend.png'} />
                  </td>
                  <td>
                    <img src={'../bg_backend.png'} />
                  </td>
                  <td>
                    <img src={'../bg_backend.png'} />
                  </td>
                  <td>
                    <img src={'../bg_infra.png'} />
                  </td>
                </tr>
              </table>
              <Link href={`/quest_bord/${post.id}/entry`} post={post}>
                <div>
                  <a>参加する</a>
                </div>
              </Link>
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
