import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../Header'
import Footer from '../Footer/Footer'
import NavLink from './NavLink'
import styles from './Layout.module.scss'

export const Layout = ({ children, title = 'HP by Nextjs' }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.main_left}>
          <nav>
            <Link href="/">
              <a className={styles.block}>
                <NavLink name="トップページ" />
              </a>
            </Link>
            <Link href="/quest_board">
              <a className={styles.block}>
                <NavLink name="クエストボード" />
              </a>
            </Link>
            <Link href="/contact-page">
              <a className={styles.block}>
                <NavLink name="開催中のボード" />
              </a>
            </Link>
            <Link href="/contact-page">
              <a className={styles.block}>
                <NavLink name="投稿中のボード" />
              </a>
            </Link>
            <Link href="/contact-page">
              <a className={styles.block}>
                <NavLink name="参加中のボード" />
              </a>
            </Link>
            <Link href="/contact-page">
              <a className={styles.block}>
                <NavLink name="ログアウト" />
              </a>
            </Link>
          </nav>
        </div>
        <div className={styles.main_right}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}
