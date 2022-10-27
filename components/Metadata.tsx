import Head from "next/head"

export default function Metadata({ title, descr = null, img = null }) {
    //<meta property="og:url" content={ogUrl} key="ogurl" />
    return (
        <Head>
                  
      
    
      
            <title>{title}</title>
            <meta property="og:title" content={title} key="ogtitle" />
            <meta property="og:url" content="https://tucapp.com" key="ogurl" />
            <meta property="og:site_name" content="Capp tu Aliado en los negocios" key="ogsitename" />
            <meta property="og:description" content="Capp tu Aliado en los negocios" key="ogdesc" />
            {descr &&
                <>
                    <meta name="description" content={descr} key="desc" />
                    <meta
                        property="og:description"
                        content={descr}
                        key="ogdesc"
                    />
                </>

            }
            {img &&
                <>
                    <meta
                        property="og:image"
                        content={img}
                        key="ogimage"
                    />
                </>
            }
        </Head>
    )
}