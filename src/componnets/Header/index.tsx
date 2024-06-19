import { useEffect, useState } from 'react';
import './style.css'

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleMouseMove = () => {
      setHidden(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleLinkClick = () => {
    setHidden(true);
    
  };

  return (
    <header className={`${scrolled ? 'scrolled' : ''} ${hidden ? 'hidden' : ''}`}>
      <img src="src\assets\Logotipo Moderno Tecnologia e Gaming Roxo (1).png"  alt="" />
    <nav >
        <ul>
        <li><a onClick={handleLinkClick} href="#section-home">Home</a></li>
        <li><a  onClick={handleLinkClick} href="#section-about">Sobre</a></li>
        <li><a  onClick={handleLinkClick} href="#section-rules">Regras</a></li>
        <li><a  onClick={handleLinkClick} href="#section-form">cadastro</a></li>
        <li><a  onClick={handleLinkClick} href="#section-curiosity">Curiosidade</a></li>
        <li><a  onClick={handleLinkClick} href="#section-contact">Contato</a></li> 
        
        </ul>

    </nav>
    </header>

  )
}

export default Header