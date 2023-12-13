'use client'
import Image from "next/image";
import solana from "../../assets/imgs/solana.jpg";
import wave from "../../assets/imgs/wave.jpg";
import { ImQuotesLeft } from "react-icons/im";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

const Opinions = () => {
    return (
        <div>
          <h2>Checkea qué está diciendo nuestros clientes...</h2>
          <Image src={wave} alt="img" className="opacity-10 w-full" />

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
              <div className="card lg:card-side bg-base-100 shadow-xl w-[500px]">
                <figure>
                  <Image src={solana} alt="img" className=" w-20 h-20" />
                </figure>
                <div className="card-body">
                  <ImQuotesLeft className="opacity-20 " />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam explicabo neque perspiciatis dicta placeat veniam modi
                    tempore quia! Saepe molestias in error autem facere soluta
                    veniam explicabo itaque, iste ad.
                  </p>
                  <p>Esteban Quito / </p> <p>CEO en Brokear</p> 

                  <div className="card-actions justify-end">
                    <div className="rating rating-lg rating-half">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                        />
                        {/* <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className="card lg:card-side bg-base-100 shadow-xl w-[500px]">
                <figure>
                  <Image src={solana} alt="img" className=" w-20 h-20" />
                </figure>
                <div className="card-body">
                  <ImQuotesLeft className="opacity-20 " />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam explicabo neque perspiciatis dicta placeat veniam modi
                    tempore quia! Saepe molestias in error autem facere soluta
                    veniam explicabo itaque, iste ad.
                  </p>
                  <p>Esteban Rey / </p> <p>CEO en Brokear</p> 

                  <div className="card-actions justify-end">
                    <div className="rating rating-lg rating-half">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                        />
                        {/* <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>
            <SwiperSlide><div className="card lg:card-side bg-base-100 shadow-xl w-[500px]">
                <figure>
                  <Image src={solana} alt="img" className=" w-20 h-20" />
                </figure>
                <div className="card-body">
                  <ImQuotesLeft className="opacity-20 " />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ullam explicabo neque perspiciatis dicta placeat veniam modi
                    tempore quia! Saepe molestias in error autem facere soluta
                    veniam explicabo itaque, iste ad.
                  </p>
                  <p>Esteban Quito / </p> <p>CEO en Brokear</p> 
                  <div className="card-actions justify-end">
                    <div className="rating rating-lg rating-half">
                      <div className="rating">
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                          checked
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                        />
                        <input
                          type="radio"
                          name="rating-2"
                          className="mask mask-star-2 bg-goldenrod"
                        />
                        {/* <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </SwiperSlide>
          </Swiper>
        </div>
    );
}
 
export default Opinions;