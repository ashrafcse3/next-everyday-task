import { ThemeProvider } from 'next-themes'
import Nav1 from '../components/shared/Nav1'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <div className='bg-white dark:bg-black'>
      <ThemeProvider enableSystem={true} attribute='class'>
        <Nav1 />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  )
}
