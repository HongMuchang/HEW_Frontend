import React, { useState } from 'react'
import { auth, provider } from '../firebase'
import { Avatar, Button, CssBaseline, TextField, Grid, Typography, Container } from '@material-ui/core'
import EmailIcon from '@material-ui/icons/Email'

export default function Auth() {
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
      <div>
        <Avatar></Avatar>
        <Typography component="h1" variant="h5">
          {isLogin ? 'ログイン' : 'サインアップ'}
        </Typography>
        <form noValidate>
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
            fullWidth
            variant="contained"
            color="primary"
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
              <span>パスワードお忘れの方?</span>
            </Grid>
            <Grid item>
              <span onClick={() => setIsLogin(!isLogin)}>{isLogin ? '新規作成' : 'ログイン'}</span>
            </Grid>
          </Grid>

          {/* --------google--------*/}
          <Button fullWidth variant="contained" color="primary" onClick={signInGoogle}>
            Google
          </Button>
        </form>
      </div>
    </Container>
  )
}
