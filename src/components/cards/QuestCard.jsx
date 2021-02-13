import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import styles from './QuestCard.module.scss'

export default function QuestCard({ title, contact, time }) {
  return (
    <Card className={styles.bord}>
      <CardContent>
        <h3>クエスト名:{title}</h3>
      </CardContent>
      {contact}
      <div className={styles.flex}>
        <Typography className={styles.bord_time}>投稿日:{time}</Typography>
      </div>
    </Card>
  )
}
