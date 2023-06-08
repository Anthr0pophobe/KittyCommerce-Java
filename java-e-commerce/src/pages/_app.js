import '@/styles/globals.css'
import NavBar from '@/components/Navbar'
import { PanierProvider } from '@/context/panierContext'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar/>
      <PanierProvider>
        <Component {...pageProps} />
      </PanierProvider>
    </>
  )
}
