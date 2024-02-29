import { FaLinkedin, FaFacebookF } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineSearch,
  AiOutlineTwitter,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" bg-gray-900 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between footer__container">
        <article className="footer__section flex items-center mb-4 md:mb-0">
          <div className="footer__brand mr-4">
            <p className="text-xl font-bold">DevCorp</p>
          </div>
          <div className="footer__socials flex space-x-4">
            <a
              href="https://www.linkedin.com/in"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaLinkedin className="footer-icon" />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <FaFacebookF className="footer-icon" />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <AiFillInstagram className="footer-icon" />
            </a>
          </div>
        </article>
        <article className="footer__section flex items-center">
          <AiOutlineSearch className="footer-icon" />
          <input
            type="text"
            className="ml-2 px-3 py-2 border border-gray-700 rounded"
            placeholder="Search"
          />
          <button className="ml-2 px-4 py-2 bg-primary text-white rounded hover:bg-opacity-80 transition duration-300">
            Subscribe Here
          </button>
        </article>
      </div>
      <div className="text-center mt-8">
        <small>Made with ❤️ in 2024 </small>
      </div>
    </footer>
  );
};

export default Footer;
