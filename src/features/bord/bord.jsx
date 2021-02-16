import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createdbord } from './bordSlice'
import styles from './TextBox/TextBox.module.scss'
import { Radio, RadioGroup, FormControl, FormControlLabel, TextField } from '@material-ui/core'
import { FrontIcon, BackIcon, InfraIcon } from './../../components/parts/icons/index'
import CheckBox from '../../components/parts/CheckBox'

export default function Bord() {
  const bords = useSelector(createdbord)
  const dispatch = useDispatch()

  const [title, setTitle] = useState('') //タイトル
  const [position, setPosition] = useState('frontend') //自分の役職
  const [check, setCheck] = useState('') //コミット
  const [on, setOn] = useState('') //origanizer

  //クリックされた役職の値取得
  const handleChange = (e) => setPosition(e.target.value)

  const up = () => {
    dispatch(
      createdbord({
        id: 4,
        title: title,
        commit: check,
        origanizer: on,
      })
    )
  }

  return (
    <div>
      <CheckBox setCheck={setCheck} title={'フルコミット'} one={'可'} two={'不'} three={'未'} name={'commit'} />
      {/* <CheckBox open={setOn} title={'報酬'} one={'有'} two={'無'} three={'未'} name={'origanizer'} /> */}

      {/* <CheckBox title={'報酬'} one={'有'} two={'無'} three={'未'} col={''} /> */}

      {/* <CheckBox title={'初心者歓迎'} one={'歓'} two={'不'} three={'どちらでも良い'} />
      <CheckBox title={'報酬'} one={'有'} two={'無'} three={'未'} /> */}

      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="position">
          <div className={styles.icons}>
            <FrontIcon />
            <FormControlLabel
              control={<Radio />}
              label="フロントエンド"
              value="frontend"
              className={styles.icon}
              onChange={handleChange}
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
              onChange={handleChange}
              checked={position === 'backend'}
            />
          </div>
          <div className={styles.icons}>
            <InfraIcon className={styles.icon} />
            <FormControlLabel
              value="infra"
              control={<Radio />}
              label="インフラ"
              value="infra"
              className={styles.icon}
              onChange={handleChange}
              checked={position === 'infra'}
            />
          </div>
        </RadioGroup>
      </FormControl>

      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        className={styles.white}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => up()}>投稿</button>
    </div>
  )
}
