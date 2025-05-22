import Image from "next/image"
import Link from "next/link"
import { generarSlug } from "@/utils/helpers"

export default function Principal2({ foto, autor, titulo, volanta, bajada, id }) {

  const slugParcial = generarSlug(titulo)
  const seccion = volanta.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  const slug = `${seccion}_${slugParcial}`

  return (
    <article className="">

      <Link href={`/${slug}-${id}`}>

        <Image src={foto} alt="foto" width={776} height={438} priority className="w-screen md:rounded-lg aspect-video " />

        <p className="px-3 pt-3 uppercase roboto text-primary font-bold pb-0">{volanta} </p>

        <h2 className="px-3 pt-1 text-lg md:text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight active:bg-slate-300 lg:hover:underline lg:active:bg-transparent">{titulo}</h2>

        {autor ? (<p className="px-3 uppercase roboto text-xs pt-2 lg:pt-3 text-gray-400 ">{autor}</p>) : ("")}

        <p className="px-3 pt-1 text-sm lg:text-lg line-clamp-3">{bajada} </p>

      </Link>

    </article>
  )
}
