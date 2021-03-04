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
      <div className={styles.left}>
        <CardContent>
          <h3>
            <span className={styles.span}>クエスト名:</span>
            {title}
          </h3>
        </CardContent>
        {id}:{contact}
        <Typography className={styles.bord_time}>投稿日:{time}</Typography>
      </div>
      <div className={styles.right}>
        <p>aaa</p>
      </div>
    </Card>
  )
}
