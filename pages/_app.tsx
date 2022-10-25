import "../styles/globals.css"
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

import useSWR from "swr"
import { getSocial } from "../lib/contentful"

const fetcher = async () => {
  const res = await getSocial()
  const data = await res?.social?.fields
  return {props: { social: data }}
}

function MyApp({ Component, pageProps }) {
  const { data, error } = useSWR('social', fetcher)
  
  if(error) return 'error has occurred'
  if(!data) return <div className="w-full items-center">Cargando</div>

  return (
    <>
      <NavBar data = {data}/>
      <Component {...pageProps} />
      <Footer data = {data}/>
    </>
  );
}

export default MyApp
