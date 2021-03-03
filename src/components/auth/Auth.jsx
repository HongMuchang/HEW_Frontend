import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Auth.module.scss'
import { auth, storage, google, twitter, github } from '../../utils/firebase'

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Paper,
  Grid,
  Typography,
  makeStyles,
  Modal,
  IconButton,
  Box,
  Container,
} from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import CameraIcon from '@material-ui/icons/Camera'
import EmailIcon from '@material-ui/icons/Email'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

export default function Auth() {
  const classes = useStyles()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true) //ログイン画面かの判断

  //新規登録
  const signUpEmail = async () => {
    await auth.createUserWithEmailAndPassword(email, password)
  }
  //メール
  const signInEmail = async () => {
    await auth.signInWithEmailAndPassword(email, password)
  }
  //Google
  const signInGoogle = async () => {
    await auth.signInWithPopup(google).catch((err) => alert(err.message))
  }
  const signInTwitter = async () => {
    await auth.signInWithPopup(twitter).catch((err) => alert(err.message))
  }
  const signInGithub = async () => {
    await auth.signInWithPopup(github).catch((err) => alert(err.message))
  }

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>Login</h1>
          <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
              <form className={classes.form} noValidate>
                <Button fullWidth variant="contained" className={styles.google} onClick={signInGoogle}>
                  Google
                </Button>
                <Button fullWidth variant="contained" className={styles.twitter} onClick={signInTwitter}>
                  Twitter
                </Button>
                <Button fullWidth variant="contained" className={styles.github} onClick={signInGithub}>
                  Github
                </Button>
              </form>
            </div>
          </Container>
        </div>
      </div>
    </div>
  )
}
