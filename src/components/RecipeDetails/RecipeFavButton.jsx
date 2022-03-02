import React, { useContext } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import FavoritesContext from "../../context/FavoritesContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAuth } from "../../context/AuthContext";

const RecipeFavButton = ({ uri }) => {
  const { isFavorites, handleFavorites } = useContext(FavoritesContext);
  const { currentUser } = useAuth();

  const alertToast = () => {
    toast("Please Login first", {
      className: "custom-toast",
      draggable: true,
      position: toast.POSITION.BOTTOM_CENTER,
    });
  };

  const addToFavorites = (uri) => {
    if (currentUser) {
      handleFavorites(uri);
    } else {
      alertToast();
    }
  };

  return (
    <>
      <ToastContainer />
      <button
        onClick={() => addToFavorites(uri)}
        className={`${
          isFavorites(uri) ? "saved" : "save "
        } mt-2 flex items-center rounded px-2 py-1 text-white hover:opacity-80`}
      >
        {isFavorites(uri) ? (
          <AiFillStar
            style={{ marginRight: "5px", fontSize: "20px", color: "#fff" }}
          />
        ) : (
          <AiOutlineStar style={{ marginRight: "5px", fontSize: "20px" }} />
        )}
        <p className="text-sm">SAVE</p>
      </button>
    </>
  );
};

export default RecipeFavButton;
