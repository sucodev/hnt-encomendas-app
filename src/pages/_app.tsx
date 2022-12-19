import '../styles/main.css'

import type { AppProps } from 'next/app'

import { Provider } from 'react-redux'
import { persistor, store } from '../store'

import { PersistGate } from 'redux-persist/integration/react'
import { Toast } from '../components/Containers/Toast'




export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<p>Carregando...</p>}>
        <Component {...pageProps} />
        <Toast />
      </PersistGate>
    </Provider>
  )
}
