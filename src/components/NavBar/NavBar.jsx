import React, { useState } from 'react';
import './NavBar.scss';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import SocialMedia from '../SocialMedia';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">JeanDEV</div>
      <ul className="app__navbar-links">
        {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div animate={{ x: [300, 0] }} transition={{ duration: 1, ease: 'easeOut' }}>
            <HiX onClick={() => setToggle(false)} />
            <ul className="app__navbar-links">
              {['home', 'about', 'contact', 'work', 'skills'].map((item) => (
                <li key={item}>
                  <a onClick={() => setToggle(false)} href={`#${item}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
