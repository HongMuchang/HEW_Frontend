import { Layout } from '../components/layouts/Layout/Layout'
import Login from './login'
export default function Home() {
  const bool = true

  return (
    <div>
      {bool ? (
        <Layout title="Guild Hack">
          <h1>Home</h1>
        </Layout>
      ) : (
        <Login />
      )}
    </div>
  )
}
