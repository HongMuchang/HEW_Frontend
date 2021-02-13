import { Layout } from '../../components/layouts/Layout/Layout'
import QuestCard from '../../components/cards/QuestCard'

export default function quest_board({ current }) {
  const bords = [
    { id: 1, title: 'こんいちは', contact: 'helloworld', time: '2020-11-21' },
    { id: 2, title: 'こんいちは', contact: 'helloworld', time: '2020-11-21' },
    { id: 3, title: 'こんいちは', contact: 'helloworld', time: '2020-11-21' },
    { id: 4, title: 'こんいちは', contact: 'helloworld', time: '2020-11-21' },
    { id: 5, title: 'こんいちは', contact: 'helloworld', time: '2020-11-21' },
    { id: 6, title: 'こんいちは', contact: 'helloworld', time: '2020-11-21' },
  ]

  return (
    <div>
      <Layout title="Guild Hack">
        <h1>quest_board</h1>
        <ul>
          {bords.map((bord, index) => (
            <li key={index}>
              <QuestCard title={bord.title} contact={bord.contact} time={bord.time} />
            </li>
          ))}
        </ul>
      </Layout>
    </div>
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
