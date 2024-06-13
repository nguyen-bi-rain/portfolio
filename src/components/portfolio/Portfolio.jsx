import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'




const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG1} alt="" />
          </div>
          <h3>Ecommerce shop Sale Clothes</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nguyen-bi-rain/BTL_Web" className='btn '>Github</a>
            <a href="https://dribbble.com/Alien_pixels" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-img">
            <img src={IMG2} alt="" />
          </div>
          <h3>Web API  CraftShop</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/nguyen-bi-rain/CraftShop_Backend.git" className='btn '>Github</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

// data.map(({id,image,title,github,demo}) =>{
//   return (
//     <article key={id} className="portfolio__item">
//           <div className="portfolio__item-img">
//             <img src={image} alt={title} />
//           </div>
//           <h3>{title}</h3>
//           <div className="portfolio__item-cta">
//             <a href={github} className='btn '>Github</a>
//             <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
//           </div>
//         </article>
//   )
// })
export default Portfolio