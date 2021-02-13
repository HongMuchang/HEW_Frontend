import { Layout } from '../../components/layouts/Layout/Layout'
import QuestCard from '../../components/cards/QuestCard'
import styles from './quest_board.module.scss'

export default function quest_board({ current }) {
  const bords = [
    { id: 1, title: 'こんいちは', contact: 'helloworld', time: '2020-11-21' },
    { id: 2, title: 'こんいちは', contact: 'helloworld', time: '2020-11-22' },
    { id: 3, title: 'こんいちは', contact: 'helloworld', time: '2020-11-23' },
    { id: 4, title: 'こんいちは', contact: 'helloworld', time: '2020-11-24' },
    { id: 5, title: 'こんいちは', contact: 'helloworld', time: '2020-11-25' },
    { id: 6, title: 'こんいちは', contact: 'helloworld', time: '2020-11-26' },
  ]

  return (
    <Layout title="Guild Hack">
      <div className={styles.bords}>
        <h1>quest_board</h1>
        <ul>
          {bords.map((bord, index) => (
            <li key={index}>
              <QuestCard title={bord.title} contact={bord.contact} time={bord.time} />
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const date = new Date()
  const current = date.toLocaleString()
  return {
    props: {
      current,
    },
    revalidate: 5,
  }
}
