import { Layout } from '../components/layouts/Layout/Layout'
import Login from './login'
import Bord from '../features/bord/Bord'

export default function Home() {
  const bool = true

  return (
    <div>
      {bool ? (
        <Layout title="Guild Hack">
          <p>saa</p>{' '}
        </Layout>
      ) : (
        <Login />
      )}
    </div>
  )
}
