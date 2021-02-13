import styles from './Header.module.scss'

export default function Header() {
  return (
    <header className={styles.container}>
      <p className={styles.header_title}>
        <span>G</span>uild Hack
      </p>
    </header>
  )
}
