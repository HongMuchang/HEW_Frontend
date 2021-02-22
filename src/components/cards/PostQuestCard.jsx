import TextBox from '../parts/TextBox'
import styles from './PostQuestCard.module.scss'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import IconsList from '../parts/IconsList'
import CheckBox from '../parts/CheckBox'
import { Radio, RadioGroup, FormControlLabel, NativeSelect } from '@material-ui/core'
export default function PostQuestCard() {
  return (
    <div className={styles.bords}>
      <div className={styles.bord_left}>
        <div className={styles.bord_text_area}>
          <TextBox name={'クエスト名'} className={styles.bord_text_area} />
        </div>
        <div className={styles.bord_text_area}>
          <TextField id="date" label="開催日" type="date" defaultValue={'2017-05-24'} />

          <FormControl>
            <InputLabel htmlFor="demo-customized-select-native">開催期間</InputLabel>
            <NativeSelect id="demo-customized-select-native" value={'2'} onChange={(e) => setDay(e.target.value)}>
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
        <div className={styles.bord_text_area}>
          <TextBox name={'主催者'} />
        </div>
        <CheckBox title={'フルコミット'} one={'可'} two={'不'} three={'未'} />
        <CheckBox title={'初心者歓迎'} one={'歓'} two={'不'} three={'どちらでも良い'} />
        <CheckBox title={'報酬'} one={'有'} two={'無'} three={'未'} />
      </div>
      <div className={styles.bord_right}>
        <div className={styles.bord_text_area}>
          <TextBox name={'一言'} className={styles.bord_text} />
        </div>
        <div className={styles.position_card}>
          <p>自分の役割</p>
          <IconsList />
        </div>
      </div>
    </div>
  )
}
