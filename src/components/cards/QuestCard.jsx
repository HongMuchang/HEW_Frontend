import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styles from './QuestCard.module.scss'

export default function QuestCard({ title, contact, time, id }) {
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
          <Typography className={styles.bord_time}>投稿日:{time}</Typography>
        </div>
      </div>
      <CardContent className={styles.a}>
        <h3 className={styles.quest}>
          クエスト:
          <span className={styles.title}>{title}</span>
        </h3>
      </CardContent>
    </Card>
  )
}
