import React, { useState } from 'react'
import { Layout } from '../../../components/layouts/Layout/Layout'
import { getAllPostIds, getPostData } from '../../../../lib/post'
import styles from './entry.module.scss'
import { auth } from '../../../utils/firebase'
import Title from '../../../components/parts/Title'
import axios from 'axios'
import { FrontIcon, BackIcon, InfraIcon } from './../../../components/parts/icons'
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  TextField,
  InputLabel,
  NativeSelect,
} from '@material-ui/core'

export default function Entry({ post }) {
  const [position, setPosition] = useState('frontend')
  console.log(post.id)

  const id = auth.currentUser

  const postQuest = () => {
    // ------------axios使ってます。----------------
    axios
      .put(`http://localhost:60002/recruits/${post.id}/members`, {
        uid: id.uid,
        position: position,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    // ------------------------------------------
    alert('追加完了しました。')
  }

  return (
    <Layout title="クエスト参加画面">
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
              <div>
                <FormControl component="fieldset" className={styles.content}>
                  <Title name={'自分の役職'} />
                  <RadioGroup aria-label="gender" name="position">
                    <div className={styles.icons}>
                      <FrontIcon />
                      <FormControlLabel
                        control={<Radio />}
                        label="フロントエンド"
                        value="frontend"
                        className={styles.icon}
                        onChange={(e) => setPosition(e.target.value)}
                        checked={position === 'frontend'}
                      />
                    </div>
                    <div className={styles.icons}>
                      <BackIcon />
                      <FormControlLabel
                        control={<Radio />}
                        label="バックエンド"
                        value="backend"
                        className={styles.icon}
                        onChange={(e) => setPosition(e.target.value)}
                        checked={position === 'backend'}
                      />
                    </div>
                    <div className={styles.icons}>
                      <InfraIcon className={styles.icon} />
                      <FormControlLabel
                        value="infra"
                        control={<Radio />}
                        label="インフラ"
                        className={styles.icon}
                        onChange={(e) => setPosition(e.target.value)}
                        checked={position === 'infra'}
                      />
                    </div>
                  </RadioGroup>
                </FormControl>
              </div>
              <button onClick={() => postQuest()} className={styles.btn}>
                参加する
              </button>
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
