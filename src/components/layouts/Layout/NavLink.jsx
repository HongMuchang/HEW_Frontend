import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import StarIcon from '@material-ui/icons/Star'
import BorderColorIcon from '@material-ui/icons/BorderColor'

export default function NavLink({ name }) {
  return (
    <List component="nav" aria-label="contacts">
      <ListItem button>
        <ListItemText primary={name} />
      </ListItem>
    </List>
  )
}
