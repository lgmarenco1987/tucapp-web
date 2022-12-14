import { AiOutlinePlus } from "react-icons/ai"
import Image from "next/image"

export default function Services({ content }) {

    const { secondaryContent, secondaryContentImage, thirdContent, thirdContentImage } = content

    return (
        <>
            <section>
                <div className="justify-center items-center lg:flex lg:flex-row">
                    <div style={{
                        backgroundImage: `url("/img/blob-2.svg")`,
                        backgroundRepeat: 'no-repeat',
                        width: '75%'
                    }}>
                        <Image
                            src={"https:" + secondaryContentImage.fields.file.url}
                            width={secondaryContentImage.fields.file.details.image.width}
                            height={secondaryContentImage.fields.file.details.image.height}
                            className="p-10" />
                    </div>
                    <div className=" p-5 m-5">
                        <p className="text-lg">{secondaryContent.content[0].content[0].value || 'Contenido'}</p>
                        <h1 className="text-8xl font-bold text-primary">{secondaryContent.content[1].content[0].value || 'Contenido'}</h1>
                        <p className="py-6 text-lg">{secondaryContent.content[2].content[0].value || 'Contenido'}</p>
                        <button className="btn btn-secondary btn-wide text-base-100 lowercase">saber <AiOutlinePlus className="text-bold" /></button>
                    </div>
                </div>
            </section>
            <section className="-mt-10 md:-mt-40 justify-between flex hero">
                <div className="justify-center items-center lg:flex lg:flex-row-reverse">

                    <div style={{
                        backgroundImage: `url("/img/blob-1.svg")`,
                        backgroundRepeat: 'no-repeat',
                        width: '100%'
                    }}>
                        <Image
                            src={"https:" + thirdContentImage.fields.file.url}
                            width={thirdContentImage.fields.file.details.image.width}
                            height={thirdContentImage.fields.file.details.image.height}
                            className="ml-5 mt-28" />
                    </div>
                    <div className=" p-5 m-5 lg:p-32 lg:m-10">
                        <p className="text-lg">{thirdContent.content[0].content[0].value || 'Contenido'}</p>
                        <h1 className="text-8xl font-bold text-warning">{thirdContent.content[1].content[0].value || 'Contenido'}</h1>
                        <p className="py-6 text-lg">{thirdContent.content[2].content[0].value || 'Contenido'}</p>
                        <button className="btn btn-secondary btn-wide  text-base-100 lowercase">quiero intentarlo</button>
                    </div>

                </div>
            </section>
        </>

    )

}