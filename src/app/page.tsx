"use client";

import Link from "next/link";

import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoPeopleOutline,
  IoStarOutline,
  IoTrendingUpOutline
} from "react-icons/io5";

import { Card } from "@/components/Card";
import { IoIosGitCompare } from "react-icons/io";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div id="home" className="bg-transparent absolute left-0 top-0 bottom-0 h-full w-9 flex items-center justify-center flex-col gap-12 text-xl pl-6 text-white">
        <Link href="/">
          <IoLogoInstagram />
        </Link>
        <Link href="/">
          <IoLogoFacebook />
        </Link>
        <Link href="/">
          <IoLogoLinkedin />
        </Link>
        <Link href="/">
          <IoLogoTwitter />
        </Link>
      </div>
      <main>
        <div className="h-[100vh] w-full bg-[url('../../public/background.png')] bg-no-repeat bg-cover bg-center">
          <div className="h-[100vh] w-full bg-[#1d1d1dbc]">
            <div className="h-[100vh] w-full max-w-[1180px] m-auto px-[20px] flex justify-center items-end flex-col">
              <div className="w-[60%] lg:w-full flex justify-center items-end lg:items-center flex-col">
                <p className="text-white self-start lg:self-center lg:text-center ml-8 mb-6">Especialistas em Direito do Consumidor e Resolução de Conflitos</p>
                <h1 className="text-primary font-serif text-7xl mb-10 lg:text-center md:text-5xl">Nós nos importamos.</h1>
                <p className="w-full max-w-[500px] text-white font-serif leading-8 text-end lg:text-center">Somos uma equipe de advogados apaixonados e comprometidos em oferecer soluções legais personalizadas para cada cliente.</p>
              </div>
            </div>
            <div id="about" className="w-full  bg-[url('../../public/background2.png')] bg-no-repeat bg-cover bg-center pt-20 px-[20px]" >
              <div className="w-full max-w-[1180px] m-auto flex justify-between items-center lg:flex-col">
                <div className="w-[50%] lg:w-full">
                  <p className="text-primary mb-2 font-medium lg:text-center">Soluções Legais para Proteger seus Interesses</p>
                  <h2 className="font-serif text-4xl mb-4 font-semibold lg:text-center">
                    Defendendo seus direitos com excelência
                  </h2>
                  <div className="h-[1px] w-[80px] bg-primary mb-8 ">
                  </div>
                  <p className="text-lg text-justify leading-8 ">Seja bem-vindo, onde a expertise jurídica encontra o compromisso inabalável com seus direitos. Somos uma equipe de advogados altamente qualificados e dedicados a proporcionar soluções legais personalizadas para cada cliente.<br /><br />
                    Nossa missão é simples: garantir que você esteja sempre um passo à frente em qualquer situação jurídica. Com anos de experiência em diversas áreas do direito, nossa equipe destaca-se pela excelência na resolução de casos complexos, oferecendo um serviço premium que excede expectativas. <br /><br />
                    Comprometemo-nos a ser mais do que uma simples firma de advocacia. Somos seus parceiros na busca por justiça e proteção dos seus direitos, seja no âmbito empresarial, pessoal ou de consumo.
                  </p>
                </div>
                <div>
                  <img src="/romano.webp" className="w-[500px] lg:w-[320px] sm:w-[100%]" />
                </div>
              </div>
            </div>
            <div id="services" className="bg-[#282828] pt-20 pb-40">
              <div className="w-full max-w-[1180px] m-auto">
                <h2 className="font-serif text-4xl mb-4 font-semibold text-primary text-center leading-8 ">
                  Autoridade Jurídica Eminente <br /> Defendendo Seus Interesses com Distinção
                </h2>
                <p className="text-lg text-center text-white">Excelência Jurídica e Compromisso Inabalável com a Justiça</p>
                <div className="grid grid-cols-4 lg:grid-cols-2 sm:grid-cols-1">
                  <Card icon={<IoStarOutline />} title="Expertise Inigualável" text="nossa equipe é composta por advogados altamente qualificados e reconhecidos por sua expertise em diversas áreas do direito." />
                  <Card icon={<IoIosGitCompare />} title="Abordagem Personalizada" text="Entendemos que cada caso é único. Por isso, adotamos uma abordagem personalizada." />
                  <Card icon={<IoTrendingUpOutline />} title="Resultados Excepcionais" text="Nosso histórico de sucesso fala por si só. Com uma dedicação incansável aos nossos clientes, alcançamos resultados notáveis em diversas situações jurídicas." />
                  <Card icon={<IoPeopleOutline />} title="Parceiros na Busca pela Justiça" text="Somos mais do que uma firma de advocacia. Tornamo-nos seus parceiros na busca por justiça e na proteção dos seus interesses." />
                </div>
              </div>
            </div>
            <div className="bg-[url('../../public/background3.png')] bg-cover bg-center h-96">
              <div className="bg-[url('../../public/background4.png')] shadow-xl rounded-md bg-no-repeat bg-cover bg-bottom w-full max-w-[1180px] m-autoelative relative -top-52 m-auto flex flex-row justify-around items-center px-[40px]">
                <div className="mt-28 pb-[20px] md:flex md:flex-col">
                  <h2 className="font-serif text-4xl mb-4 font-semibold md:text-center md:pt-10 sm:pt-20">
                    Defendendo seus <br />direitos
                  </h2>
                  <p className="text-lg text-justify text-black mb-8 leading-8 md:text-center">Comprometemo-nos a ser mais do que uma simples firma de advocacia. Somos seus parceiros na busca por justiça e proteção dos seus direitos, seja no âmbito empresarial, pessoal ou de consumo.</p>
                  <Link href="/contact" className="md:self-center"><Button title="Entre em contato" /></Link>
                </div>
                <img src="/woman.png" className="w-96 md:hidden" />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </main>
    </>
  )
}
