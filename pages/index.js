/* eslint-disable no-console */
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

import Slider from '../components/Slider'


export default function Home() {
  return (
    <div>
      <Head>
        <title>GRB</title>
        <meta name="description" content="Garibi resmi sayfası" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <Header/>
        <hr/>
        <Slider/>





    </div>
  )
}
