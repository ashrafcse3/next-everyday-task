import { ThemeProvider } from 'next-themes'
import Nav1 from '../components/shared/Nav1'
import AuthProvider from '../contexts/AuthProvider'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider enableSystem={true} attribute='class'>
      <AuthProvider>
        <Nav1 />
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  )
}
