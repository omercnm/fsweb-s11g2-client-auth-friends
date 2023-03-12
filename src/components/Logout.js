import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function AuthMenu() {
  let location = useLocation();
  useEffect(() => {}, [location]);

  const history = useHistory();
  let loggedInToken = localStorage.getItem("token");
  const triggerLogout = (e) => {
    console.log("logout butonuna basıldı");
    localStorage.removeItem("token");
    history.push("/login");
  };
  return (
    <span>
      {loggedInToken === null ? (
        ""
      ) : (
        <button
          onClick={triggerLogout}
          className="font-bold border border-black p-3 bg-orange-500 text-white"
        >
          LOGOUT
        </button>
      )}
    </span>
  );
}
