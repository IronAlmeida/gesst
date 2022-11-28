import React from 'react'
import Head from 'next/head'
import Header from '../components/header'
import Script from 'next/script'
//import Clients from '../components/slideClients'
import Widget from '../components/widget'
import Footer from '../components/footer'
import {AiOutlineArrowRight} from 'react-icons/ai'
import {BsFillArrowDownCircleFill} from 'react-icons/bs'

export default function Home() {

  const taskOne = () => {
    let answer = document.getElementById("answer1")
    answer.classList.toggle('show')
  }

  const taskTwo = () => {
    let answer = document.getElementById("answer2")
    answer.classList.toggle('show')
  }


  const taskThree = () => {
    let answer = document.getElementById("answer3")
    answer.classList.toggle('show')
  }

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

      <Script src="/bg-header.js" strategy={'lazyOnload'}></Script>

      <section className="w-full relative">
        <Header />
        
        <img className='w-full block sm:hidden' src='/bg-gesst-vertical.png' autoPlay muted loop></img>
        <video className='w-full hidden sm:block' src='/bg-gesst.mp4' autoPlay muted loop></video>
      
        <div className='w-full absolute top-0 py-16 px-4 sm:px-20 flex flex-col sm:text-5xl text-white z-10'>
          <h1 className='py-8 text-[30px] drop-shadow-2xl min-[320px]:py-12 min-[350px]:pt-24 min-[350px]:text-[36px] min-[420px]:text-[46px] min-[460px]:pt-32 min-[550px]:pt-48 min-[550px]:text-[56px] min-[640px]:text-[34px] min-[640px]:py-6 min-[850px]:text-[54px] lg:text-[58px] lg:py-16'>Um <strong>NOVO</strong> conceito <br/> em gestão de SST<br/>no eSocial</h1>
          <p className='text-xl mt-6 min-[460px]:text-2xl min-[550px]:mt-16 min-[640px]:text-xl min-[640px]:mt-1'>Tudo que sua empresa precisa para atendimento a  <br/> legislação trabalhista e previdenciária em 2023!</p>
        </div>
      </section>

      <section className='w-full px-4 py-8 relative'> {/* SESSÃO SERVIÇOS */}
        <div className='w-full flex flex-col md:flex-row md:flex-wrap mt-[-5rem] min-[320px]:-mt-[7rem] min-[640px]:-mt-[4rem] rounded-md '> {/* CARD SERVIÇOS */}
          <div className='w-[90%] min-[550px]:w-[70%] md:w-[40%] m-auto bg-[#fff] text-center rounded-xl py-2 max-h-[280px] text-[#00578E] shadow-2xl'> {/* CARD SERVIÇO eSOCIAL */}
            <svg className="inline-block" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
              <path fill="#2e7d32" d="M40,6H24l-2,4L10,21l-4,2v17c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8C42,6.895,41.105,6,40,6z"></path><path fill="#c8e6c9" d="M38 38L10 38 10 21 22 10 38 10z"></path><path fill="#26662b" d="M6,23c0,0,1.673,0.198,4,0.469V21L6,23z"></path><path fill="#a5d6a7" d="M10,21v2.469C15.069,24.061,23.243,25,24,25c1.105,0,2-0.895,2-2c0-0.745-0.909-8.213-1.502-13H22 L10,21z"></path><path fill="#26662b" d="M22,10h2.498C24.213,7.689,24,6,24,6L22,10z"></path><path fill="#fbc02d" d="M24,6v15c0,1.1-0.9,2-2,2H6l4.3-4.06l9.85-9.3L24,6z"></path><path fill="#0288d1" d="M21,13c0,3.87-3.13,7-7,7c-1.36,0-2.63-0.39-3.7-1.06l9.85-9.3C20.69,10.64,21,11.78,21,13z"></path>
            </svg>
            <h2 className='text-3xl font-bold mt-1'>eSocial</h2>
            <p className='text-lg text-left mt-2 px-4'>Envios dos eventos de SST ao eSocial.</p>
            <p className='text-lg text-left mt-2 px-4'>S-2210, S-2220 e S-2240.</p>
          </div>

          <div className='w-[90%] min-[550px]:w-[70%] md:w-[40%] m-auto bg-[#fff] text-center rounded-xl py-2 max-h-[280px] text-[#00578E] shadow-2xl mt-12 md:mt-0'> {/* CARD SERVIÇO Treinamentos */}
            <img className='m-auto' src='helmet.png' alt="Epi's segurança do trabalho" width={52} height={52}></img>
            <h2 className='text-3xl font-bold mt-1'>Treinamentos</h2>
            <p className='text-lg text-left mt-2 px-4'>Atendimento a treinamentos de segurança do trabalho em conformidade com as NR’s.</p>
          </div>

          <div className='w-[90%] min-[550px]:w-[70%] md:w-[40%] m-auto bg-[#fff] text-center rounded-xl py-2 max-h-[280px] text-[#00578E] shadow-2xl mt-12'> {/* CARD SERVIÇO Programas */}
            <img className='m-auto' src='documents.png' alt="Programs de segurança e medicina do trabalho" width={52} height={52}></img>
            <h2 className='text-3xl font-bold mt-1'>Programas</h2>
            <p className='text-lg text-left mt-2 px-4'>Emissão e gerenciamento dos laudos, documentos e programas legais que atendam o GRO da nova NR 01.</p>
          </div>

          <button className='w-full min-[550px]:w-[70%] md:w-[65%] m-auto flex justify-center items-center rounded-full bg-[#f5aa1d] p-2 mt-8 text-xl text-white'>Mais detalhes<AiOutlineArrowRight className='ml-2'/></button>
        </div>
      </section>

      <section className='bg-[#f5f6f7] w-full py-14'>
        <div className='w-full text-center text-[#00578e] text-3xl sm:text-5xl px-2 font-bold'>
          <h2>Quem somos</h2>
        </div>
        <div className='flex flex-col mt-16 px-4 sm:px-16'>
          <div className='w-full'>
            <img className='w-1/2 sm:w-1/3 m-auto' src='g.png' alt='Logo G'/>
          </div>
          <div className='w-full mt-10'>
            <p className='text-xl text-[#00578e]'>Visando um atendimento mais completo no mercado em departamento pessoal, recursos humanos e segurança do trabalho e medicina ocupacional é que nasce a GESST.  Uma empresa formada pela junção das maiores empresas em cada segmento.</p>
          </div>
          <button className='w-2/3 bg-white p-4 mt-8 text-[#00578e] border border-[#707070] text-xl font-bold rounded-lg shadow-xl'>Saiba mais</button>
        </div>
      </section>

      <section className='bg-[#00578e] w-full py-10'>
        <div className='w-full flex flex-col px-4 sm:px-16'>
          <h2 className='text-white font-bold text-3xl'>Conte-nos um pouco mais sobre sua empresa. Solicite orçamento ou entre em contato com a nossa equipe!</h2>
          <div className='w-full mt-10 flex flex-col items-center'>
            <button className='w-full min-[550px]:w-[70%] h-[80px] p-4 bg-[#f5aa1d] text-white rounded-full text-xl'>Solicitar orçamento</button>
            <button className='w-full min-[550px]:w-[70%] h-[80px] p-4 bg-white text-[#00578e] rounded-full text-xl mt-5'>Conversar com a equipe</button>
          </div>
        </div>
      </section>

      <section className='bg-[#f5f6f7] py-14 px-4 sm:px-28 w-full'>
        <h2 className='text-3xl sm:text-5xl text-[#f5aa1d] text-center font-bold'>Perguntas frequentes</h2>
        <div className='flex flex-col w-full'> {/* PERGUNTAS FRENQUENTES */}
          <div onClick={taskOne} className='bg-[#00578e] rounded-3xl px-8 py-6 mt-16 z-10'>
            <h2 className='text-white text-lg flex items-center font-bold'>O que é o eSocial? <BsFillArrowDownCircleFill className='hidden text-2xl md:block ml-4' /></h2>
          </div>
          <div id="answer1" className='bg-[#00578e] rounded-3xl -mt-10 px-8 py-10 toggle'>
            <div className='w-full'>
              <p className='text-white tx-lg'>É uma plataforma online do governo que unificou a entrega de 15 obrigações da área trabalhista para empresas, outras pessoas jurídicas e também para pessoas físicas. Em vez de ter que preencher várias guias e entregá-las em canais diferentes, o empregador deverá usar apenas o sistema para cumprir a lei e manter sua contratação na legalidade.</p>
            </div>
          </div>
          <div onClick={taskTwo} className='bg-[#00578e] rounded-3xl px-8 py-6 mt-12 z-10'>
            <h2 className='text-white text-lg flex items-center  font-bold'>Minha empresa é obrigada a fazer os envios de SST para o eSocial? <BsFillArrowDownCircleFill className='hidden text-2xl md:block ml-4' /></h2>
          </div>
          <div id="answer2" className='bg-[#00578e] rounded-3xl -mt-10 px-8 py-10 toggle'>
            <p className='text-white tx-lg'>Sim, toda empresa que possui ao menos um empregador em seu quadro funcional tem a obrigatoriedade de fazer os envios ao eSocial</p>
          </div>
          <div onClick={taskThree} className='bg-[#00578e] rounded-3xl px-8 py-6 mt-12 z-10'>
            <h2 className='text-white text-lg flex items-center font-bold'>Qual a finalidade dos programas de Saúde e Segurança do trabalho? <BsFillArrowDownCircleFill className='hidden text-2xl md:block ml-4' /></h2>
          </div>
          <div id="answer3" className='bg-[#00578e] rounded-3xl -mt-10 px-8 py-10 toggle'>
            <p className='text-white tx-lg'> Servem como medidas educativas, preventivas e de conscientização dos riscos existentes no ambiente de trabalho e da saúde do colaborador.</p>
          </div>
        </div>
      </section>
      <Widget />
      <Footer />
    </> 
  )
}

{/*

<svg className="inline-block" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
              width="48" height="48"
              viewBox="0 0 48 48">
                <path fill="#2e7d32" d="M40,6H24l-2,4L10,21l-4,2v17c0,1.105,0.895,2,2,2h32c1.105,0,2-0.895,2-2V8C42,6.895,41.105,6,40,6z"></path><path fill="#c8e6c9" d="M38 38L10 38 10 21 22 10 38 10z"></path><path fill="#26662b" d="M6,23c0,0,1.673,0.198,4,0.469V21L6,23z"></path><path fill="#a5d6a7" d="M10,21v2.469C15.069,24.061,23.243,25,24,25c1.105,0,2-0.895,2-2c0-0.745-0.909-8.213-1.502-13H22 L10,21z"></path><path fill="#26662b" d="M22,10h2.498C24.213,7.689,24,6,24,6L22,10z"></path><path fill="#fbc02d" d="M24,6v15c0,1.1-0.9,2-2,2H6l4.3-4.06l9.85-9.3L24,6z"></path><path fill="#0288d1" d="M21,13c0,3.87-3.13,7-7,7c-1.36,0-2.63-0.39-3.7-1.06l9.85-9.3C20.69,10.64,21,11.78,21,13z"></path>
            </svg>
*/}