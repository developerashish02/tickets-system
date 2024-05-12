import { Link, Navigate, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useGetUser from "../../Hooks/useGetUser";

const Header = () => {
  const isAuthenticated = useAuth();
  const navigate = useNavigate();
  const userInfo = useGetUser();

  const handleToggle = () => {
    if (isAuthenticated) {
      window.localStorage.removeItem("user");
      navigate("/login");
      return;
    } else {
      navigate("/login");
    }
  };

  const handleNavigate = () => {
    if (userInfo?.role === "user") {
      return <Navigate to="/" replace />;
    } else if (userInfo?.role === "admin") {
      return <Navigate to="/admin" replace />;
    } else {
      return <Navigate to="/tech-dashboard" replace />;
    }
  };
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
              onClick={handleToggle}
            >
              {isAuthenticated ? "Sign Out" : "Sign In"}
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          ></div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
