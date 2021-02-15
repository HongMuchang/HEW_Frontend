import React from 'react'
import TextField from '@material-ui/core/TextField'
import styles from './CheckBox.module.scss'
import FormControl from '@material-ui/core/FormControl'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FrontIcon from './icons/FrontIcon'
import BackIcon from './icons/BackIcon'
import InfraIcon from './icons/InfraIcon'

export default function TextBox({ title, one, two, three }) {
  return (
    <div className={styles.checkBox}>
      <p>{title}</p>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="position">
          <div className={styles.flex}>
            <FormControlLabel value={one} control={<Radio />} label={one} />
            <FormControlLabel value={two} control={<Radio />} label={two} />
            <FormControlLabel value={three} control={<Radio />} label={three} />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  )
}
