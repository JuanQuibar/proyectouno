import Image from "next/image"
import Link from "next/link"
import { generarSlug } from "@/utils/helpers"


export default function Principal1({foto, titulo, autor, volanta, id}) {

  const slugParcial = generarSlug(titulo)
  const seccion = volanta.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const slug = `${seccion}/${slugParcial}`
  

  return (

    <article className="">

      <Link href={`/${slug}-${id}`}>

        <Image src={foto} alt="foto" width={1200} height={675} priority className="w-full md:rounded-lg relative -z-10 aspect-[4/3] sm:aspect-auto object-cover overflow-hidden "/>

          <div className="w-[95%] text-white mx-auto text-center -mt-[3%] p-3  bg-primary rounded-lg z-40 ">

            <h2 className=" text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl  font-bold tracking-tight leading-tight active:bg-slate-300 lg:hover:underline lg:active:bg-transparent">{titulo}</h2>
            
            {autor ? (<p className="pt-1 lg:pt-2 uppercase roboto text-xs font-sans font-bold">{autor}</p>) : ("")}
          
          </div>

      </Link>
      


    </article>
  )
}
