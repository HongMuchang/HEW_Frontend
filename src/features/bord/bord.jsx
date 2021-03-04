import React, { useState } from 'react'
import styles from './Bord.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { createBord, getBordCounts, pushBord, resetBord } from './bordSlice'
import { FrontIcon, BackIcon, InfraIcon } from './../../components/parts/icons/index'
import { Title, Modal } from '../../components/parts/index'
import axios from 'axios'
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
  const user_masterid = useSelector((state) => state.user) //今まで追加された数

  const [title, setTitle] = useState('')
  const [event_day, setEvent_day] = useState('2021-01-01')
  const [day, setDay] = useState('1')
  const [totalMember, setTotalMember] = useState('1')
  const [origanizer, setOriganizer] = useState('')
  const [commit, setCommit] = useState('1〜4')
  const [Beginer, setBeginer] = useState('either')
  const [reword, setReword] = useState('either')
  const [msg, setMsg] = useState('')
  const [slackUrl, setSlackUrl] = useState('')
  const [position, setPosition] = useState('frontend')

  dispatch(
    createBord({
      master_id: user_masterid.user.uid,
      title: title,
      totalMember: totalMember,
      event_day: event_day,
      day: day,
      origanizer: origanizer,
      commit: commit,
      Beginer: Beginer,
      reword: reword,
      msg: msg,
      position: position,
      slackUrl: slackUrl,
    })
  )

  const postQuest = () => {
    dispatch(getBordCounts(1))
    dispatch(pushBord(bords))
    // ------------axios使ってます。----------------
    axios
      .post('http://localhost:60002/recruits', {
        masterId: user_masterid.user.uid,
        title: title,
        eventDay: event_day,
        day: day,
        totalMember: totalMember,
        organizer: origanizer,
        commit: commit,
        Beginer: Beginer,
        reword: reword,
        message: msg,
        position: position,
        slackUrl: slackUrl,
      })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })
    // ------------------------------------------
    setTitle('')
    setOriganizer('')
    setEvent_day('2021-01-01')
    setDay('1')
    setTotalMember('1')
    setCommit('1〜4')
    setBeginer('either')
    setReword('either')
    setMsg('')
    setSlackUrl('')
    setPosition('frontend')

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
              value={title}
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
                <option value={99}>それ以上</option>
              </NativeSelect>
            </FormControl>
            <FormControl className={styles.member_border}>
              <InputLabel htmlFor="demo-customized-select-native" className={styles.member}>
                募集人数
              </InputLabel>
              <NativeSelect
                id="demo-customized-select-native"
                value={totalMember}
                onChange={(e) => setTotalMember(e.target.value)}
                className={styles.member_border}
              >
                <option aria-label="None" value="" />
                <option value={1}>1人</option>
                <option value={2}>2人</option>
                <option value={3}>3人</option>
                <option value={4}>4人</option>
                <option value={5}>5人</option>
                <option value={6}>6人</option>
                <option value={7}>7人</option>
                <option value={8}>8人</option>
                <option value={9}>9人</option>
                <option value={10}>10人</option>
              </NativeSelect>
            </FormControl>
          </div>
          <div className={styles.content}>
            <Title name={'主催者'} />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value={origanizer}
              className={styles.white}
              onChange={(e) => setOriganizer(e.target.value)}
            />
          </div>
          <div>
            {/* ------Commit------- */}
            <div>
              <FormControl component="fieldset" className={styles.content_radio}>
                <Title name={'1日のコミット時間'} />
                <RadioGroup aria-label="gender" name="position" className={styles.radio}>
                  <FormControlLabel
                    control={<Radio />}
                    label="1〜4"
                    value="1〜4"
                    onChange={(e) => setCommit(e.target.value)}
                    checked={commit === '1〜4'}
                  />
                  <FormControlLabel
                    control={<Radio />}
                    label="4〜8"
                    value="4〜8"
                    onChange={(e) => setCommit(e.target.value)}
                    checked={commit === '4〜8'}
                  />

                  <FormControlLabel
                    control={<Radio />}
                    label="max"
                    value="max"
                    onChange={(e) => setCommit(e.target.value)}
                    checked={commit === 'max'}
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
                  value="ok"
                  onChange={(e) => setReword(e.target.value)}
                  checked={reword === 'ok'}
                />

                <FormControlLabel
                  control={<Radio />}
                  label="不"
                  value="ng"
                  onChange={(e) => setReword(e.target.value)}
                  checked={reword === 'ng'}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="どちらでも良い"
                  value="either"
                  onChange={(e) => setReword(e.target.value)}
                  checked={reword === 'either'}
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
                  value="ok"
                  onChange={(e) => setBeginer(e.target.value)}
                  checked={Beginer === 'ok'}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="無"
                  value="ng"
                  onChange={(e) => setBeginer(e.target.value)}
                  checked={Beginer === 'ng'}
                />
                <FormControlLabel
                  control={<Radio />}
                  label="未"
                  value="either"
                  onChange={(e) => setBeginer(e.target.value)}
                  checked={Beginer === 'either'}
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
              value={msg}
              className={styles.white}
              onChange={(e) => setMsg(e.target.value)}
            />
          </div>
          <div className={styles.content}>
            <Title name={'Slack URL'} />
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              value={slackUrl}
              className={styles.white}
              onChange={(e) => setSlackUrl(e.target.value)}
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
          {title.length > 0 && slackUrl.length > 0 && origanizer.length > 0 && msg.length > 0 ? (
            <button onClick={() => postQuest()} className={styles.btn}>
              投稿
            </button>
          ) : (
            <p className={styles.err}>全項目記入すると、送信ボタンが出現します。</p>
          )}
        </div>
      </div>
    </div>
  )
}
