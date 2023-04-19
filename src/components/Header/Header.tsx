import { Link } from "react-router-dom";
import Content from "@root/components/Content";

const Header = () => {
  return (
    <header className="w-full flex items-center h-20 bg-gray-900 text-white">
      <Content>
        <section className="w-full h-auto flex items-center justify-between">
          <Link to="/">
            <h1 className="font-bold text-2xl md:text-3xl">Movies</h1>
          </Link>
          <Link
            to="/favorites"
            className="text-base md:text-lg hover:text-gray-300 focus:text-gray-300 active:text-gray-300"
          >
            Favorites
          </Link>
        </section>
      </Content>
    </header>
  );
};

export default Header;
