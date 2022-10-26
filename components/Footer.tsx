import Image from "next/image"
import Link from "next/link"
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import CappLogo from "./CappLogo"

export default function Footer({ data }) {
    const { whatsApp, linkedIn, facebook, instagram } = data.props.social
    return (
        <footer className="footer footer-center p-5 bg-primary text-white">
            <div>
                <CappLogo width="200px" height="50px" />
            </div>
            <div className="flex flex-col md:flex-row items-center">
                <Image src="/img/Google.svg" width='200px' height='50px'/>
                <div className="grid grid-flow-col gap-4 items-center">
                    <a className="hover:text-green-500 hover:scale-125 transition" target="_blank" rel="noreferrer noopener" href={"https://api.whatsapp.com/send?text=Hola%20Capp!,%20Estoy%20interesado%20en%20empezar%20a%20usar%20la%20app%20%C2%BFQu%C3%A9%20necesito%20hacer?&phone="+whatsApp.replace(/\s/g, '')}><FaWhatsapp className="text-2xl" /></a>
                    <a className="hover:text-blue-600 hover:scale-125 transition" target="_blank" rel="noreferrer noopener" href={facebook}><FaFacebookSquare className="text-2xl" /></a>
                    <a className="hover:text-pink-500 hover:scale-125 transition" target="_blank" rel="noreferrer noopener" href={instagram} ><FaInstagram className="text-2xl" /></a>
                    <a className="hover:text-blue-400 hover:scale-125 transition" target="_blank" rel="noreferrer noopener" href={linkedIn}><FaLinkedin className="text-2xl" /></a>
                </div>
            </div>
            <div>
                <p>Copyright © {new Date().getFullYear()} - Todos los derechos reservados</p>
                <p>
                    <Link href="/privacy">
                        <a>Aviso de Privacidad</a>
                    </Link>
                </p>
            </div>
        </footer>
    )
}
