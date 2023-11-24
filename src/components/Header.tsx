import { useState } from "react";

import Image from "next/image";
import logo from "../../public/background.png";

import { Link as LinkComponent } from "./Link"
import Link from "next/link";

import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoCloseOutline, IoMenuOutline } from "react-icons/io5";

export function Header() {
  const [active, setActive] = useState(false);

  function handleActive() {
    setActive(!active)
  }

  return (
    <header className="bg-transparent absolute top-0 w-[100%]">
      <div className="w-full max-w-[1180px] flex justify-between items-center px-[20px] py-8 m-auto">
        <Link href="/" className="text-primary font-serif text-2xl transition-opacity hover:opacity-25">
          LOGO
        </Link>
        <div >
          <button onClick={handleActive} className="text-4xl transition-opacity text-primary hover:opacity-25 border-[1px] border-primary p-1">
            {active ? <IoCloseOutline /> : <IoMenuOutline />}
          </button>
          <div
            className={
              "fixed overflow-hidden z-40 bg-opacity-25 inset-0 ease-in-out " +
              (active
                ? " transition-opacity opacity-100 duration-500 translate-x-0 bg-zinc-900"
                : " transition-all delay-500 opacity-0 translate-x-full bg-transparent")
            }
          >
            <div
              className={
                "bg-white w-screen max-w-lg right-0 absolute h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform" +
                (active ? " translate-x-0 " : " translate-x-full ")
              }
            >
              <div className="relative z-50 w-screen max-w-lg pb-10 flex flex-col justify-start space-y-6 h-full">
                <button
                  className='w-[100%] flex justify-end p-[20px] text-4xl text-primary hover:opacity-25'
                  onClick={() => {
                    setActive(false);
                  }}
                >
                  <IoCloseOutline />
                </button>
                <nav className="flex flex-col items-center justify-center gap-8">
                  <Link href="/" onClick={() => setActive(false)} className="cursor-pointer uppercase border-b-[1px] border-transparent transition-colors hover:border-b-primary">Home</Link>
                  <LinkComponent title="Sobre nós" to="about" onClick={() => setActive(false)} />
                  <LinkComponent title="Serviços" to="services" onClick={() => setActive(false)} />
                  <Link href="/contact" onClick={() => setActive(false)} className="cursor-pointer uppercase border-b-[1px] border-transparent transition-colors hover:border-b-primary">Contato</Link>
                </nav>
              </div>
            </div>
            <section
              className=" w-screen h-full cursor-pointer "
              onClick={() => {
                setActive(false);
              }}
            />
          </div>
        </div>
      </div>
    </header>

  )
}