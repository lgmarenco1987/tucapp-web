import { FaBars, FaFacebookSquare, FaInstagram, FaLinkedin, FaLock, FaRss, FaWhatsapp } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { ImLocation } from 'react-icons/im'
import { BsFillPeopleFill } from 'react-icons/bs'
import { IoRocketSharp } from "react-icons/io5"
import CappLogo from './CappLogo'
import { useRouter } from 'next/router'
import Link from 'next/link'


export default function NavBar({ whatsApp, linkedIn, facebook, instagram }) {

    const activeMenu = () => {
        const activeRoute = useRouter().asPath
        return activeRoute
    }

    return (
        <div>
            <Band whatsApp={whatsApp} linkedIn={linkedIn} facebook={facebook} instagram={instagram} />
            <div className="navbar bg-primary lg:px-36 px-10">
                <div className="flex-1">
                    <Link href="/">
                        <a>
                            <CappLogo width="100" height="50" />
                        </a>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link href="/app">
                                <a className={"hover:scale-110 transition px-3 py-2 flex items-center leading-snug hover:text-secondary " + (activeMenu() === "/app"? "scale-110 text-secondary" : "text-white")}
                                >
                                    <FaLock /> <span className="ml-2">secreto</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className={"hover:scale-110 transition px-3 py-2 flex items-center leading-snug hover:text-secondary " + (activeMenu() === "/blog" ? "scale-110 text-secondary" : "text-white")}
                                >
                                    <BsFillPeopleFill /><span className="ml-2">comunidad</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about">
                                <a className={"hover:scale-110 transition px-3 py-2 flex items-center leading-snug hover:text-secondary " + (activeMenu() === "/about" ? "scale-110 text-secondary" : "text-white")}
                                >
                                    <IoRocketSharp /><span className="ml-2">misión</span>
                                </a>
                            </Link>

                        </li>
                        <li>
                            <Link href="/articles">
                                <a className={"hover:scale-110 transition px-3 py-2 flex items-center leading-snug hover:text-secondary " + (activeMenu() === "/articles" ? "scale-110 text-secondary" : "text-white")}
                                >
                                    <FaRss /><span className="ml-2">noticias</span>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <FaBars className='text-white text-xl' />
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52">
                        <li>
                            <Link href="/app" >
                                <a className='text-white'><FaLock /> <span className="ml-2">secreto</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a className='text-white'><BsFillPeopleFill /><span className="ml-2">comunidad</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" >
                            <a className='text-white'><IoRocketSharp /><span className="ml-2">misión</span></a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/articles" >
                                <a className='text-white'><FaRss /><span className="ml-2">noticias</span></a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

function Band({ whatsApp, linkedIn, facebook, instagram }) {
    

    return (
        <div className="flex flex-wrap sm:justify-between justify-center items-center bg-purple-400 w-full text-white lg:px-36">
            <div className="flex flex-wrap">
                <a className='flex items-center hover:text-green-500 hover:scale-110 transition' href={"https://api.whatsapp.com/send?text=Hola%20Capp!,%20Estoy%20interesado%20en%20empezar%20a%20usar%20la%20app%20%C2%BFQu%C3%A9%20necesito%20hacer?&phone=" + whatsApp.replace(/\s/g, '')}><FaWhatsapp /> <span className='text-sm'>{whatsApp}</span></a>
                <a className='flex items-center space-x-2 m-2 text-sm hover:scale-110 transition' href='mailto:info@tucapp.com'><IoMdMail /> <span>info@tucapp.com</span></a>
            </div>
            <div className='flex space-x-3'>
                <div className="flex flex-wrap items-center">
                    <ImLocation /> <span className='text-sm'>Bogotá, Colombia</span>
                </div>
                <div className="flex flex-wrap items-center">
                    <a className="hover:text-blue-600 hover:scale-125 transition" href={facebook} ><FaFacebookSquare /></a>
                </div>
                <div className="flex flex-wrap items-center">
                    <a className="hover:text-pink-500 hover:scale-125 transition" href={instagram} ><FaInstagram /></a>
                </div>
                <div className="flex flex-wrap items-center">
                    <a className="hover:text-blue-400 hover:scale-125 transition" href={linkedIn} ><FaLinkedin /></a>
                </div>
            </div>
        </div>
    )
}