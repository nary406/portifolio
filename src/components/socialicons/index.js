import React, { useState } from 'react';
import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'; // Import React icons as needed
import "./index.css"
const SocialButtons = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="social-buttons">
      <a
        href="#"
        className={`social-button github ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaGithub />
      </a>
      <a
        href="#"
        className={`social-button linkedin ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaLinkedin />
      </a>
      <a
        href="#"
        className={`social-button facebook ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaFacebook />
      </a>
      <a
        href="#"
        className={`social-button instagram ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialButtons;
