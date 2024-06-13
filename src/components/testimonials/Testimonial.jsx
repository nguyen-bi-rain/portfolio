import React from 'react'
import './testimonial.css'
import AVR1 from '../../assets/avatar1.jpg'
import AVR2 from '../../assets/avatar2.jpg'
import AVR3 from '../../assets/avatar3.jpg'
import AVR4 from '../../assets/avatar3.jpg'

// import Swiper core and required modules
import {  Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const Testimonial = () => {
  return (
    <section id='testimonial'>
      <h5>Review From Client</h5>
      <h2>Testimonial</h2>
      

  <Swiper className="container testimonial__container" 
   modules={[ Pagination]}
   spaceBetween={40}
   slidesPerView={1}
   navigation
   pagination={{ clickable: true }}
   
   >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVR1} alt="" />
            
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eligendi doloremque commodi assumenda perspiciatis ratione sunt nesciunt tenetur. Voluptatum sapiente eaque nemo tempora soluta laborum! Distinctio incidunt in quisquam aliquid?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVR2} alt="" />
            
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eligendi doloremque commodi assumenda perspiciatis ratione sunt nesciunt tenetur. Voluptatum sapiente eaque nemo tempora soluta laborum! Distinctio incidunt in quisquam aliquid?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVR3} alt="" />
            
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eligendi doloremque commodi assumenda perspiciatis ratione sunt nesciunt tenetur. Voluptatum sapiente eaque nemo tempora soluta laborum! Distinctio incidunt in quisquam aliquid?
            </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVR4} alt="" />
            
          </div>
          <h5 className="client__name">Ernest Achiever</h5>
            <small className='client__review'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime eligendi doloremque commodi assumenda perspiciatis ratione sunt nesciunt tenetur. Voluptatum sapiente eaque nemo tempora soluta laborum! Distinctio incidunt in quisquam aliquid?
            </small>
        </SwiperSlide>
      </Swiper>
    </section >
  )
}

// data.map(({avatar,name,review,},index)=>{
//   return (
//     <article key ={index}className="testimonial">
//           <div className="client__avatar">
//             <img src={avatar} alt="" />
            
//           </div>
//           <h5 className="client__name">{name}</h5>
//             <small className='client__review'>
//               {review}
//             </small>
//         </article>
//   )
// })

export default Testimonial