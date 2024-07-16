import { Keyboard, Scrollbar, Pagination, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import '../custom.css'

export const Testimonios = () => {
  const [boxers, setBoxers] = useState([
    {
      nombre: 'Diego Mendoza',
      image: 'diego_pose',
      info: {
        edad: 16,
        peso: 80,
        altura: 172,
      },
      comentarios: ['HOY ES UN BUEN DÍA PARA MORIR']
    },
    {
      nombre: 'Jhoselyn Cruz',
      image: 'jhoselyn_pose',
      info: {
        edad: 17,
        peso: 67,
        altura: 161,
      },
      comentarios: [
        'ANTES QUE ME APAGUE SE APAGA EL SOL',
      ]
    },
    {
      nombre: 'Jairo Molina',
      image: 'jairo_pose',
      info: {
        edad: 15,
        peso: 52,
        altura: 163,
      },
      comentarios: [
        'QUIEN TIENE MIEDO A LA MUERTE QUE NO NASCA',
      ]
    }
  ])

  return (
    <article className="flex justify-center items-center flex-col lg:gap-20 font-Friends" id='boxeadores'>
      <div className="flex flex-col lg:text-6xl font-bold w-fit lg:gap-4 gap-1 text-4xl">
        <h1 className="text-white">CONOCE A NUESTROS</h1>
        <h1 className="text-[#ED0505] lg:text-7xl text-5xl text-center">
          BOXEADORES
        </h1>
      </div>
      <div className="lg:w-[70%] w-full">
        <Swiper
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          slidesPerView={1}
          navigation={true}
          pagination={{
            clickable: true
          }}
          modules={[Keyboard, Scrollbar, Pagination, Navigation]}
        >
          {boxers.map((boxer, index) => (
            <SwiperSlide key={index} className="lg:py-10">
              <div className="flex justify-center items-center lg:gap-6 h-[700px]">
                <div className="lg:flex justify-start items-center flex-col gap-10 h-full pt-[100px] hidden">
                  {boxer.comentarios.map((comentario, idx) => (
                    <span
                      key={idx}
                      className="lg:max-w-[250px] -rotate-[4deg] text-xl text-[#ED0505] font-bold uppercase text-center"
                    >
                      {comentario}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center items-center flex-col">
                  <figure className='max-w-[300px] lg:max-w-full'>
                    <img
                      src={`/${boxer.image}.png`}
                      alt=""
                      className="lg:h-full lg:w-full w-[300px] h-[200px] sombra"
                      draggable="false"
                    />
                  </figure>
                  <span className="lg:text-6xl text-4xl font-bold text-white -rotate-2 font-Friends">
                    {boxer.nombre.toUpperCase()}
                  </span>
                  <figure className="max-w-[120px] mt-4">
                    <img
                      src="/peru_flag.png"
                      alt=""
                      className="h-full w-full"
                    />
                  </figure>
                </div>
                <div className="lg:flex justify-start items-center flex-col gap-10 h-full lg:min-w-[250px] hidden">
                  <div className="flex justify-center items-center flex-col gap-6">
                    <div className="text-white flex justify-center items-center flex-col text-2xl">
                      <span className="text-[#ED0505]">Edad</span>
                      <span>{boxer.info.edad} años</span>
                    </div>
                    <div className="text-white flex justify-center items-center flex-col text-2xl">
                      <span className="text-[#ED0505]">Peso</span>
                      <span>{boxer.info.peso} Kg</span>
                    </div>
                    <div className="text-white flex justify-center items-center flex-col text-2xl">
                      <span className="text-[#ED0505]">Altura</span>
                      <span>{boxer.info.altura} cm</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </article>
  )
}
