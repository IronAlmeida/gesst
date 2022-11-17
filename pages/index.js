import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>GESST - Gestão & Educação em Saúde e Segurança do Trabalho</title>
        <meta name="description" content="Site portfólio da GESST" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet" />
        {/*<link rel="icon" href="/favicon.ico" />*/}
      </Head>

      <section className="w-full relative pt-[2rem] bg-[url('../public/bg-gesst.png')] bg-cover">
        <header className='w-5/6 flex justify-between fixed top-8 left-[50%] -translate-x-1/2 bg-white text-[#00578E] py-2 px-4 sm:px-12 rounded-full shadow-xl'>
          <div>
            <img src='/G.png' alt='Logo GESST' width={60} height={60} />
          </div>
          <nav className='hidden lg:flex items-center'>
            <ul className='flex gap-16 text-lg font-semibold'>
              <li>Home</li>
              <li>Quem somos</li>
              <li>Serviços</li>
              <li>Clientes</li>
              <li>Contato</li>
            </ul>
          </nav>
        </header>

        <div className="w-full pt-[7.5rem] px-4 md:px-12 lg:px-16 grid grid-rows-1 md:grid-cols-2 md:grid-rows-none">
          <div className='w-full flex flex-col text-4xl sm:text-5xl text-white items-center text-center'>
            <img className='w-1/2' src='/logo-gesst-h.png' alt='Logo GESST completa'/>
            <p className='pt-12 pb-10 px-2'>Um novo conceito em gestão de SST no eSocial</p>
            <img className='block md:hidden' src='/coletivo-gesst.png' alt='Sócios Daniel Carvalho, Lourdes Almeida e André Cavalcanti' width={1900}/>
          </div>
          <div className=' hidden md:flex flex-col justify-end'>
            <img src='/coletivo-gesst.png' alt='Sócios Daniel Carvalho, Lourdes Almeida e André Cavalcanti' width={1900}/>
          </div>

        </div>
      </section>

    </> 
  )
}
