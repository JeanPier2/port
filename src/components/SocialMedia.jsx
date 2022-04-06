import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <a href="https://twitter.com/JeanPierreHuam4" target={'_blank'}>
        <div>
          <BsTwitter />
        </div>
      </a>
      <a href="https://www.instagram.com/jeanpixulita/" target={'_blank'}>
        <div>
          <BsInstagram />
        </div>
      </a>
      <a href="https://www.facebook.com/JeanxPier/" target="_blank">
        <div>
          <FaFacebookF />
        </div>
      </a>
    </div>
  );
};

export default SocialMedia;
