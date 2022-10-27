import Head from "next/head"

export default function Metadata({ title, descr = null, img = null }) {
    return (
        <Head>
            <title>{title}</title>
            {descr &&
                <>
                    <meta name="description" content={descr} key="desc" />
                    <meta
                        property="og:description"
                        content={descr}
                    />
                </>

            }
            {img &&
                <>
                    <meta property="og:title" content={title} />
                    <meta
                        property="og:image"
                        content={img}
                    />
                </>
            }
        </Head>
    )
}