import Image from "next/image"
const UltimasNoticias = ({ultimasNoticias}) => {
  return (
    <div className="grid mx-3 py-5">

        <div  className="border-b-2 border-gray-400 border-solid pb-1 mb-5  lg:mx-0">
            <p className="text-2xl italic text-gray-600">Últimas noticias</p>
        </div>

        {ultimasNoticias?.map((ultimanoticia) =>(
            <article key={ultimanoticia.id} className="flex gap-3 py-4 border-b-2 border-gray-100 border-solid last:border-none" >

                <div className="flex-col w-2/3 ">
                    <p className=" uppercase text-[10px] text-primary roboto font-bold pb-0">{ultimanoticia.shortTitle} </p>
               
                    <h3 className="font-bold">
                    {ultimanoticia.title} 
                    </h3>
                </div>


                <figure className="w-1/3">
                    <Image src={ultimanoticia.thumbnails[0].files[0].url} alt="foto" width={776} height={438} priority className=" foto md:rounded-lg w-full foto "/>
                </figure>
                
            </article>
        ))}

        
        
    </div>
  )
}

export default UltimasNoticias