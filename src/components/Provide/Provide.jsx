'use client'
import Image from "next/image";
import img from "../../assets/imgs/Home.png";

const Provide = () => {
    return (
        <div>
        <Image src={img} alt="img" className="absolute w-full" />

        <h2 className="relative text-white">Proveemos servicios IT</h2>
        <p className="relative text-white">
          Lo mejor en soluciones IT a escala global
        </p>
        <p className="relative text-white">
          Soluciones web a tu medida. Equipo experto en diseño y programación de
          sitios profesionales para impulsar tu negocio.
        </p>
        <button className="relative text-white">Conocé más</button>
      </div>
    );
}
 
export default Provide;