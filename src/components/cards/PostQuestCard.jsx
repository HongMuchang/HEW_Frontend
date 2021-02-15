import PostQuestText from '../parts/PostQuestText'
import styles from './PostQuestCard.module.scss'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

export default function PostQuestCard() {
  return (
    <div className={styles.bords}>
      <div className={styles.bord_text_area}>
        <PostQuestText name={'クエスト名'} className={styles.bord_text_area} />
      </div>
      <div className={styles.bord_text_area}>
        <TextField id="date" label="開催日" type="date" defaultValue={'2017-05-24'} />

        <FormControl>
          <InputLabel id="demo-customized-select-label" className={styles.bord_time}>
            日数
          </InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            className={styles.bord_time_select}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className={styles.bord_text_area}>
        <PostQuestText name={'主催者'} />
      </div>
    </div>
  )
}
