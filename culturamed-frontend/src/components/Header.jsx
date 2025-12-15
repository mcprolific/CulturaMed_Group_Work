import { Link } from "react-router-dom";

export const Header = () => (
  <header className="bg-gradient-to-r from-blue-700 to-blue-500 text-white p-4 shadow-md sticky top-0 z-50">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-extrabold flex items-center gap-2">
        <span>🏥</span> CulturaMed
      </h1>
      <nav className="space-x-4">
        {["Home", "Doctor Login", "Doctor Register"].map((link) => (
          <Link
            key={link}
            to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-")}`}
            className="px-3 py-1 rounded hover:bg-white hover:text-blue-700 transition-colors duration-300 font-semibold"
          >
            {link}
          </Link>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
