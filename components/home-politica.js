import Link from "next/link"
import Image from "next/image"
import PoliticaNacional from "./politica-nacional"

export default function HomePolitica({politicas}) {

  const primeraNota = {
    foto: `${politicas[0].thumbnails[0].files[1].url}`,
    titulo: `${politicas[0].title}`,
    volanta: `${politicas[0].shortTitle}`,  
    bajada: `${politicas[0].caption}`,
    id: `${politicas[0].id}`, 
    autor: `${politicas[0]?.authors[0]?.name}`
  }

  return (
    <>
      <div  className="border-b-2 border-gray-400 border-solid pb-1 mb-5 mx-3 lg:mx-0">
        <p className="text-2xl italic text-gray-600">Política</p>
      </div>
      <div className="flex flex-col flex-nowrap lg:flex-row lg:items-stretch gap-x-4">

        {/* PARTE ORGANICA */}
        <div className="lg:w-2/3">
        
          {<article className="pb-3 mb-3">

            <Link href={`/`}>
              
              <Image  src={primeraNota.foto} alt="foto" width={776} height={438} className="w-screen md:rounded-lg foto "/>

              <p className="px-3 pt-3 uppercase roboto text-primary font-bold pb-0">{primeraNota.volanta} </p>

              <h2 className="px-3 pt-1 text-lg md:text-3xl xl:text-4xl font-extrabold tracking-tight leading-tight active:bg-slate-300 lg:hover:underline lg:active:bg-transparent">{primeraNota.titulo}</h2>

              {primeraNota.autor ? (<p className="px-3 uppercase roboto text-xs pt-2 lg:pt-3 text-gray-400 ">{primeraNota.autor}</p>) : ("")}

              <p className="px-3 pt-1 text-sm lg:text-lg line-clamp-4">{primeraNota.bajada} </p>

            </Link>  

          </article>}

        </div>

       {/*  <div className="lg:w-1/3 pb-3 mb-3">
          <PoliticaNacional />

        </div> */}

      </div>

      <div className="grid pb-3 mb-3 lg:grid-cols-3 lg:gap-x-4 gap-y-6 ">

        {politicas?.map((politica, i) => ( 
          
          i>0 &&
          <Link  key={politica.id} href={`/`}>
              <article >

                  <Image src={politica.thumbnails[0].files[6].url} alt="foto" width={776} height={438} priority className=" md:rounded-lg w-full foto "/>

                  <p className="px-3 pt-3 uppercase text-primary roboto font-bold pb-0">{politica.shortTitle} </p>

                  <h2 className="px-3 pt-1 text-lg md:text-2xl lg:text-xl xl:text-2xl font-extrabold tracking-tight leading-tight active:bg-slate-300 lg:hover:underline lg:active:bg-transparent">{politica.title}</h2>

                  {/* {politica.authors[0].name ? (<p className="px-3 uppercase roboto text-xs pt-2 lg:pt-3 text-gray-400 font-bold">{politica.authors[0].name}</p>) : ("")} */}

                  <p className="px-3 pt-1 text-sm lg:text-lg line-clamp-4">{politica.caption} </p>

              </article>
          </Link> 

        ))}
      
      </div>
    </>
  )
}
