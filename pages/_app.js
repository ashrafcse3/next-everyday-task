import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import Nav1 from '../components/shared/Nav1'
import AuthProvider from '../contexts/AuthProvider'
import '../styles/globals.css'

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider enableSystem={true} attribute='class'>
        <AuthProvider>
          <Nav1 />
          <Component {...pageProps} />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  )
}
