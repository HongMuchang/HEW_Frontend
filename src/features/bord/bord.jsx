import React, { useState } from 'react'
import styles from './IconsList/IconsList.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { createBord, getBordCounts, pushBord, resetBord } from './bordSlice'
import { FrontIcon, BackIcon, InfraIcon } from './../../components/parts/icons/index'
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  TextField,
  InputLabel,
  NativeSelect,
} from '@material-ui/core'

export default function Bord() {
  const dispatch = useDispatch()
  const bords = useSelector((state) => state.bord.create_bord) //bordsの配列
  const bordCount = useSelector((state) => state.bord.bordCount) //今まで追加された数

  const [title, setTitle] = useState('')
  const [event_day, setEvent_day] = useState('')
  const [day, setDay] = useState('')
  const [origanizer, setOriganizer] = useState('')
  const [commit, setCommit] = useState('')
  const [Beginer, setBeginer] = useState('')
  const [reword, setReword] = useState('')
  const [msg, setMsg] = useState('')
  const [position, setPosition] = useState('frontend')

  dispatch(
    createBord({
      id: bordCount,
      title: title,
      event_day: event_day,
      day: day,
      origanizer: origanizer,
      commit: commit,
      Beginer: Beginer,
      reword: reword,
      msg: msg,
      position: position,
    })
  )

  const postQuest = () => {
    dispatch(getBordCounts(1))
    dispatch(pushBord(bords))
    dispatch(resetBord())
  }

  return (
    <div>
      <TextField
        id="date"
        label="開催日"
        type="date"
        defaultValue={'2017-05-24'}
        onChange={(e) => setEvent_day(e.target.value)}
      />
      {/*  */}
      <FormControl>
        <InputLabel htmlFor="demo-customized-select-native">Age</InputLabel>
        <NativeSelect id="demo-customized-select-native" value={day} onChange={(e) => setDay(e.target.value)}>
          <option aria-label="None" value="" />
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={999}>それ以上</option>
        </NativeSelect>
      </FormControl>
      {/* ------Commit------- */}
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="position">
          <div className={styles.icons}>
            <FormControlLabel
              control={<Radio />}
              label="可"
              value="OK"
              onChange={(e) => setCommit(e.target.value)}
              checked={commit === 'OK'}
            />
          </div>
          <div className={styles.icons}>
            <FormControlLabel
              control={<Radio />}
              label="不"
              value="NG"
              onChange={(e) => setCommit(e.target.value)}
              checked={commit === 'NG'}
            />
          </div>
          <div className={styles.icons}>
            <FormControlLabel
              control={<Radio />}
              label="未"
              value="null"
              onChange={(e) => setCommit(e.target.value)}
              checked={commit === 'null'}
            />
          </div>
        </RadioGroup>
      </FormControl>
      {/* ------Commit------- */}
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="position">
          <div className={styles.icons}>
            <FormControlLabel
              control={<Radio />}
              label="歓"
              value="OK"
              onChange={(e) => setReword(e.target.value)}
              checked={reword === 'OK'}
            />
          </div>
          <div className={styles.icons}>
            <FormControlLabel
              control={<Radio />}
              label="不"
              value="NG"
              onChange={(e) => setReword(e.target.value)}
              checked={reword === 'NG'}
            />
          </div>
          <div className={styles.icons}>
            <FormControlLabel
              control={<Radio />}
              label="どちらでも良い"
              value="null"
              onChange={(e) => setReword(e.target.value)}
              checked={reword === 'null'}
            />
          </div>
        </RadioGroup>
      </FormControl>
      {/* ------Beginer------- */}
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="position">
          <div className={styles.icons}>
            <FormControlLabel
              control={<Radio />}
              label="有"
              value="OK"
              onChange={(e) => setBeginer(e.target.value)}
              checked={Beginer === 'OK'}
            />
          </div>
          <div className={styles.icons}>
            <FormControlLabel
              control={<Radio />}
              label="無"
              value="NG"
              onChange={(e) => setBeginer(e.target.value)}
              checked={Beginer === 'NG'}
            />
          </div>
          <div className={styles.icons}>
            <FormControlLabel
              control={<Radio />}
              label="未"
              value="null"
              onChange={(e) => setBeginer(e.target.value)}
              checked={Beginer === 'null'}
            />
          </div>
        </RadioGroup>
      </FormControl>
      {/* ------Position------- */}
      <FormControl component="fieldset">
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
      タイトル
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        className={styles.white}
        onChange={(e) => setTitle(e.target.value)}
      />
      主催者
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        className={styles.white}
        onChange={(e) => setOriganizer(e.target.value)}
      />
      メッセージ
      <TextField
        id="outlined-basic"
        variant="outlined"
        size="small"
        className={styles.white}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button onClick={() => postQuest()}>投稿</button>
    </div>
  )
}
