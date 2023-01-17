import Head from 'next/head'
import Footer from "../components/footer";
import HeaderAbout from "../components/headerAbout";
import WidgetAbout from "../components/widgetAbout";
import Script from 'next/script'
import {BsBullseye} from "react-icons/bs";
import {AiFillEye} from "react-icons/ai";
import {FaHandshake} from "react-icons/fa";

export default function Servicos (){
    return(
        <>
            <Head>
                <title>GESST - Sobre</title>
                <meta name="description" content="Site portfólio da GESST" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=PT+Sans&display=swap" rel="stylesheet" />
            </Head>

            <Script src="/bg-header.js" strategy={'lazyOnload'}></Script>
           
            <section className="w-full relative pt-[2rem] bg-[url('../public/bg-gesst.png')] bg-cover">
                <HeaderAbout />
                <div className="w-full pt-[4.5rem] px-4 md:px-12 lg:px-16 xl:px-20 grid grid-rows-1 lg:grid-cols-2 lg:grid-rows-none">
                    <div className='w-full flex flex-col lg:flex-row text-xl sm:text-2xl text-white items-center'>
                        <p className='pt-12 pb-10 px-2 xl:px-6'>Há menos de um ano, empreendedores decidiram unir forças para fazer um trabalho que o mercado não tinha dentro da área de obrigações sociais: saúde, segurança e contabilidade em uma única empresa para prestar um serviço de gestão (com o compromisso periódico) e educacional (com informações, plantões de dúvidas e capacitação específica para eSocial) para empresas em Sergipe. Assim nasce a GESST…</p>
                        <img className='block lg:hidden' src='/coletivo-gesst.png' alt='Sócios Daniel Carvalho, Lourdes Almeida e André Cavalcanti' width={1900}/>
                    </div>
                    <div className=' hidden lg:flex flex-col justify-end'>
                        <img src='/coletivo-gesst.png' alt='Sócios Daniel Carvalho, Lourdes Almeida e André Cavalcanti' width={1900}/>
                    </div>
                </div>
            </section>

            <section className="w-full bg-[#f5f6f7] p-4">
                <div className="w-full lg:w-3/4 m-auto">
                    <div className="flex justify-between flex-wrap">
                        <div className="w-full lg:w-2/5 sm:mr-2 rounded-xl flex flex-col items-center p-4">
                            <BsBullseye className="text-center text-6xl text-[#f5aa1d]" />
                            <div className="w-full">
                                <h2 className="text-[#00578e] text-3xl font-medium text-center my-4">Missão</h2>
                                <p className="text-[#00578e] text-xl font-normal my-4">Prover a gestão integrada em saúde e segurança do trabalho de forma simples. Mas, com a qualidade no atendimento a legislação vigente.<br/><br/><strong>Ser a maior e melhor referência no mercado.</strong>
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5 sm:mr-2 rounded-xl flex flex-col items-center p-4">
                            <AiFillEye className="text-center text-6xl text-[#f5aa1d]" />
                            <div className="w-full">
                                <h2 className="text-[#00578e] text-3xl font-medium text-center my-4">Visão</h2>
                                <p className="text-[#00578e] text-xl font-normal my-4">Ser reconhecida como uma empresa de excelência no mercado Aracajuano na prestação de serviço em medicina e segurança do trabalho, quadruplicando o número de clientes até 2024.<br/><br/><strong>Foco no cliente.</strong>
                                </p>
                            </div>
                        </div>

                        <div className="w-full lg:w-2/5 m-auto rounded-xl flex flex-col items-center p-4">
                            <FaHandshake className="text-center text-6xl text-[#f5aa1d]" />
                            <div className="w-full">
                                <h2 className="text-[#00578e] text-3xl font-medium text-center my-4">Valores</h2>
                                <p className="text-[#00578e] text-xl font-normal my-4">Visão sistêmica na gestão integrada em saúde e segurança do trabalho; integridade, honestidade e responsabilidade; Ética e compromisso com os resultados; Sentimento familiar com todos os membros da equipe; Desenvolvimento profissional e pessoal para parceiros e membros da equipe; Segurança e confiança adquiridas no mercado; Abertura da comunicação com o cliente através do canal de reclamação.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='sm:w-3/4 md:w-2/3 lg:w-11/12 xl:w-5/6 m-auto px-8 py-14'>
                <h2 className='text-center text-6xl text-[#00578e] font-bold mb-10'>Os Sócios</h2>
                <div className='flex items-center mt-16'>
                    <div className='flex flex-col lg:flex-row'>
                        <img className='w-full lg:w-1/2' src='andre.jpg' />
                        <div className='w-full py-4 px-8 2xl:px-16 2xl:py-16 rounded-b-2xl lg:rounded-r-2xl lg:rounded-b-none lg:rounded-br-2xl shadow-2xl bg-white'>
                            <h2 className='text-3xl 2xl:text-4xl text-[#00578e]'>André Cavalcanti</h2>
                            <br/>
                            <p className='text-xl 2xl:text-2xl'>Fala povo bonito! <br/> <br/>
                            Sou o André Cavalcanti,
                            filho da <strong>"Marta Cavalcanti"</strong> e o <strong>"Aldemar Almeida"</strong>.
                            Um filho de Deus abençoado com o dom da persistência.
                            Mestre e educador com a formação em pedagogia, didática do ensino superior e educação de adultos e caminhando para o Doutorado. Técnico e tecnólogo em segurança do trabalho caminhando para a engenharia de segurança.
                            Diretor da AEfetiva soluções em segurança do trabalho.
                            Palestrante e mentor profissional na área de desenvolvimento de pessoas, instrutor e professor a nível médio técnico.
                            Responsável técnico e credenciado em alguns órgãos como vigilância sanitária e corpo de bombeiros
                            Tive a benção de galgar do regime celetista passando do autônomo até alcançar o empresariado.
                            <br/><br/>
                            E, hoje... mais uma benção: Sou Sócio da GESST!
                            </p><br/>
                            <a href='https://www.instagram.com/prof.andrecavalcanti/' target="_blank" rel="noreferrer">
                                <div className='w-full text-center shadow-lg bg-[#ccc] rounded-full p-2'>
                                    <p className='text-xl'>Instagram/@prof.andrecavalcanti</p>
                                </div>
                            </a>     
                        </div>
                    </div>
                </div>

                <div className='flex items-center mt-16'>
                    <div className='flex flex-col-reverse lg:flex-row'>
                        <div className='w-full py-4 px-8 2xl:px-16 2xl:py-16 rounded-b-2xl lg:rounded-l-2xl lg:rounded-b-none lg:rounded-bl-2xl shadow-2xl bg-white'>
                            <h2 className='text-3xl 2xl:text-4xl text-[#00578e]'>Daniel Carvalho</h2>
                            <br/>
                            <p className='text-xl 2xl:text-2xl'>Olá!!! <br/> <br/>
                            Sou o Daniel Carvalho,
                            não poderia começar a me apresentar sem falar deles:
                            Meus pais <strong>(Dra Selma Carvalho - Pediatra & Dr Antonio Vasconcelos – Cardiologista/Médico do Trabalho)</strong> que são os culpados por toda a minha história.
                            Especialista em gestão de pessoas (DALE CARNEGIE como aluno e Agente Graduado)
                            Socio Gestor da Rede SOMED – Uma empresa familiar onde realizamos exames e temos a especialidade em Medicina do Trabalho.
                            Vivência profissional a mais de 25 anos na área de saúde ocupacional.
                            <br/><br/>
                            E sou Sócio da GESST.
                            </p><br/>
                            <a href='https://www.instagram.com/danielcarvalho.santos/' target="_blank" rel="noreferrer">
                                <div className='w-full text-center shadow-lg bg-[#ccc] rounded-full p-2'>
                                    <p className='text-xl'>Instagram/@danielcarvalho.santos</p>
                                </div>
                            </a>
                        </div>
                        <img className='w-full lg:w-1/2' src='daniel.jpg' />
                    </div>
                </div>

                <div className='flex items-center mt-16'>
                    <div className='flex flex-col lg:flex-row'>
                        <img className='w-full lg:w-1/2' src='lourdes.jpg' />
                        <div className='w-full py-4 px-8 2xl:px-16 2xl:py-16 rounded-b-2xl lg:rounded-r-2xl lg:rounded-b-none lg:rounded-br-2xl shadow-2xl bg-white'>
                            <h2 className='text-3xl 2xl:text-4xl text-[#00578e]'>Lourdes Almeida</h2>
                            <br/>
                            <p className='text-xl 2xl:text-2xl'>Oi geeeeente!! <br/> <br/>
                            Sou Lourdes Almeida,
                            técnica contábil, gestora de RH, MBA em Legislação Trabalhista e Previdenciária.
                            Professora e consultora especialista em eSocial e departamento pessoal,
                            Vivência profissional com mais de 18 anos na área trabalhista.
                            Fui palestrante do 1º Congresso Nacional eSocial em São Paulo-2018 e
                            do 1º Congresso Nacional ON-LINE de Departamento Pessoal-2020.
                            <br/><br/>
                            E sou Sócia no Grupo GESST.
                            </p><br/>
                            <a href='https://www.instagram.com/lourdesalmeidadp/' target="_blank" rel="noreferrer">
                                <div className='w-full text-center shadow-lg bg-[#ccc] rounded-full p-2'>
                                    <p className='text-xl'>Instagram/@lourdesalmeidadp</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

            </section>
            

            <WidgetAbout />
            <Footer />
        </>
    )
}