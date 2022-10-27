import Image from "next/image"
import { fetchEntries, getPage } from "../../lib/contentful"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, Document } from '@contentful/rich-text-types'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitterSquare, FaWhatsapp } from "react-icons/fa"
import Metadata from "../../components/Metadata"

export async function getServerSideProps() {
  const page = await getPage({
    content_type: "pages",
    pageTitle: "Misión"
  })

  const team = await fetchEntries({
    content_type: "teamMember"
  })

  return { props: { page, team } }
}

export default function About({ page, team }) {
  return (
    <>
      <MetadataAbout metadata={page.fields.metadata} />
      <section className="flex justify-center flex-col md:p-10">
        {page.fields.content.map((section, id) => {
          const even = (id % 2 == 0)
          return <Section key={section.sys.id} reverse={even} data={section} team={team} />
        })}
      </section>
    </>

  )
}

function MetadataAbout({ metadata }) {
  return metadata.map((data) =>{
    return (
      <Metadata title={data.fields.seoTitle} img={`https:${data.fields.image.fields.file.url}`}/>
    )
  })
}


function Section({ reverse = false, data, team }) {
  const { fields } = data
  const { items } = team.team
  const style = "hero-content flex-col justify-center items-center w-screen " + (reverse ? "lg:flex-row-reverse" : "lg:flex-row")
  function htmlRendered(content: Document) {
    const Heading = ({ children }) => <h1 className={"text-6xl font-bold " + (reverse ? "text-secondary" : 'text-primary')}>{children}</h1>
    const Paragraph = ({ children }) => <blockquote className="py-6 text-2xl">{children}</blockquote>
    const options = {
      renderNode: {
        [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>,
        [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,

      }
    };
    return documentToReactComponents(content, options)
  }

  return (
    <div className="hero">
      <div className={style}>
        {!(fields.image === undefined || fields.image === null) ?
          <HeroImage image={fields.image.fields} />
          : (!fields.content ?
            <div className="flex flex-col text-left md:gap-x-20 gap-y-5">
              <div>
                <h1 className="text-6xl font-bold">Equipo capp</h1>
              </div>
              <div className="flex flex-col md:flex-row gap-20">
                {items.map((item) => {
                  return <Member key={item.sys.id} member={item} />
                })}
              </div>
            </div>

            : null)
        }
        <div>
          {htmlRendered(fields.content)}
        </div>
      </div>
    </div>
  )

}

function Member({ member }) {
  return (
    <div className="flex flex-col gap-y-10 md:gap-20 md:flex-row">
      <div className="flex flex-col items-center gap-y-3">
        <div className="avatar">
          <div className="w-60 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image src={`https:` + member.fields.picture.fields.file.url} width={member.fields.picture.fields.file.details.image.width} height={member.fields.picture.fields.file.details.image.height} />
          </div>
        </div>
        <div>
          <h1 className="text-4xl font-bold">
            {member.fields.nickname}
          </h1>
        </div>
        <div className="w-full p-0">
          <p className="text-lg text-center p-0">
            {member.fields.description}
          </p>
        </div>
        <div>
          {member.fields.socialNetwork && member.fields.socialNetwork.map((social) => {
            return <Social key={social.sys.id} network={social.fields.socialMedia} url={social.fields.url} />
          })}
        </div>
      </div>
    </div>
  )
}

function Social({ network, url }) {
  switch (network) {
    case 'LinkedIn': return <a href={url} className="text-blue-400 text-2xl"><FaLinkedin /></a>
    case 'Facebook': return <a href={url} className="text-blue-600 text-2xl"><FaFacebookSquare /></a>
    case 'Instagram': return <a href={url} className="text-pink-500 text-2xl"><FaInstagram /></a>
    case 'Twitter': return <a href={url} className="text-blue-300 text-2xl"><FaTwitterSquare /></a>
    default:
      break;
  }
}

function HeroImage({ image }) {
  return (
    <div className="p-5" style={{
      backgroundImage: `url("/img/blob-1.svg")`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'contain',
      overflow: "hidden"
    }}>
      <Image src={`https:` + image.file.url} width={image.file.details.image.width} height={image.file.details.image.height} className="rounded-lg shadow-2xl p-32" />
    </div>

  )
}