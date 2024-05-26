import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

function Footer() {
  return (
    <footer className="px-4 text-center text-gray-600 bg-gradient-to-t from-[rgb(0,167,255,0.27)] to-[#ffffff00] pt-10 pb-6 mt-[-2.5rem]">
      <small className="mb-2 block text-xs">
        &copy; 2024 Isuru Chamara. All Rights Reserved.
      </small>
      <p className="text-xs">
        Designed and developed by{" "}
        <span className="hover:text-gray-900 italic">Isuru Chamara</span> using
        React, Next.js, Typescript, Tailwind CSS, Framer Motion, React Email and
        Resend.
      </p>
      <div className="flex justify-center text-xs space-x-4 mt-2">
        <a
          href="https://github.com/isuruch92"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900"
          aria-label="GitHub"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/isuruc/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://www.facebook.com/isuru.chamara.5/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900"
          aria-label="Facebook"
        >
          <FaFacebook size={24} />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
