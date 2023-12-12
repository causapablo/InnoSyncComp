'use client'

import { useState } from "react";
import Image from "next/image";
import dev from "../../assets/imgs/developmentB.png";
import fyb from "../../assets/imgs/fybB.png";
import hostingB from "../../assets/imgs/hostingB.png";
import hostingW from "../../assets/imgs/hostingW.png";


const Solutions = () => {

    const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

    return (
        <div className="mt-[800px]">
        <h2 className="mb-10 text-center font-bold text-4xl">
          Las mejores soluciones IT que proveemos
        </h2>

        <div className="flex justify-center">
          <div className="bg-white w-96 p-10">
            <Image className="block mx-auto mt-10 mb-10" src={dev} alt="img" />
            <p className="text-center font-bold text-lg">
              Desarrollo de sitios web
            </p>
            <p className="text-center text-lg">
              Sitios web personalizados, comercio electrónico, diseño receptivo.
            </p>
          </div>

          <div className="bg-white w-96 p-10 ml-8">
            <Image src={fyb} alt="img" className="block mx-auto mt-10 mb-10" />
            <p className="text-center font-bold text-lg">
              Desarrollo frontend y backend
            </p>
            <p className="text-center text-lg">
              Desarrollamos interfaces atractivas, rápidas y amigables. También
              una sólida infraestructura para un óptimo funcionamiento.
            </p>
          </div>

          <div
            className="group bg-white w-96 p-10 ml-8 hover:bg-oxfordBlue transition duration-500"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Image
              src={isHovering ? hostingW : hostingB}
              alt="img"
              className="block mx-auto mt-10 mb-10"
            />
            <p className="group-hover:text-white text-center font-bold text-lg">
              Soporte y mantenimiento, hosting y deployment
            </p>
            <p className="group-hover:text-white text-center text-lg">
              Solución de problemas, servicios de hosting, implementación en la
              nube como AWS.
            </p>
          </div>
        </div>
        </div>
    );
}
 
export default Solutions;