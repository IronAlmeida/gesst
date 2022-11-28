export default function Footer (){

    let data = new Date();
    let ano = data.getFullYear();    

    return (
        <section className="w-full bg-[#01416B] py-8 px-4 text-white text-center">
            <p>Copyright © GESST - Gestão & Educação em Saúde e Segurança no Trabalho | {ano}</p>
        </section>
    )
}