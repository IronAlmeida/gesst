import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

export default function Header (){ 

    const toggleMenu = () => {
      const nav = document.getElementById('nav');
      const bg = document.getElementById('bg');
      nav.classList.toggle('active');
      bg.classList.toggle('active');
    }

    return (
        <header id="bg" className='w-full flex items-center justify-between fixed -top-1 text-[#fff] py-6 px-6 sm:px-12 lg:px-20 z-20'>
          <div>
            <img className='w-[120px] lg:w-[150px] md:block' src='/logo-gesst.png' alt='Logo GESST completa' width={175} height={60} />
          </div>
          <nav id="nav" className='flex'>
            <ul id="menu" className='flex items-center gap-16 text-lg font-semibold'>
              <li>Home</li>
              <li>Serviços</li>
              <li>Quem somos</li>
              <button className="bg-[#f5aa1d] text-white text-center mt-4 lg:mt-0 p-4 rounded-full">Solicitar orçamento</button>
            </ul>
            <AiOutlineMenu onClick={toggleMenu} id="burger" className="text-4xl lg:hidden text-[#fff]" />
            <AiOutlineClose onClick={toggleMenu} id="close" className="hidden lg:hidden text-4xl text-[#fff]" />
          </nav>
        </header>
    )
}