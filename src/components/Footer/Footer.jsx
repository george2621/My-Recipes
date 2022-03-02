import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="flex flex-wrap justify-center w-full h-32 py-5 text-sm text-white footer">
      <div className="mx-3">
        <p>© 2022 GEORGE ROUMIEH ENTERPRISES LIMITED</p>
      </div>
      <div>
        <ul className="flex flex-wrap mx-3">
          <li className="mx-2 cursor-pointer hover:text-black">TERMS OF USE</li>
          <li className="mx-2 cursor-pointer hover:text-black">
            PRIVACY POLICY
          </li>
          <li className="mx-2 cursor-pointer hover:text-black">COOKIES</li>
          <li className="mx-2 cursor-pointer hover:text-black">CONTACT</li>
          <li className="mx-2 cursor-pointer hover:text-black">SITEMAP</li>
        </ul>
      </div>
      <div>
        <ul className="flex mx-3">
          <li className="mx-2 cursor-pointer hover:text-black">
            <AiFillFacebook style={{ fontSize: "25px" }} />
          </li>
          <li className="mx-2 cursor-pointer hover:text-black">
            <AiOutlineInstagram style={{ fontSize: "25px" }} />
          </li>
          <li className="mx-2 cursor-pointer hover:text-black">
            <AiOutlineTwitter style={{ fontSize: "25px" }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
