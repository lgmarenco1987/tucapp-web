import Hero from "../components/Hero"
import Services from "../components/Services"
import Head from "next/head"


import { getMainContent } from "../lib/contentful"

export async function getStaticProps() {
  const res = await getMainContent()
  return {props: { home: res?.home?.fields }}
}


export default function Home({home}) {
  
  return (
    <>
      <Head>
        <title>Capp - Maneja lo Simple</title>
      </Head>
      <main>
        <Hero content={home}/>
        <Services content={home}/>
      </main>
    </>
  );
}
