import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocial = () => {
  return (
    <div className="header__social">
        <a href="https://www.linkedin.com/in/th%E1%BA%BF-nguy%C3%AAn-v%C5%A9-350003257/" targer="__blank"><BsLinkedin/></a>
        <a href="https://github.com/nguyen-bi-rain" targer="__blank"><FaGithub/></a>
    </div>
  )
}

export default HeaderSocial