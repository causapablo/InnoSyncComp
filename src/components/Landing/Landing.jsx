"use client";
import { useState } from "react";
import Image from "next/image";
import img from "../../assets/imgs/Home.png";
import dev from "../../assets/imgs/developmentB.png";
import fyb from "../../assets/imgs/fybB.png";
import hostingB from "../../assets/imgs/hostingB.png";
import hostingW from "../../assets/imgs/hostingW.png";
import dot from "../../assets/imgs/doodad.png";
import work from "../../assets/imgs/working.jpg";
import brokear from "../../assets/imgs/brokear.png";
import world from "../../assets/imgs/world.png";
import solana from "../../assets/imgs/solana.jpg";
import dj from "../../assets/imgs/Brigante512.png";
import riot from "../../assets/imgs/Riot-logo-negro.png";
import wave from "../../assets/imgs/53863587-resumen-de-onda-gris-aislado-en-el-fondo-blanco-ilustración-del-vector-para-el-diseño-de-los.jpg";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import { Autoplay, Pagination } from "swiper/modules";

import { RiLinkedinFill } from "react-icons/ri";

const Landing = () => {
  const [isHovering, setIsHovering] = useState(false);
  const onMouseEnter = () => setIsHovering(true);
  const onMouseLeave = () => setIsHovering(false);

  return (
    <main>
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

        <div className="bg-white">
          <h2>Conocé a nuestro mejores expertos</h2>
          <p>
            Contamos con un equipo altamente calificado de profesionales en
            tecnología de la información listos para satisfacer tus necesidades
            informáticas. Expertos en distintas áreas como programación, bases
            de datos y más.
          </p>
          <div className="flex justify-center">
            <div className="relative group">
              <Image
                src={solana}
                alt="img"
                className="w-64 h-64 rounded-full group-hover:opacity-80"
              />
              <div className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-oxfordBlue bg-opacity-60 transition duration-300 ease-in-out w-64 h-64 rounded-full">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <RiLinkedinFill />
                </a>
              </div>
              <p>CO-FOUNDER</p>
            </div>

            <div className="relative group">
              <Image
                src={solana}
                alt="img"
                className="w-64 h-64 rounded-full group-hover:opacity-80"
              />
              <div className="hidden group-hover:flex absolute inset-0 items-center justify-center bg-oxfordBlue bg-opacity-60 transition duration-300 ease-in-out w-64 h-64 rounded-full">
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white"
                >
                  <RiLinkedinFill />
                </a>
              </div>
              <p>CO-FOUNDER</p>
            </div>
          </div>
        </div>

        <div>
          <h2>Checkea qué está diciendo nuestros clientes...</h2>
          <Image
                src={wave}
                alt="img"
                className="opacity-10 w-full"
              />

<Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              holis1
            </SwiperSlide>
            <SwiperSlide>
              holis2
            </SwiperSlide>
            <SwiperSlide>
             holis3 
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </main>
  );
};

export default Landing;
