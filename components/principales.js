import Principal1 from "./principal1"
import Principal2 from "./principal2"
import PrincipalesFoto from "./principales-foto"
import PrincipalesSFoto from "./principales-s-foto"
import Encuesta from "./encuesta"
import Aside from "./aside"

export default function Principales({principales}) {

    // Agregar un ternario para elegir la foto según la propiedad screen.width

  return (

    <main className=" ">

      <div className="pb-3 mb-3">

        <Principal1
          id={principales[0].id}
          volanta={principales[0].categories[0].name}
          foto={principales[0].thumbnails[0].files[1].url}
          titulo={principales[0].title}
          autor={principales[0]?.authors[0]?.name}
        />

      </div>


      <div className="flex flex-col flex-nowrap mt-4 lg:flex-row lg:items-start gap-x-4">

        PARTE ORGANICA
        <section className="lg:w-2/3">

          SEGUNDA NOTA
          <div className=" mb-4 pb-3">

            <Principal2
              foto={principales[1].thumbnails[0].files[1].url}
              titulo={principales[1].title}
              volanta={principales[1].categories[0].name || 'FALTA CATEGORIA'} 
              bajada={principales[1].caption}
              id={principales[1].id} 
              autor={principales[1]?.authors[0]?.name}
            />

          </div>

          ENCUESTA MOBILE Y TABLET
          <div className="mb-4 px-3 lg:hidden">
            <Encuesta />
          </div>

          CUATRO NOTAS CON FOTO
          <div className="grid pb-3 mb-3 lg:grid-cols-2 lg:gap-x-4 gap-y-6">

            {principales?.map((principal, i) => (
              i>1 && i<6 &&
                <PrincipalesFoto 
                key={principal.id}
                principal={principal}
                className=""
                />  
            ))}

          </div>  

          CUATRO NOTAS SIN FOTO
          <div className="grid pb-3 mb-3 lg:grid-cols-2 lg:gap-x-4">

            {principales?.map((principal, i) => (
              i>5 && i<8 &&

              <PrincipalesSFoto 
                key={principal.id}
                principal={principal}
              />
            ))}

          </div>  

        </section>

        <div className="lg:w-1/3 mb-3 pb-3">

          <div className="pb-3 mb-3 hidden lg:flex">
            COMPONENTE DE ENCUESTA SE MUESTRA SOLO MIN 1024
            <Encuesta />
          </div>
          <Aside className="pb-3 mb-3" />

        </div>


      </div>
    
  </main>
    
  )
}

