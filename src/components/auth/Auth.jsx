import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Auth.module.scss'
import { auth, provider, storage } from '../../utils/firebase'

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
    await auth.signInWithPopup(provider).catch((err) => alert(err.message))
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {isLogin ? 'ログイン' : 'サインアップ'}
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* --------ログイン-------- */}
          <Button
            disabled={isLogin ? !email || password.length < 6 : !email || password.length < 6}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            startIcon={<EmailIcon />}
            onClick={
              isLogin
                ? //ログインモードで入ってきた時
                  async () => {
                    try {
                      await signInEmail()
                    } catch (err) {
                      alert(err.message)
                    }
                  }
                : //サインアップモードで入ってきた時
                  async () => {
                    try {
                      await signUpEmail()
                    } catch (err) {
                      alert(err.message)
                    }
                  }
            }
          >
            {isLogin ? 'Login' : 'SignUp'}
          </Button>

          {/* --------切り替えボタン-------- */}
          <Grid container>
            <Grid item xs>
              <span className={styles.login_reset}>パスワードお忘れの方?</span>
            </Grid>
            <Grid item>
              <span className={styles.login_toggleMode} onClick={() => setIsLogin(!isLogin)}>
                {isLogin ? '新規作成' : 'ログイン'}
              </span>
            </Grid>
          </Grid>

          {/* --------google--------*/}
          <Button fullWidth variant="contained" color="primary" className={classes.submit} onClick={signInGoogle}>
            Google
          </Button>
        </form>
      </div>
    </Container>
  )
}
