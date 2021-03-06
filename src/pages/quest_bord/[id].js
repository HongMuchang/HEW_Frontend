import { useEffect, useState } from 'react'
import { Layout } from '../../components/layouts/Layout/Layout'
import { getAllPostIds, getPostData } from '../../../lib/post'
import Title from '../../components/parts/Title'
import styles from './quest_bord_id.module.scss'
import Link from 'next/link'

export default function Post({ post }) {
  const [positionImg, setPositionImg] = useState(true)

  const ary = []

  for (let i = 0; i < post.totalMember; i++) {
    if (post.members[i] == undefined) {
      ary.push('no')
    } else {
      ary.push(post.members[i].position)
    }
  }

  console.log(ary)

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
              {post.beginner == 'ok' ? (
                <p>歓迎</p>
              ) : '' || post.beginner == 'ng' ? (
                <p>不歓迎</p>
              ) : '' || post.beginner == 'either' ? (
                <p>どちらでも良い</p>
              ) : (
                ''
              )}
              <p>{post.beginner}</p>
            </div>
            <div className={styles.content}>
              <Title name={'報酬'} />
              {post.reword == 'ok' ? (
                <p>有り</p>
              ) : '' || post.reword == 'ng' ? (
                <p>無し</p>
              ) : '' || post.reword == 'either' ? (
                <p>未定</p>
              ) : (
                ''
              )}
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
              <ul>
                {ary.map((position) =>
                  position == 'frontend' ? (
                    <img src={'../bg_frontend.png'} className={styles.position_img} />
                  ) : '' || position == 'backend' ? (
                    <img src={'../bg_backend.png'} className={styles.position_img} />
                  ) : '' || position == 'infra' ? (
                    <img src={'../bg_infra.png'} className={styles.position_img} />
                  ) : '' || position == 'no' ? (
                    <img src={'../bg_no.png'} className={styles.position_img} />
                  ) : (
                    ''
                  )
                )}
              </ul>
              {ary.pop() == 'no' ? (
                <Link href={`/quest_bord/${post.id}/entry`} post={post}>
                  <div className={styles.btn}>
                    <a>参加申請</a>
                  </div>
                </Link>
              ) : (
                <div>
                  <img src={'../endbtn_icon.png'} width={150} className={styles.endbtn} alt="" />
                </div>
              )}
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
