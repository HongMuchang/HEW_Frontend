import '../../styles/globals.css'
// Provider を読み込む
import { Provider } from 'react-redux'
import store from '../store.js'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
