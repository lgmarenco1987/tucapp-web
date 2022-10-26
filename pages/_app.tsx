import "../styles/globals.css"
import NavBar from '../components/NavBar'
import Footer from "../components/Footer"
import { useEffect, useState } from "react"

import useSWR from "swr"
import { getSocial } from "../lib/contentful"

const fetcher = async () => {
  const res = await getSocial()
  const data = await res?.social?.fields
  return { props: { social: data } }
}

function MyApp({ Component, pageProps }) {
  const { data, error } = useSWR('social', fetcher)

  if (error) return 'error has occurred'
  if (!data) return <Loading />

  return (
    <>
      <NavBar data={data} />
      <Component {...pageProps} />
      <Footer data={data} />
    </>
  );
}

export default MyApp


function Loading() {
  return (
    <div className="mx-auto flex w-screen h-screen bg-primary items-center justify-center">
      <button type="button" className="grid grid-cols-3 bg-secondary w-40 h-11 rounded-lg text-white font-bold hover:bg-indigo-300 hover:cursor-not-allowed duration-[500ms,800ms]" disabled>
        <div className="grid-1 my-auto h-5 w-5 mx-3 border-t-transparent border-solid animate-spin rounded-full border-white border-4"></div>
        <div className="grid-2 my-auto -mx-1">Cargando...</div>
      </button>
    </div>
  )
}
