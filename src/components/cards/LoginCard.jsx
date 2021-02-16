import React, { useState } from 'react'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import styles from './LoginCard.module.scss'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true) //ログイン画面かの判断

  const change = () => {
    setIsLogin(!isLogin)
  }

  return (
    <Container component="main" maxWidth="xs" className={styles.bord}>
      <CssBaseline />
      <div>
        <Avatar className={styles.avater}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" className={styles.title}>
          {isLogin ? <p>ログイン</p> : <p>サインアップ</p>}
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="ニックネーム"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="メールアドレス"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="パスワード"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {
            <Button type="submit" fullWidth variant="contained" color="primary" disabled>
              {isLogin ? <p>Login</p> : <p>Signin</p>}
            </Button>
          }
          <Grid container>
            <Grid item>
              <Link href="#" variant="body2" onClick={() => change()}>
                {isLogin ? <p>Signin</p> : <p>Login</p>}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  )
}
