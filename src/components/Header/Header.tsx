import { Link } from "react-router-dom";
import Content from "@root/components/Content";

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center p-6 md:px-16 h-20 bg-gray-900 text-white">
      <section className="w-full flex item-center justify-between">
        <Content>
          <Link to="/">
            <h1 className="font-bold text-2xl md:text-3xl">Movies</h1>
          </Link>
          <Link
            to="/favorites"
            className="text-base md:text-lg hover:text-gray-300 focus:text-gray-300 active:text-gray-300"
          >
            Favorites
          </Link>
        </Content>
      </section>
    </header>
  );
};

export default Header;
