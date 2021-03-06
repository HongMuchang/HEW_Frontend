import Head from 'next/head'
import Link from 'next/link'
import { Header } from '../Header'
import Footer from '../Footer/Footer'
import NavLink from './NavLink'
import styles from './Layout.module.scss'
import LogoutBtn from '../../auth/LogoutBtn'

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
            <Link href="/quest_bord">
              <a className={styles.block}>
                <NavLink name="クエストボード" />
              </a>
            </Link>
            <Link href="/post_quest_bord">
              <a className={styles.block}>
                <NavLink name="クエスト募集" />
              </a>
            </Link>
            <Link href="/compass_bord">
              <a className={styles.block}>
                <NavLink name="Connpass ボード" />
              </a>
            </Link>
            <Link href="/posting_bord">
              <a className={styles.block}>
                <NavLink name="投稿中のボード" />
              </a>
            </Link>
            <Link href="/join_bord">
              <a className={styles.block}>
                <NavLink name="参加中のボード" />
              </a>
            </Link>
            <LogoutBtn />
          </nav>
        </div>
        <div className={styles.main_right}>{children}</div>
      </main>
      <Footer />
    </div>
  )
}
