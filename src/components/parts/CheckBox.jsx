import React from 'react'
import styles from './CheckBox.module.scss'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'

export default function TextBox({ title, one, two, three }) {
  return (
    <div className={styles.checkBox}>
      <p>{title}</p>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="position">
          <div className={styles.flex}>
            <FormControlLabel control={<Radio />} />
            <FormControlLabel control={<Radio />} />
            <FormControlLabel control={<Radio />} />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  )
}
