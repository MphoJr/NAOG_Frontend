import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function InactivityHandler() {
  const navigate = useNavigate();

  useEffect(() => {
    let timeout;

    const resetTimer = () => {
      clearTimeout(timeout);
      timeout = setTimeout(
        () => {
          localStorage.removeItem("token"); // clear JWT
          alert("Session expired due to inactivity.");
          navigate("/admin/login"); // redirect to login
        },
        5 * 60 * 1000,
      ); // 5 minutes
    };

    // Listen for user activity
    window.addEventListener("mousemove", resetTimer);
    window.addEventListener("keydown", resetTimer);
    window.addEventListener("click", resetTimer);

    resetTimer(); // start timer on mount

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", resetTimer);
      window.removeEventListener("keydown", resetTimer);
      window.removeEventListener("click", resetTimer);
    };
  }, [navigate]);

  return null; // invisible component
}
