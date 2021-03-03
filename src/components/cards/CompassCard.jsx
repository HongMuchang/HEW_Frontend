import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import styles from './CompassCard.module.scss'
import Button from '@material-ui/core/Button'

export default function QuestCard({ title, start, url }) {
  return (
    <Card className={styles.bord}>
      <div className={styles.bord_content}>
        <div className={styles.img}>
          <img src={'./connpass2.png'} width={250} height={100} />
        </div>
        <div className={styles.right}>
          <h3 className={styles.title}>{title}</h3>
          <div className={styles.links}>
            <Typography className={styles.bord_time}>開始日: {start}</Typography>
            <a target="_blank" href={url} className={styles.link}>
              リンク
            </a>
          </div>
        </div>
      </div>
    </Card>
  )
}
