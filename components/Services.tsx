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
                    <div className="lowercase p-5 m-5">
                        <p className="text-lg">{secondaryContent.content[0].content[0].value || 'Contenido'}</p>
                        <h1 className="text-8xl font-bold text-primary">{secondaryContent.content[1].content[0].value || 'Contenido'}</h1>
                        <p className="py-6 text-lg">{secondaryContent.content[2].content[0].value || 'Contenido'}</p>
                        <button className="btn btn-secondary btn-wide lowercase text-base-100">saber <AiOutlinePlus className="text-bold" /></button>
                    </div>
                </div>
            </section>
            <section className="-mt-14 md:-mt-60">
                <div className="justify-between items-center flex flex-row">
                    <div className="lowercase p-5 m-5 lg:p-32 lg:m-10">
                        <p className="text-lg">{thirdContent.content[0].content[0].value || 'Contenido'}</p>
                        <h1 className="text-8xl font-bold text-warning">{thirdContent.content[1].content[0].value || 'Contenido'}</h1>
                        <p className="py-6 text-lg">{thirdContent.content[2].content[0].value || 'Contenido'}</p>
                        <button className="btn btn-secondary btn-wide lowercase text-base-100">quiero intentarlo</button>
                    </div>

                        <Image
                            src={"https:" + thirdContentImage.fields.file.url}
                            width={thirdContentImage.fields.file.details.image.width}
                            height={thirdContentImage.fields.file.details.image.height}
                            className="invisible md:visible ml-5 mt-28 bg-[url('/img/Assets.svg')]" />
                </div>
            </section>
        </>

    )

}