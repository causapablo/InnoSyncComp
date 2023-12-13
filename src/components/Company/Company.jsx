'use client'
import Image from "next/image";
import dj from "../../assets/imgs/Brigante512.png";
import riot from "../../assets/imgs/Riot-logo-negro.png";
import dot from "../../assets/imgs/doodad.png";
import work from "../../assets/imgs/working.jpg";
import brokear from "../../assets/imgs/brokear.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";

const Company = () => {
    return (
        <div className="bg-white">
          <div className="flex ">
            <div>
              <h2>
                La mejor empresa de soluciones tecnológicas con alcance global
              </h2>
              <p>
                La mejor empresa global de soluciones tecnológicas, con
                capacidad para servir clientes en cualquier parte del mundo con
                las más innovadoras e integrales soluciones informáticas.
              </p>
              <div className="flex">
                <button>Nuestra misión</button>
                <button>Nuestra visión</button>
                <button>Sobre nosotros</button>
              </div>
            </div>

            <div className="relative">
              <Image className="absolute inset-0" src={dot} alt="img" />

              <Image className="relative w-80 h-80" src={work} alt="img" />
            </div>
          </div>
          <p>
            Somos la empresa líder en crear innovadoras soluciones tecnológicas
            para resolver desafíos globales, con talento de clase mundial y
            oficinas en más de 50 países garantizamos éxito en proyectos sin
            importar ubicación.
          </p>
          <ul>
            <li>
              Líderes en innovación: Desarrollamos las soluciones tecnológicas
              más innovadoras para resolver desafíos empresariales de forma
              creativa y efectiva.
            </li>
            <li>
              Equipo de expertos: Nuestro staff multidisciplinario con las más
              altas credenciales garantiza el éxito en implementación de
              soluciones informáticas globales.
            </li>
            <li>
              Alcance global: Nuestro equipo multicultural tiene la experiencia
              y capacidad para entender necesidades de clientes alrededor del
              mundo y entregar soluciones efectivas sin importar su locación
              geográfica.
            </li>
          </ul>
          <button>Lee más</button>

          <div className="divider"></div>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Image src={brokear} alt="img" className="opacity-10 w-32 h-14" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={dj} alt="img" className="opacity-10 w-32 h-14" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={riot} alt="img" className="opacity-10 w-32 h-14" />
            </SwiperSlide>
          </Swiper>
        </div>
    );
}
 
export default Company;