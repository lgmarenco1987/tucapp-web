import Hero from "../components/Hero"
import Services from "../components/Services"
import Head from "next/head"


import { getMainContent } from "../lib/contentful"
import Metadata from "../components/Metadata"

export async function getServerSideProps() {
  const res = await getMainContent()
  return { props: { home: res?.home?.fields } }
}


export default function Home({ home }) {

  return (
    <>
      <Metadata title="Capp - Maneja lo Simple" />
      <main>
        <Hero content={home} />
        <Services content={home} />
      </main>
    </>
  );
}
