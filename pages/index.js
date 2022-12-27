import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - ET</title>
        <meta name="description" content="Home page of everyday task app built by next js" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-8xl font-bold underline">
          Home page
        </h1>
      </main>
    </>
  )
}
