export default function Widget () {
    return (
        <section className="w-full bg-[#00578e] px-12 md:px-16 lg:px-32 py-10">
            <div className="w-full sm:w-5/6 sm:m-auto flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-1/4 mt-4">
                    <img className="w-2/3 sm:w-1/3 lg:w-2/3 m-auto lg:m-0" src="logo-gesst-white.png" alt="Logo Gesst Branca"/>
                    <p className="text-lg text-white mt-8"><strong>Endereço:</strong> Avenida Augusto Maynard, 361, Primeiro Andar, São José, Aracaju - SE</p>
                </div>
                <div className="w-full flex flex-col lg:w-1/4 mt-10 lg:m-0 text-white">
                    <h4 className="text-xl"><strong>Navegação</strong></h4>
                    <ul className="">
                        <li className="mt-4">Home</li>
                        <li className="mt-4">Serviços</li>
                        <li className="mt-4">Quem somos</li>
                        <li className="mt-4">Perguntas frequentes</li>
                    </ul>
                </div>
                <div className="w-full lg:w-1/4 mt-10 lg:m-0 text-white">
                    <h4 className="text-xl"><strong>Contato</strong></h4>
                    <p className="text-lg mt-4">Telefone: (79) 99653-6481</p>
                    <p className="text-lg mt-4">E-mail: comercial01@grupogesst.com.br</p>
                </div>
            </div>
        </section>
    )
}