import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const link = [
  {
    href: "/home",
    text: "home",
  },

  {
    href: "/products",
    text: "products",
  },
];

export default function Navbar() {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setIsLogin(true);
  }, []);

  function handleLoginLogout() {
    if (isLogin) {
      localStorage.removeItem("token");
      setIsLogin(false);
      navigate("login");
    }

    if (!isLogin) {
      navigate("/login");
    }
  }

  return (
    <nav className="w-full flex flex-row  gap-4 bg-neutral-700 items-center">
      {link.map((link) => {
        return (
          <Link
            key={link.href}
            to={link.href}
            className="w-full text-center p-4"
          >
            {link.text}
          </Link>
        );
      })}
      <div className="w-full text-center " onClick={handleLoginLogout}>
        {isLogin ? "Logout" : "Login"}
      </div>
    </nav>
  );
}
