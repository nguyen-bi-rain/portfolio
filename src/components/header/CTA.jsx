import React from 'react'
import CV from '../../assets/VuTheNguyen_CV.pdf'
const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Dowload CV</a>
        <a href="" className='btn-primary btn'>Let's Talk</a>
    </div>
  )
}

export default CTA