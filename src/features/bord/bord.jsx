import React, { useState } from 'react'
import styles from './Bord.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { createBord, getBordCounts, pushBord, resetBord } from './bordSlice'
import { FrontIcon, BackIcon, InfraIcon } from './../../components/parts/icons/index'
import { Title, Modal } from '../../components/parts/index'
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  TextField,
  InputLabel,
  NativeSelect,
} from '@material-ui/core'
import { Alert, AlertTitle } from '@material-ui/lab'

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
    alert('追加完了しました。')
  }

  return (
    <div className={styles.bords}>
      <div className={styles.bord}>
        <div className={styles.bord_left}>
          <div className={styles.content}>
            <Title name={'クエスト'} />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              className={styles.white}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.content}>
            <TextField
              id="date"
              label="開催日"
              type="date"
              defaultValue={'2021-01-01'}
              onChange={(e) => setEvent_day(e.target.value)}
              className={styles.event_day}
            />
            <FormControl>
              <InputLabel htmlFor="demo-customized-select-native">開催期間</InputLabel>
              <NativeSelect id="demo-customized-select-native" value={day} onChange={(e) => setDay(e.target.value)}>
                <option aria-label="None" value="" />
                <option value={1}>1日</option>
                <option value={2}>2日</option>
                <option value={3}>3日</option>
                <option value={4}>4日</option>
                <option value={5}>5日</option>
                <option value={6}>6日</option>
                <option value={7}>7日</option>
                <option value={8}>8日</option>
                <option value={9}>9日</option>
                <option value={10}>10日</option>
                <option value={999}>それ以上</option>
              </NativeSelect>
            </FormControl>
          </div>
          <div className={styles.content}>
            <Title name={'主催者'} />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              className={styles.white}
              onChange={(e) => setOriganizer(e.target.value)}
            />
          </div>
          <div>
            {/* ------Commit------- */}
            <div>
              <FormControl component="fieldset" className={styles.content_radio}>
                <Title name={'フルコミット'} />
                <RadioGroup aria-label="gender" name="position" className={styles.radio}>
                  <FormControlLabel
                    control={<Radio />}
                    label="可"
                    value="OK"
                    onChange={(e) => setCommit(e.target.value)}
                    checked={commit === 'OK'}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="不"
                    value="NG"
                    onChange={(e) => setCommit(e.target.value)}
                    checked={commit === 'NG'}
                  />

                  <FormControlLabel
                    control={<Radio />}
                    label="未"
                    value="null"
                    onChange={(e) => setCommit(e.target.value)}
                    checked={commit === 'null'}
                  />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          {/* ------Commit------- */}
          <div>
            <FormControl component="fieldset" className={styles.content_radio}>
              <Title name={'初心者歓迎'} />
              <RadioGroup aria-label="gender" name="position" className={styles.radio}>
                <FormControlLabel
                  control={<Radio />}
                  label="歓"
                  value="OK"
                  onChange={(e) => setReword(e.target.value)}
                  checked={reword === 'OK'}
                />

                <FormControlLabel
                  control={<Radio />}
                  label="不"
                  value="NG"
                  onChange={(e) => setReword(e.target.value)}
                  checked={reword === 'NG'}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="どちらでも良い"
                  value="null"
                  onChange={(e) => setReword(e.target.value)}
                  checked={reword === 'null'}
                />
              </RadioGroup>
            </FormControl>
          </div>
          {/* ------Beginer------- */}
          <div>
            <FormControl component="fieldset" className={styles.content_radio}>
              <Title name={'報酬'} />
              <RadioGroup aria-label="gender" name="position" className={styles.radio}>
                <FormControlLabel
                  control={<Radio />}
                  label="有"
                  value="OK"
                  onChange={(e) => setBeginer(e.target.value)}
                  checked={Beginer === 'OK'}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="無"
                  value="NG"
                  onChange={(e) => setBeginer(e.target.value)}
                  checked={Beginer === 'NG'}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="未"
                  value="null"
                  onChange={(e) => setBeginer(e.target.value)}
                  checked={Beginer === 'null'}
                />
              </RadioGroup>
            </FormControl>
          </div>
        </div>
        <div className={styles.bord_right}>
          <div className={styles.content}>
            <Title name={'リーダーから一言'} />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              className={styles.white}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          {/* ------Position------- */}
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
            投稿
          </button>
        </div>
      </div>
    </div>
  )
}
