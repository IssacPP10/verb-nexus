import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, Users, ForkKnife } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span>Verb Nexus</span>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/academy"
              className={`${
                location.pathname.includes("/academy") || location.pathname === "/"
                  ? "text-blue-600"
                  : "text-gray-600"
              } hover:text-blue-800 transition-colors flex items-center space-x-1`}
            >
              <BookOpen className="h-4 w-4" />
              <span>Academy</span>
            </Link>
            <Link
              to="/clubs"
              className={`${
                location.pathname.includes("/clubs")
                  ? "text-green-600"
                  : "text-gray-600"
              } hover:text-green-800 transition-colors flex items-center space-x-1`}
            >
              <Users className="h-4 w-4" />
              <span>Clubs</span>
            </Link>
            <Link
              to="/kitchen"
              className={`${
                location.pathname.includes("/kitchen")
                  ? "text-yellow-400"
                  : "text-gray-600"
              } hover:text-yellow-600 transition-colors flex items-center space-x-1`}
            >
              <ForkKnife className="h-4 w-4" />
              <span>Kitchen</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link
                to="/academy"
                className={`${
                  location.pathname.includes("/academy") || location.pathname === "/"
                    ? "text-blue-600"
                    : "text-gray-600"
                } hover:text-blue-800 transition-colors flex items-center space-x-2 px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                <BookOpen className="h-4 w-4" />
                <span>Academy</span>
              </Link>
              <Link
                to="/clubs"
                className={`${
                  location.pathname.includes("/clubs")
                    ? "text-green-600"
                    : "text-gray-600"
                } hover:text-green-800 transition-colors flex items-center space-x-2 px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                <Users className="h-4 w-4" />
                <span>Clubs</span>
              </Link>
              <Link
                to="/kitchen"
                className={`${
                  location.pathname.includes("/kitchen")
                    ? "text-yellow-400"
                    : "text-gray-600"
                } hover:text-yellow-600 transition-colors flex items-center space-x-2 px-2 py-1`}
                onClick={() => setIsOpen(false)}
              >
                <ForkKnife className="h-4 w-4" />
                <span>Kitchen</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;