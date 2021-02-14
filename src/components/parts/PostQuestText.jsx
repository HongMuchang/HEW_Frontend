import React from 'react'
import TextField from '@material-ui/core/TextField'

export default function PostQuestText({ name }) {
  return (
    <form noValidate autoComplete="off">
      <TextField id="outlined-basic" label={name} variant="outlined" />
    </form>
  )
}
