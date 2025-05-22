import Link from "next/link"
import Image from "next/image"

export default function Zona({manuel, series, libros, protagonistas}) {

  return (
    <>
        <div  className="border-b-2 border-black border-solid pb-1 mb-5 mx-3 lg:mx-0">
            <p className="text-3xl italic">Zona Crítica</p>
      </div>

      <section className='grid gap-4 lg:grid-cols-4 '>

        {/* OPINION */}
        <article className='bg-celeste bg-opacity-50 pb-3'>

            <Link href={`/`}>
                <div className='px-3 py-1 text-white bg-primary'>
                    <p className='roboto uppercase font-bold text-sm'> Opinión</p>
                </div>
                
                {/* BLOQUE AUTOR */}
                <div className="flex justify-start items-end gap-2 mx-1 p-2 text-xs roboto rounded-lg border-b-2 border-b-primary">

                    <Image src={series.authors[0]?.images[0]?.url} width={66} height={66} alt="foto autor" className="rounded-full w-[30px] h-[30px] " />

                    <p >Por {manuel.authors[0].name}</p>

                </div> 

                <h2 className='px-3 pt-3 text-lg sm:text-2xl lg:text-lg italic font-[600] lg:leading-6 active:bg-slate-300 lg:hover:underline lg:active:bg-transparent'>{manuel.title} </h2>

                <Image src={manuel.thumbnails[0].files[1].url} alt="foto" width={720} height={1280} priority className="px-3 pt-2 md:rounded-lg w-full aspect-square  object-cover overflow-hidden md:aspect-auto lg:aspect-square "/>
            </Link>

        </article>

        {/* SERIES */}
        <article className='grid items-stretch bg-celeste bg-opacity-50 pb-3'>

            <Link className="grid items-start" href={`/`}>
                <div className='px-3 py-1 text-white bg-primary'>
                    <p className='roboto uppercase font-bold text-sm'> Series</p>
                </div>
                
                {/* BLOQUE AUTOR */}
                <div className="flex justify-start items-end gap-2 mx-1 p-2 text-xs roboto rounded-lg border-b-2 border-b-primary">

                    <Image src={series.authors[0]?.images[0]?.url} width={66} height={66} alt="foto autor" className="rounded-full w-[30px] h-[30px] " />

                    <p >Por {series.authors[0].name}</p>

                </div> 

                <h2 className='px-3 pt-3 text-lg sm:text-2xl lg:text-lg italic font-[600] lg:leading-6 active:bg-slate-300 lg:hover:underline lg:active:bg-transparent'>{series.title} </h2>

               {/*  <div className="border-2 self-stretch  border-black">
                    item 1
                </div> */}

                <Image src={series.thumbnails[0].files[1].url} alt="foto" width={720} height={1280} priority className="px-3 pt-2 md:rounded-lg w-full aspect-square  object-cover overflow-hidden md:aspect-auto lg:aspect-square  "/>

            </Link>

        </article>

        {/* LIBROS */}
        <article className='bg-celeste bg-opacity-50 pb-3'>

            <Link href={`/`}>
                <div className='px-3 py-1 text-white bg-primary'>
                    <p className='roboto uppercase font-bold text-sm'> Libros</p>
                </div>
                
                {/* BLOQUE AUTOR */}
                <div className="flex justify-start items-end gap-2 mx-1 p-2 text-xs roboto rounded-lg border-b-2 border-b-primary">

                    <Image src={libros.authors[0]?.images[0]?.url} width={66} height={66} alt="foto autor" className="rounded-full w-[30px] h-[30px] " />

                    <p >Por {libros.authors[0].name}</p>

                </div> 

                <h2 className='px-3 pt-3 text-lg sm:text-2xl lg:text-lg italic font-[600] lg:leading-6 active:bg-slate-300 lg:hover:underline lg:active:bg-transparent'>{libros.title} </h2>

                <Image src={libros.thumbnails[0].files[1].url} alt="foto" width={720} height={1280} priority className="px-3 pt-2 md:rounded-lg w-full aspect-square  object-cover overflow-hidden md:aspect-auto lg:aspect-square "/>
            </Link>

        </article>

        {/* PROTAGONISTAS */}
        <article className='bg-celeste bg-opacity-50 pb-3'>

            <Link href={`/`}>
                <div className='px-3 py-1 text-white bg-primary'>
                    <p className='roboto uppercase font-bold text-sm'> Protagonistas</p>
                </div>
                
                {/* BLOQUE AUTOR */}
                <div className="flex justify-start items-end gap-2 mx-1 p-2 text-xs roboto rounded-lg border-b-2 border-b-primary">

                    <Image src={protagonistas.authors[0]?.images[0]?.url} width={66} height={66} alt="foto autor" className="rounded-full w-[30px] h-[30px] " />

                    <p >Por {protagonistas.authors[0].name}</p>

                </div> 

                <h2 className='px-3 pt-3 text-lg sm:text-2xl lg:text-lg italic font-[600] lg:leading-6 active:bg-slate-300 lg:hover:underline lg:active:bg-transparent'>{protagonistas.title} </h2>

                <Image src={protagonistas.thumbnails[0].files[1].url} alt="foto" width={720} height={1280} priority className="px-3 pt-2 md:rounded-lg w-full aspect-square  object-cover overflow-hidden md:aspect-auto lg:aspect-square  "/>

            </Link>

        </article>


      </section>
        
    </>
  )
}
