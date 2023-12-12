'use client'
import Image from "next/image";
import { RiLinkedinFill } from "react-icons/ri";
import solana from "../../assets/imgs/solana.jpg";


const Experts = () => {
    return (
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
    );
}
 
export default Experts;