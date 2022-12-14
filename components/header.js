import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-scroll/modules'

export default function Header (){ 

    const toggleMenu = () => {
      const nav = document.getElementById('nav');
      const bg = document.getElementById('bg');
      nav.classList.toggle('active');
      bg.classList.toggle('active');
    }

    return (
        <header id="bg" className='w-full flex justify-between fixed -top-1 text-[#fff] py-6 px-6 sm:px-12 lg:px-14 lg:py-6 lg:items-center xl:px-32 z-20'>
          <div>
            <Link href='#home' activeClass="true" to="home" spy={true} smooth={true} offset={0} duration={600}>
              <img className='w-[120px] lg:w-[150px] md:block' src='/logo-gesst.png' alt='Logo GESST completa' width={175} height={60} />
            </Link>
          </div>
          <nav id="nav" className='flex'>
            <ul id="menu" className='flex items-center gap-8 text-lg'>
              <li className="md:hover:scale-125 transition-all duration-300"><Link onClick={toggleMenu} href='#home' activeClass="true" to="home" spy={true} smooth={true} offset={0} duration={600}>Home</Link></li>
              <li className="md:hover:scale-125 transition-all duration-300"><Link onClick={toggleMenu} href='#gestao' activeClass="true" to="gestao" spy={true} smooth={true} offset={-80} duration={600}>Serviços</Link></li>
              <li className="md:hover:scale-125 transition-all duration-300"><Link onClick={toggleMenu}  href='#about' activeClass="true" to="about" spy={true} smooth={true} offset={-50} duration={600}>Quem somos</Link></li>
              <a target="_blank" rel="noreferrer" href='https://app.sgg.net.br/index.php?banco_de_dados=conplan_sgg_redesomed_se'><li><button className="md:hover:scale-125 transition-all duration-300 bg-[#00578e] text-white text-center p-4 lg:py-2 rounded-full">Área do cliente</button></li></a>
              <a target="_blank" rel="noreferrer" href='https://docs.google.com/forms/d/1P_jdVy7VZsqHzURpeKK6G3wnaEnrezEXa0my_gS_9dk/viewform?edit_requested=true'><li><button className="md:hover:scale-125 transition-all duration-300 bg-[#f5aa1d] text-white text-center p-4 lg:py-2 rounded-full">Solicitar orçamento</button></li></a>
            </ul>
            <AiOutlineMenu onClick={toggleMenu} id="burger" className="text-4xl lg:hidden text-[#fff]" />
            <AiOutlineClose onClick={toggleMenu} id="close" className="hidden lg:hidden text-4xl text-[#fff]" />
          </nav>
        </header>
    )
}