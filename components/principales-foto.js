import Image from "next/image"
import Link from "next/link"
import { generarSlug } from "@/utils/helpers"

export default function PrincipalesFoto({principal}) {

    //const autor = principal.authors[0]?.name
    const volanta= principal?.categories[0]?.name || 'FALTA'
    const slugParcial = generarSlug(principal.title)
    const seccion = volanta.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
    const slug = `${seccion}_${slugParcial}`
    const autor = principal.authors[0]?.name
    
  return (

    <Link href={`/${slug}-${principal.id}`} 
      className="pb-3 border-b-2 border-b-gray-200"
    >
        <article  >

            <Image src={principal.thumbnails[0].files[6].url} alt="foto" width={776} height={438} priority className=" md:rounded-lg w-full "/>

            <p className="px-3 pt-3 uppercase text-primary roboto font-bold pb-0">{volanta} </p>

            <h2 className="px-3 pt-1 text-lg md:text-2xl lg:text-xl xl:text-2xl font-extrabold tracking-tight leading-tight active:bg-slate-300 lg:hover:underline lg:active:bg-transparent">{principal.title}</h2>

            {autor ? (<p className="px-3 uppercase roboto text-xs pt-2 lg:pt-3 text-gray-400 font-bold">{autor}</p>) : ("")}

            <p className="px-3 pt-1 text-sm lg:text-lg line-clamp-4">{principal.caption} </p>

        </article>
    </Link> 
  )
}
