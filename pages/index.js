import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Haypos - Point of sales penunjang bisnis anda</title>
        <meta name="description" content="Haypos Point of sales penunjang bisnis anda" />
        <link rel="icon" href="/img/favicon.png" />
      </Head>

      <main>
        <Image
          src="/img/comingsoon.png"
          alt="comingsoon"
          layout='fill'
        
        />

      </main>

      <footer >
      
      </footer>
    </div>
  )
}
