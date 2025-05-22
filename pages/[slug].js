
import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import parse from 'html-react-parser'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import Layout from "@/layout/layout"
import Aside from "@/components/aside"
import { cleanText } from "@/utils/helpers" 
import { formatearFecha } from "@/utils/helpers"
import Aviso2 from "@/components/avisos/aviso2";


export default function Articulo({datosNota, texto}) {

    const fecha = formatearFecha(datosNota.publicationDate)
   
    useEffect(() => {
        const miDiv = document.getElementById("texto");
        if (miDiv) {
        const divs = miDiv.querySelectorAll("div");
        for (let i = divs.length - 1; i >= 0; i--) {
            divs[i].parentNode.removeChild(divs[i]);
        }
        }
    }, []);

    const {title, caption, shortTitle: volanta} = datosNota
    console.log(datosNota)

    
    return (
        <Layout>

            <main className="mt-4">

                {/* TITULO y BAJADA  */}
                <article className="mx-4 md:mx-0 ">

                    <p className="uppercase text-primary roboto font-bold"><Link href="/politica">{datosNota.categories[0].nombre}</Link> | <span className="font-extrabold text-slate-400">{volanta} </span></p>

                    <h1 className="font-extrabold text-3xl mt-2 lg:text-5xl pb-3">{title} </h1>

                    <p className="text-xl lg:text-2xl mt-4 pb-3">{caption} </p>
                    
                </article>
                {/* NOTA + ASIDE */}
                <div className="flex flex-col flex-nowrap mt-10 lg:flex-row lg:items-start gap-x-4 " >
                    
                    <section>
                    {/* foto */}
                        <article>
                            <div className="border-b-2 border-b-primary items-center mb-12 pb-5">

                            <Image src={datosNota.mediaObjects[0].files[0].url} alt="foto" width={1200} height={675} priority className="md:rounded-lg" />
                            <p className="text-sm roboto py-1">{datosNota.mediaObjects[0].caption.replace(/<\/?p>/g, '')} </p>

                            </div>

                            {/* BLOQUE AUTOR */}
                            {datosNota.authors.length > 0 ? (

                            <div className="flex flex-col items-center md:flex-row gap-x-4 mb-12 roboto">

                                <Image src={datosNota.authors[0]?.images[0].url} width={66} height={66} alt="foto autor" className="rounded-full w-[66px] h-[66px] mb-3" />

                                <div className="flex flex-col items-center justify-center">

                                    <div className="flex flex-col border-b-2 border-b-primary items-center pb-3">

                                        <p className="uppercase font-bold">{datosNota.authors[0].name}</p>
                                        <p className="text-xs">{fecha } </p>

                                    </div>


                                    <div className='flex mt-3 space-x-5'>

                                        <Link href='/'>
                                            <InstagramIcon  sx={{ fontSize: 25 }}/> 
                                        </Link>

                                        <Link href='/'>
                                            <FacebookOutlinedIcon  sx={{ fontSize: 25 }}/> 
                                        </Link>

                                        <Link href='/'>
                                            <TwitterIcon  sx={{ fontSize: 25 }}/> 
                                        </Link>
                                            
                                    </div>

                                </div>
                            </div>
                            ): ('')
                            }
                            {/* TEXTO */}
                            <div className="whitespace-pre-wrap mx-4 text-lg lg:text-xl md:mx-0" id="texto, pepe">{parse(texto)} </div>
                        </article>
                    </section>

                    <Aside />

                </div>

            </main>

        </Layout>
    )
  } 
  
  export async function getServerSideProps({query: {slug}}) {
    
    const obtenerNumeros = (cadena) => cadena.match(/\d+$/)?.[0] ?? "";
    const id= obtenerNumeros(slug)
    
    const respuesta = await fetch(`https://api.diariouno.com.ar/2.0/public/articles/${id}`)
    const datosNota = await respuesta.json()

    const texto = cleanText(datosNota.body)

      return{
          props:{
            datosNota,
            texto
          }
      }
  } 
  