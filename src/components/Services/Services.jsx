'use client'
import Image from "next/image";
import img from "../../assets/imgs/Home.png";
import world from "../../assets/imgs/world.png";


const Services = () => {
    return (
        <div className="flex ">
          <div>
            <Image src={img} alt="img" className="w-[800px] h-[500px]" />
          </div>
          <div className="relative">
            <div>
              <Image
                src={world}
                alt="img"
                className="opacity-30 absolute inset-0 left-64"
              />
            </div>
            <div>
              <h2 className="...">
                Realizamos todo tipo de servicios TI que prometen tu éxito
              </h2>
              <p className="...">Somos una empresa...</p>
              <button className="...">Contact us</button>
            </div>
          </div>
        </div>
    );
}
 
export default Services;