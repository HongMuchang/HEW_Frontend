import React, { useState } from 'react'
import styles from './CheckBox.module.scss'
import { Radio, RadioGroup, FormControl, FormControlLabel, TextField } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { createdbord } from '../../features/bord/bordSlice'

export default function TextBox({ title, one, two, three, setCheck, name }) {
  //何が押されているか
  const [a, setA] = useState('')

  const handleChange = (e) => setA(e)

  const bords = useSelector(createdbord)
  setCheck(a)

  // const dispatch = useDispatch()

  //最終のaの値を親に

  // dispatch(createdbord({ name: a }))

  return (
    <div className={styles.checkBox}>
      <p>{title}</p>
      <FormControl component="fieldset">
        <RadioGroup aria-label="gender" name="position">
          <div className={styles.flex}>
            <FormControlLabel
              value={one}
              control={<Radio />}
              label={one}
              onChange={(e) => handleChange(e.target.value)}
              checked={name === { one }}
            />
            <FormControlLabel
              value={two}
              control={<Radio />}
              label={two}
              onChange={(e) => handleChange(e)}
              checked={name === { two }}
            />
            <FormControlLabel
              value={three}
              control={<Radio />}
              label={three}
              onChange={(e) => handleChange(e)}
              checked={name === { three }}
            />
          </div>
        </RadioGroup>
      </FormControl>
    </div>
  )
}
