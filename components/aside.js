import Aviso1 from "./avisos/aviso1"
import Aviso2 from "./avisos/aviso2"
import Aviso3 from "./avisos/aviso3"
import Aviso4 from "./avisos/aviso4"

export default function Aside() {
  return (
    <div className=" bg-gray-200  lg:flex flex-col items-center p-3">
      <p className="uppercase text-xs text-gray-700 roboto pb-2">Publicidad</p>

      {/* AVISOS 3 Y 4 SE OCULTAN EN MOBILE */}
      <Aviso4 />
      <Aviso3 />
      <Aviso1 />
      <Aviso2 />

    </div>
  )
}
