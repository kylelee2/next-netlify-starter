import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SOON TO BE MASTR</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="AI DEPLOY" />
        <p className="description">
          Outline for Webpage and Business Model <code>pages/index.js</code>
        </p>
    
        <p>1. header, with contact, ai, quiz, test, exam</p>
        <p>2. google ads, membership based rev model</p>
      </main>

      <Footer />
    </div>
  )
}
