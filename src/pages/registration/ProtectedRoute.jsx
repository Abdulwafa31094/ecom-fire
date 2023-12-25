import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectedRoutes = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");

    if (!user) {
      // User is not authenticated, navigate to login page
      navigate("/login");
    }
  }, [navigate]);

  return <>{children}</>;
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("user"));
    console.log(admin.user.email);
    if (admin.user.email === "abdulwafa31094@gmail.com") {
      return children;
    } else {
      return navigate("/login");
    }
  });
};
