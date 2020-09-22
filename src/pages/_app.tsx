import React, { StrictMode } from 'react'
import { Provider } from 'react-redux';
import MainLayout from '../components/MainLayout';
import { useStore } from '../store';
import { GlobalStyles } from "../globalStyle";

export default function App({ Component, pageProps }: any) {
  const store = useStore(pageProps.initialReduxState);

  return (
    <StrictMode>
      <GlobalStyles />
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </StrictMode>
  )
}
