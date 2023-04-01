/* eslint-disable no-console */
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

import Slider from '../components/Slider'
import PhoneBar from '../components/PhoneBar'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Sercan Taş | Official</title>
        <meta name="description" content="Sercan Taş" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
        <Header/>
        <hr/>
        <Slider/>

        <PhoneBar/>




    </div>
  )
}
