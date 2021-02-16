import React from 'react'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormControl from '@material-ui/core/FormControl'
import styles from './IconsList.module.scss'
import FrontIcon from '../../../components/parts/icons/FrontIcon'
import BackIcon from '../../../components/parts/icons/BackIcon'
import InfraIcon from '../../../components/parts/icons/InfraIcon'

export default function IconsList() {
  return (
    <FormControl component="fieldset">
      <RadioGroup aria-label="gender" name="position">
        <div className={styles.icons}>
          <FrontIcon />
          <FormControlLabel value="frontend" control={<Radio />} label="フロントエンド" className={styles.icon} />
        </div>
        <div className={styles.icons}>
          <BackIcon />
          <FormControlLabel value="backend" control={<Radio />} label="バックエンド" className={styles.icon} />
        </div>
        <div className={styles.icons}>
          <InfraIcon className={styles.icon} />
          <FormControlLabel value="infra" control={<Radio />} label="インフラ" className={styles.icon} />
        </div>
      </RadioGroup>
    </FormControl>
  )
}
