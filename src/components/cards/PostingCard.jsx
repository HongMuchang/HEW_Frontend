import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import styles from './PostingCard.module.scss'

export default function PostingCard({ title, id, day, totalMember, position, eventDay, update }) {
  return (
    <Card className={styles.bord}>
      <div className={styles.bord_content}>
        <div className={styles.left}>
          <div className={styles.flex}>
            <img src={'../quest_icon.png'} width={30} />
            <p className={styles.id}>NO {id}</p>
          </div>
        </div>
        <div className={styles.right}>
          <Typography className={styles.bord_time}>更新日:{update}</Typography>
        </div>
      </div>
      <CardContent className={styles.content}>
        <h3 className={styles.quest}>
          クエスト名:
          <span className={styles.title}>{title}</span>
        </h3>
        <div className={styles.flex_content}>
          <div className={styles.flex_bord}>
            <p className={styles.padding}>開始日: {eventDay}日</p>
            <p className={styles.padding}>開発期間: {day}日</p>
          </div>
          <div className={styles.flex_bord}>
            <p className={styles.padding2}>募集人数: {totalMember}人</p>
            <div className={styles.position}>
              <p>自分の役割:</p>
              {position == 'frontend' ? (
                <img src={'../bg_frontend.png'} className={styles.position_img} />
              ) : '' || position == 'backend' ? (
                <img src={'../bg_backend.png'} className={styles.position_img} />
              ) : '' || position == 'infra' ? (
                <img src={'../bg_infra.png'} className={styles.position_img} />
              ) : '' || position == 'no' ? (
                <img src={'../bg_no.png'} className={styles.position_img} />
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
