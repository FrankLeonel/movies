import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bottom-0 flex justify-center items-center w-full h-20 text-white">
      <p>
        © {new Date().getFullYear()}, Built with
        {` `}
        <Link
          className="text-blue-400 hover:text-blue-300"
          to="https://frankleonel.github.io/portfolio/"
        >
          Frank Leonel
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
