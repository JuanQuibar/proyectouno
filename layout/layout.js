import Head from "next/head"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Layout({children, tituloPagina, descripcion}) {
  return (
    <>
        <Head>
            <title> Diario UNO | Periodismo inteligente </title>
            <meta name="description" content={`Periodismo de verdad - ${descripcion}`} />
        </Head>

        <div className="md:container">
            <Header className='relative z-10' />
            <main>
              {children}
            </main>
            <Footer />

        </div>

    </>
  )
}
